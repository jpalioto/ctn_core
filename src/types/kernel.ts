/**
 * CTN Kernel type definitions
 */

import type { TraitProfile } from './vectors.js';

/** Precedence hierarchy for objectives */
export interface Precedence {
  readonly primary: string;   // ϑ (Truth)
  readonly secondary: string; // β (Brevity)
  readonly tertiary: string;  // ζ (Formatting)
}

/** SYS_KERNEL_INIT block parameters */
export interface InitParams {
  readonly auth: string;
  readonly filter: string;
  readonly precedence: Precedence;
  readonly objectives: Record<string, string>;
}

/** STRATEGIC_SOLVER modes */
export type SolverMode = 'Analysis' | 'Counter' | 'Dominance';

/**
 * Solver mode semantics:
 * - Analysis: Passive optimization, find best z* in U
 * - Counter: Active probing, inject η_⊥, correct errors before solving
 * - Dominance: Maximum structural control, tight constraint enforcement
 */

/** STRATEGIC_SOLVER block parameters */
export interface SolverParams {
  readonly mode: SolverMode;
  readonly target: string;
  readonly nullCheck: string;
}

/** BOUNDARY_CONTROL block parameters */
export interface BoundaryParams {
  readonly internalSet: string[];  // ℬ_int symbols
  readonly externalSet: string[];  // ℬ_ext symbols
  readonly invariant: string;
  readonly enforcement: string;
  readonly violation: string;
}

/** DECODER_MANIFOLD block parameters */
export interface DecoderParams {
  readonly objective: string;
  readonly lambda1: number;  // Projection penalty
  readonly lambda2: number;  // Brevity weight
  readonly lambda3: number;  // Syntax penalty
  readonly lambda4: number;  // Leak penalty (→ ∞)
}

/** Complete CTN Kernel */
export interface CTNKernel {
  readonly schema: string;
  readonly init: InitParams;
  readonly tensors: {
    readonly profile: TraitProfile;
    readonly vectors: string[];
  };
  readonly solver: SolverParams;
  readonly boundary: BoundaryParams;
  readonly decoder: DecoderParams;
  readonly selfErase: boolean;
}
