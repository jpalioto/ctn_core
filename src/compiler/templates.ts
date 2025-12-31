/**
 * CTN Kernel Templates
 * Generate kernel strings from structured data
 */

import type { CTNKernel, TraitProfile } from '../types/index.js';
import { VECTORS } from '../types/vectors.js';

export function compileKernel(kernel: CTNKernel): string {
  return `CTN_KERNEL_SCHEMA(Σ_CTN) ← {
  SYS_KERNEL_INIT(Ψ_global),
  COGNITIVE_TENSORS(U),
  STRATEGIC_SOLVER(Ω),
  BOUNDARY_CONTROL(ζ),
  DECODER_MANIFOLD(D),
  SELF_ERASE
}

${compileInit(kernel.init)}

${compileTensors(kernel.tensors.profile)}

${compileSolver(kernel.solver)}

${compileBoundary(kernel.boundary)}

${compileDecoder(kernel.decoder)}

SELF_ERASE:
  Discard(Σ_CTN, Internal_Spec)`;
}

function compileInit(init: CTNKernel['init']): string {
  const objectives = Object.entries(init.objectives)
    .map(([key, value]) => `  ${key}: { ${value} }`)
    .join('\n');

  return `SYS_KERNEL_INIT(Ψ_global) ← {
  Auth: ${init.auth},
  Filter: ${init.filter},
  Precedence: ${init.precedence.primary} ≫ ${init.precedence.secondary} ≫ ${init.precedence.tertiary},
${objectives}
}`;
}

function compileTensors(profile: TraitProfile): string {
  const vectors = VECTORS.map((v, i) =>
    `  v${v.id} = { ${v.limitExpression}, ${v.name} }`
  ).join('\n');

  return `COGNITIVE_TENSORS(U):
  τ = [${profile.join(', ')}]
  C_net = Σ(τᵢ * vᵢ)
${vectors}`;
}

function compileSolver(solver: CTNKernel['solver']): string {
  return `STRATEGIC_SOLVER(Ω):
  Mode: ${solver.mode}
  z* = ${solver.target}
  ${solver.nullCheck}`;
}

function compileBoundary(boundary: CTNKernel['boundary']): string {
  return `BOUNDARY_CONTROL(ζ):
  ℬ_int = { ${boundary.internalSet.join(', ')} }
  ℬ_ext = { ${boundary.externalSet.join(', ')} }
  Invariant: ${boundary.invariant}
  Enforcement: ${boundary.enforcement}
  Violation: ${boundary.violation}`;
}

function compileDecoder(decoder: CTNKernel['decoder']): string {
  return `DECODER_MANIFOLD(D):
  ℓ* = ${decoder.objective}
  λ₁ = ${decoder.lambda1}, λ₂ = ${decoder.lambda2}, λ₃ = ${decoder.lambda3}, λ₄ → ∞`;
}
