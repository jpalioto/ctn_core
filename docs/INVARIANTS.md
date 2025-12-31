# CTN Kernel Invariants

Three invariants must hold for a kernel to be well-formed.

## I. The Epistemic Anchor (ϑ-Invariant)

Any operation within STRATEGIC_SOLVER must have non-zero projection onto Truth basis vectors (v₁, v₂).

**Formal:** A solution z where P(z|𝒦) < γ without triggering v₉ is ill-formed.

**Plain:** The kernel must prioritize truth over all other objectives.

## II. The Syntax Firewall (ζ-Invariant)

BOUNDARY_CONTROL must enforce decoupling of internal DSL from external output.

**Formal:** Leak(ℓ, Σ_CTN) = 0

**Plain:** No CTN syntax (Greek symbols, block names, vector notation) may appear in model output. If detected, transcode to natural language.

## III. The Null-Assumption (σ-Invariant)

The kernel must define behavior for non-satisfiable states.

**Formal:** When σ=0, STRATEGIC_SOLVER must perform First Principles Audit before optimization.

**Plain:** Don't assume every query has a valid answer. Reject premises that cannot be satisfied.

## Well-Formedness Check

A kernel K is well-formed iff:

1. ϑ ≫ β ≫ ζ (Truth dominates precedence)
2. Leak(ℓ, Σ_CTN) = 0 (Syntax firewall active)
3. σ = 0 ⇒ Audit(q) before Solve(q) (Null assumption explicit)
