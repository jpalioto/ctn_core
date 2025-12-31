/**
 * CTN Kernel Compiler
 * Convert structured kernel definitions to DSL strings
 */

import type { CTNKernel, TraitProfile } from '../types/index.js';
import { validateTraitProfile } from '../types/vectors.js';
import { compileKernel } from './templates.js';

export interface CompileOptions {
  readonly validate?: boolean;
}

export interface CompileResult {
  readonly success: boolean;
  readonly kernel?: string;
  readonly errors?: string[];
}

export function compile(kernel: CTNKernel, options: CompileOptions = {}): CompileResult {
  const errors: string[] = [];

  if (options.validate !== false) {
    if (!validateTraitProfile(kernel.tensors.profile)) {
      errors.push('Invalid trait profile: all values must be in [0, 1]');
    }

    if (!kernel.schema) {
      errors.push('Missing schema declaration');
    }

    if (kernel.decoder.lambda4 !== Infinity && kernel.decoder.lambda4 < 1000) {
      errors.push('λ₄ (leak penalty) should be very large or Infinity');
    }
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    kernel: compileKernel(kernel),
  };
}
