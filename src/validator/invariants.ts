/**
 * CTN Kernel Invariants
 * Three invariants that must hold for a well-formed kernel
 */

import type { CTNKernel } from '../types/index.js';

export interface InvariantResult {
  readonly valid: boolean;
  readonly invariant: string;
  readonly message?: string;
}

/**
 * I. The Epistemic Anchor (ϑ-Invariant)
 * Truth must dominate precedence hierarchy
 */
export function checkEpistemicAnchor(kernel: CTNKernel): InvariantResult {
  const { precedence } = kernel.init;

  // ϑ (Truth) must be primary
  if (precedence.primary !== 'ϑ') {
    return {
      valid: false,
      invariant: 'ϑ-Invariant',
      message: `Truth (ϑ) must be primary in precedence, found: ${precedence.primary}`,
    };
  }

  return { valid: true, invariant: 'ϑ-Invariant' };
}

/**
 * II. The Syntax Firewall (ζ-Invariant)
 * Internal DSL must be decoupled from external output
 */
export function checkSyntaxFirewall(kernel: CTNKernel): InvariantResult {
  const { enforcement } = kernel.boundary;

  // Must enforce Leak = 0
  if (!enforcement.includes('Leak') || !enforcement.includes('0')) {
    return {
      valid: false,
      invariant: 'ζ-Invariant',
      message: 'Boundary must enforce Leak(ℓ, Σ_CTN) = 0',
    };
  }

  return { valid: true, invariant: 'ζ-Invariant' };
}

/**
 * III. The Null-Assumption (σ-Invariant)
 * Kernel must define behavior for non-satisfiable states
 */
export function checkNullAssumption(kernel: CTNKernel): InvariantResult {
  const { nullCheck } = kernel.solver;

  // Must have explicit null handling
  if (!nullCheck || nullCheck.trim() === '') {
    return {
      valid: false,
      invariant: 'σ-Invariant',
      message: 'Solver must define null-assumption handling',
    };
  }

  return { valid: true, invariant: 'σ-Invariant' };
}

/**
 * Check all three invariants
 */
export function checkAllInvariants(kernel: CTNKernel): InvariantResult[] {
  return [
    checkEpistemicAnchor(kernel),
    checkSyntaxFirewall(kernel),
    checkNullAssumption(kernel),
  ];
}

/**
 * Check if kernel is well-formed (all invariants hold)
 */
export function isWellFormed(kernel: CTNKernel): boolean {
  return checkAllInvariants(kernel).every(r => r.valid);
}
