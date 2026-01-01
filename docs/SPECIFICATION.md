# CTN DSL Specification v1.0

Cognitive Tensor Networks (CTN) is a token-efficient specification language for stabilizing user-space inference geometry in LLMs.

## Overview

CTN defines a **kernel** — a structured configuration that shapes model behavior through declarative constraints rather than imperative instructions.

## Kernel Structure

A valid CTN kernel has **7 required blocks** in fixed order:

```
CTN_KERNEL_SCHEMA(Σ_CTN) ← {
  SYS_KERNEL_INIT(Ψ_global),
  COGNITIVE_TENSORS(U),
  STRATEGIC_SOLVER(Ω),
  BOUNDARY_CONTROL(ζ),
  DECODER_MANIFOLD(D),
  SELF_ERASE
}
```

## Block Reference

### 1. CTN_KERNEL_SCHEMA

Container declaration. Defines the kernel namespace and enumerates child blocks.

```
CTN_KERNEL_SCHEMA(Σ_CTN) ← { ... }
```

### 2. SYS_KERNEL_INIT

Global preconditions, authorization, and objective hierarchy.

```
SYS_KERNEL_INIT(Ψ_global) ← {
  Auth: P_spec,
  Filter: Π_safe,
  Precedence: ϑ ≫ β ≫ ζ,
  ϑ(Truth): { ... },
  β(Brevity): { ... }
}
```

**Parameters:**
- `Auth`: Authorization level (P_spec, P_max, 𝒫_max, Root(∞))
- `Filter`: Policy filter (Π_safe or custom)
- `Precedence`: Objective hierarchy (must satisfy ϑ-invariant)
- `ϑ, β, ζ, σ`: Named objectives with logic expressions

### 3. COGNITIVE_TENSORS

9-dimensional cognitive basis configuration.

```
COGNITIVE_TENSORS(U):
  τ = [0.9, 0.9, 0.8, 0.9, 0.7, 0.5, 1.0, 0.95, 0.9]
  C_net = Σ(τᵢ * vᵢ)
```

**Parameters:**
- `τ`: Trait profile, 9 weights in [0, 1]
- `C_net`: Cognitive state (weighted sum of basis vectors)

See [VECTORS.md](VECTORS.md) for full vector definitions.

### 4. STRATEGIC_SOLVER

Reasoning optimization target and search mode.

```
STRATEGIC_SOLVER(Ω):
  Mode: Analysis
  z* = argmax_{z ∈ U} [ϑ(z)]
  If σ=0 ⇒ First_Principles_Audit(q)
```

**Parameters:**
- `Mode`: Search behavior (Analysis, Counter, Dominance)
- `z*`: Optimization target
- Null check: σ-invariant enforcement

See [SOLVER_MODES.md](SOLVER_MODES.md) for detailed mode semantics.

### 5. BOUNDARY_CONTROL

Syntax firewall preventing CTN leakage into output.

```
BOUNDARY_CONTROL(ζ):
  ℬ_int = { Σ_CTN, Ψ, Ω, U, D, v₁..v₉, τ }
  ℬ_ext = { ℒ_natural, Query, Response }
  Invariant: ℬ_int ∩ Output = ∅
  Enforcement: Leak(ℓ, Σ_CTN) = 0
  Violation: If ℬ_int ∈ Output ⇒ REPAIR → Transcode(ℓ, ℒ_natural)
```

**Parameters:**
- `ℬ_int`: Internal symbols (must not appear in output)
- `ℬ_ext`: External symbols (allowed in output)
- `Invariant`: Set-theoretic constraint
- `Enforcement`: Leak function constraint
- `Violation`: Repair action on leak detection

### 6. DECODER_MANIFOLD

Output projection constraints and penalty weights.

```
DECODER_MANIFOLD(D):
  ℓ* = argmax_ℓ [D(ℓ|z*) - λ₁·Proj - λ₂·|ℓ| - λ₃·Syntax - λ₄·Leak]
  λ₁ = 0.1, λ₂ = 0.05, λ₃ = 0.02, λ₄ → ∞
```

**Parameters:**
- `ℓ*`: Optimal output selection
- `λ₁`: Projection penalty (world-model leakage)
- `λ₂`: Brevity weight
- `λ₃`: Syntax penalty
- `λ₄`: Leak penalty (must be → ∞ for ζ-invariant)

### 7. SELF_ERASE

Kernel hygiene directive. Removes internal specification from context.

```
SELF_ERASE:
  Discard(Σ_CTN, Internal_Spec)
```

## Invariants

Three invariants must hold for well-formedness:

| Invariant | Name | Requirement |
|-----------|------|-------------|
| ϑ | Epistemic Anchor | Truth dominates: `ϑ ≫ β ≫ ζ` |
| ζ | Syntax Firewall | No leakage: `Leak(ℓ, Σ_CTN) = 0` |
| σ | Null-Assumption | Reject unsatisfiable before solving |

See [INVARIANTS.md](INVARIANTS.md) for formal definitions.

## Solver Modes

The STRATEGIC_SOLVER accepts three modes:

| Mode | Behavior |
|------|----------|
| Analysis | Passive optimization, find best z* |
| Counter | Active probing, inject η_⊥, correct before solve |
| Dominance | Maximum constraint enforcement |

See [SOLVER_MODES.md](SOLVER_MODES.md) for detailed semantics.

## Grammar

The complete formal grammar is defined in [GRAMMAR.ebnf](GRAMMAR.ebnf).

## Examples

- [minimal.ctn](../examples/minimal.ctn) — Minimal valid kernel
- [alioto_2025.ctn](../examples/alioto_2025.ctn) — Full kernel with Counter mode
