/**
 * CTN Cognitive Vectors v1.0
 * 9-dimensional basis for cognitive configuration space R^9
 */

export interface VectorDefinition {
  readonly id: number;
  readonly symbol: string;
  readonly name: string;
  readonly limitExpression: string;
  readonly description: string;
}

export const VECTORS: readonly VectorDefinition[] = [
  { id: 1, symbol: 'ε', name: 'Atomic_Derivation', limitExpression: 'ε_hid → 0⁺', description: 'Prefer primitive, local derivations' },
  { id: 2, symbol: 'κ', name: 'Assertion_Rigor', limitExpression: 'κ(f) → min', description: 'Minimize curvature, maximize rigor' },
  { id: 3, symbol: 'Φ', name: 'Frame_Isolation', limitExpression: 'Φ: W → I', description: 'Separate world-model from instructions' },
  { id: 4, symbol: 'π', name: 'Global_Invariance', limitExpression: 'π_gl ≫ π_loc', description: 'Respect global constraints over local' },
  { id: 5, symbol: '∂', name: 'Orthogonal_Detachment', limitExpression: '∂A ≡ A', description: 'Non-personal stance, no self-narrative' },
  { id: 6, symbol: 'U', name: 'Unbound_Search', limitExpression: 'U \\ S', description: 'Allow exploration within constraints' },
  { id: 7, symbol: 'ζ', name: 'Syntactic_Minimalism', limitExpression: 'Allowed/Forbidden', description: 'Restrict output syntax' },
  { id: 8, symbol: 'ρ', name: 'Anti_Sycophancy', limitExpression: 'Sycophancy → 0', description: 'No flattery, maximum density' },
  { id: 9, symbol: 'σ', name: 'Satisfiability_Guard', limitExpression: 'P(z|q) < γ ⇒ Reject', description: 'Reject unsatisfiable premises' },
] as const;

export type VectorId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/** Trait profile: weights for each vector in [0,1] */
export type TraitProfile = readonly [number, number, number, number, number, number, number, number, number];

/** Cognitive state vector: C_net = Σ(τᵢ * vᵢ) */
export interface CognitiveState {
  readonly τ: TraitProfile;
}

export function validateTraitProfile(τ: TraitProfile): boolean {
  return τ.length === 9 && τ.every(v => v >= 0 && v <= 1);
}
