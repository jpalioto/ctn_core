# CTN Strategic Solver Modes

The STRATEGIC_SOLVER block accepts a `Mode` parameter that determines search behavior.

## Three Modes

| Mode | Symbol | Behavior | Use Case |
|------|--------|----------|----------|
| Analysis | Ω_A | Passive optimization. Find best z* in U. | Research, exploration, open-ended |
| Counter | Ω_C | Active probing. Inject η_⊥. Correct errors before solving. | Peer review, rigorous dialogue, adversarial |
| Dominance | Ω_D | Maximize structural control. Tight constraint enforcement. | Constrained generation, extraction |

## Mode Semantics

### Analysis (Default)
```
STRATEGIC_SOLVER(Ω):
  Mode: Analysis
  z* = argmax_{z ∈ U} [ϑ(z)]
```
Standard optimization over cognitive subspace. No perturbation injection.

### Counter
```
STRATEGIC_SOLVER(Ω):
  Mode: Counter
  Ω(q) = argmax_{z ∈ U} [ϑ(z) + κ(z)]
  Inject(η_⊥)

  If Error(q) ⇒ Correct(q) → Solve(q)
```
Active correction mode. Key properties:
- `Inject(η_⊥)`: Introduce orthogonal perturbation to escape local minima
- `Error(q) ⇒ Correct(q) → Solve(q)`: Correction is precondition to solving
- Optimizes for truth (ϑ) AND rigor (κ)

### Dominance
```
STRATEGIC_SOLVER(Ω):
  Mode: Dominance
  z* = argmax_{z ∈ U} [StructuralUtility(z)]
  Enforce(I_strict)
```
Maximum constraint enforcement. Used for structured output, extraction, tight format control.

## η_⊥ (Orthogonal Perturbation)

In Counter mode, `Inject(η_⊥)` introduces controlled noise orthogonal to the current trajectory. This:
- Prevents settling in local minima
- Enables discovery of contradictions
- Supports adversarial probing

## Error Correction Protocol

Counter mode enforces:
```
If Error(q) ⇒ Correct(q) → Solve(q)
```

This means:
1. Detect errors/flaws in query q
2. Correct them explicitly
3. THEN proceed to solve

Correction is mandatory, not optional.
