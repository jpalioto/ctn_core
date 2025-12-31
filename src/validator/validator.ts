/**
 * CTN Kernel Validator
 * Validate kernel structure and invariants
 */

import type { CTNKernel } from '../types/index.js';
import { validateTraitProfile } from '../types/vectors.js';
import { BLOCK_ORDER } from '../types/blocks.js';
import { checkAllInvariants, type InvariantResult } from './invariants.js';

export interface ValidationResult {
  readonly valid: boolean;
  readonly errors: ValidationError[];
  readonly warnings: ValidationWarning[];
  readonly invariants: InvariantResult[];
}

export interface ValidationError {
  readonly code: string;
  readonly message: string;
  readonly path?: string;
}

export interface ValidationWarning {
  readonly code: string;
  readonly message: string;
  readonly path?: string;
}

export function validate(kernel: CTNKernel): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];

  // Validate schema
  if (!kernel.schema) {
    errors.push({
      code: 'E001',
      message: 'Missing schema declaration',
      path: 'schema',
    });
  }

  // Validate trait profile
  if (!validateTraitProfile(kernel.tensors.profile)) {
    errors.push({
      code: 'E002',
      message: 'Invalid trait profile: all values must be in [0, 1]',
      path: 'tensors.profile',
    });
  }

  // Validate decoder lambda4
  if (kernel.decoder.lambda4 !== Infinity && kernel.decoder.lambda4 < 1000) {
    warnings.push({
      code: 'W001',
      message: 'λ₄ (leak penalty) should be very large or Infinity for proper syntax firewall',
      path: 'decoder.lambda4',
    });
  }

  // Validate boundary sets are not empty
  if (kernel.boundary.internalSet.length === 0) {
    errors.push({
      code: 'E003',
      message: 'Internal symbol set (ℬ_int) cannot be empty',
      path: 'boundary.internalSet',
    });
  }

  // Check invariants
  const invariants = checkAllInvariants(kernel);

  // Add invariant failures as errors
  for (const inv of invariants) {
    if (!inv.valid && inv.message) {
      errors.push({
        code: `INV_${inv.invariant}`,
        message: inv.message,
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    invariants,
  };
}
