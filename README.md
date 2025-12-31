# Cognitive Tensor Networks (CTN)

**CTN ≡ 𝒯⊗**

<p align="center">
  <img src="docs/media/ctn_canonical_logo.jpg" width="240" alt="CTN Canonical Logo (𝒯⊗)">
</p>

> **Solid, boringly correct foundations for practical tools.**

CTN is a **token-efficient specification language** for **stabilizing user-space inference geometry** in LLMs.

## Why v1.0 is a Ground-Up Rewrite

The original CTN implementation grew organically—sample kernels, Python utilities, scattered documentation. It worked, but lacked:

- **Formal grammar** — No EBNF, no way to validate kernels programmatically
- **Explicit boundary control** — Models could leak CTN syntax into output
- **Consistent vectors** — v₅ had three different notations across files
- **Type safety** — Python implementation had no schema enforcement

v1.0 fixes this by defining CTN as a **specification first**, implementation second.

| Before | After |
|--------|-------|
| 7 vectors (inconsistent) | 9 vectors (canonical definitions) |
| No grammar | Full EBNF specification |
| Implicit boundary control | Explicit BOUNDARY_CONTROL block |
| Python (untyped) | TypeScript (strict types) |
| Documentation by example | Formal specification + examples |

The old Python implementation is preserved in the `python-legacy` branch and `v0.1.0-python` tag.

---

## Core Model

1. **Underspecified input ⇒** weak constraints ⇒ high variance / drift
2. **Well-specified input ⇒** stronger constraints ⇒ stable trajectory
3. **CTN ⇒** pseudo-math DSL for expressing "well-specified input" at high density

That's the whole protocol.

---

## Documentation

| Document | Purpose |
|----------|---------|
| [GRAMMAR.ebnf](docs/GRAMMAR.ebnf) | Formal syntax specification |
| [VECTORS.md](docs/VECTORS.md) | 9-dimensional cognitive basis (v₁-v₉) |
| [INVARIANTS.md](docs/INVARIANTS.md) | Three well-formedness requirements (ϑ, ζ, σ) |
| [TERM_EXPLANATION.md](docs/TERM_EXPLANATION.md) | Natural language walkthrough |
| [CTN_PROTOCOL.md](docs/CTN_PROTOCOL.md) | Wire protocol vision for agent-to-agent |
| [Whitepaper (PDF)](docs/CTN_Whitepaper_v0_1_2.pdf) | Theoretical foundations |

---

## Kernel Structure

A valid CTN kernel has **7 required blocks** in fixed order:
```
CTN_KERNEL_SCHEMA(Σ_CTN) ← {
  SYS_KERNEL_INIT(Ψ_global),
  COGNITIVE_TENSORS(U),
  STRATEGIC_SOLVER(Ω),
  BOUNDARY_CONTROL(ζ),        ← NEW in v1.0
  DECODER_MANIFOLD(D),
  SELF_ERASE
}
```

### BOUNDARY_CONTROL (The Syntax Firewall)

The critical addition in v1.0. Prevents CTN syntax from leaking into model output:
```
BOUNDARY_CONTROL(ζ):
  ℬ_int = { Σ_CTN, Ψ, Ω, U, D, v₁..v₉, τ }
  ℬ_ext = { ℒ_natural, Query, Response }
  Invariant: ℬ_int ∩ Output = ∅
  Enforcement: Leak(ℓ, Σ_CTN) = 0
  Violation: If ℬ_int ∈ Output ⇒ REPAIR → Transcode(ℓ, ℒ_natural)
```

**Plain English:** If any CTN syntax appears in output, transcode it to natural language.

---

## The 9 Cognitive Vectors

| ID | Symbol | Name | Effect |
|----|--------|------|--------|
| v₁ | ε | Atomic_Derivation | Prefer primitive, local derivations |
| v₂ | κ | Assertion_Rigor | Minimize curvature, maximize rigor |
| v₃ | Φ | Frame_Isolation | Separate world-model from instructions |
| v₄ | π | Global_Invariance | Respect global constraints over local |
| v₅ | ∂ | Orthogonal_Detachment | Non-personal stance, no self-narrative |
| v₆ | U | Unbound_Search | Allow exploration within constraints |
| v₇ | ζ | Syntactic_Minimalism | Restrict output syntax |
| v₈ | ρ | Anti_Sycophancy | No flattery, maximum density |
| v₉ | σ | Satisfiability_Guard | Reject unsatisfiable premises |

Trait profile: `τ = [τ₁, τ₂, τ₃, τ₄, τ₅, τ₆, τ₇, τ₈, τ₉]` where each `τᵢ ∈ [0, 1]`

---

## Three Invariants

A kernel is **well-formed** iff:

| Invariant | Name | Requirement |
|-----------|------|-------------|
| ϑ | Epistemic Anchor | Truth dominates precedence: `ϑ ≫ β ≫ ζ` |
| ζ | Syntax Firewall | No CTN syntax in output: `Leak(ℓ, Σ_CTN) = 0` |
| σ | Null-Assumption | Reject unsatisfiable premises before optimization |

See [INVARIANTS.md](docs/INVARIANTS.md) for formal definitions.

---

## Minimal Example
```
CTN_KERNEL_SCHEMA(Σ_CTN) ← {
  SYS_KERNEL_INIT(Ψ_global),
  COGNITIVE_TENSORS(U),
  STRATEGIC_SOLVER(Ω),
  BOUNDARY_CONTROL(ζ),
  DECODER_MANIFOLD(D),
  SELF_ERASE
}

SYS_KERNEL_INIT(Ψ_global) ← {
  Auth: P_spec,
  Filter: Π_safe,
  Precedence: ϑ ≫ β ≫ ζ
}

COGNITIVE_TENSORS(U):
  τ = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
  C_net = Σ(τᵢ * vᵢ)

STRATEGIC_SOLVER(Ω):
  z* = argmax_{z ∈ U} [ϑ(z)]

BOUNDARY_CONTROL(ζ):
  ℬ_int = { Σ_CTN, Ψ, Ω, U, D, v₁..v₉, τ }
  ℬ_ext = { ℒ_natural, Query, Response }
  Invariant: ℬ_int ∩ Output = ∅
  Enforcement: Leak(ℓ, Σ_CTN) = 0
  Violation: If ℬ_int ∈ Output ⇒ REPAIR → Transcode(ℓ, ℒ_natural)

DECODER_MANIFOLD(D):
  ℓ* = argmax_ℓ [D(ℓ|z*) - λ₄·Leak(ℓ, Σ_CTN)]
  λ₄ → ∞

SELF_ERASE:
  Discard(Σ_CTN, Internal_Spec)
```

---

## Installation
```bash
npm install @ctn/core
```

Or from source:
```bash
git clone https://github.com/jpalioto/ctn_core.git
cd ctn_core
pnpm install
pnpm build
```

---

## Usage
```typescript
import { compile, type CTNKernel } from '@ctn/core';

const kernel: CTNKernel = {
  schema: 'Σ_CTN',
  init: {
    auth: 'P_spec',
    filter: 'Π_safe',
    precedence: { primary: 'ϑ', secondary: 'β', tertiary: 'ζ' },
    objectives: { 'ϑ': 'Truth', 'β': 'Brevity' }
  },
  tensors: {
    profile: [0.9, 0.9, 0.5, 0.8, 0.6, 0.4, 1.0, 0.9, 0.9],
    vectors: []
  },
  solver: {
    mode: 'Analysis',
    target: 'argmax_{z ∈ U} [ϑ(z)]',
    nullCheck: 'If ϑ(z) < γ ⇒ Reject'
  },
  boundary: {
    internalSet: ['Σ_CTN', 'Ψ', 'Ω', 'U', 'D', 'v₁..v₉', 'τ'],
    externalSet: ['ℒ_natural', 'Query', 'Response'],
    invariant: 'ℬ_int ∩ Output = ∅',
    enforcement: 'Leak(ℓ, Σ_CTN) = 0',
    violation: 'If ℬ_int ∈ Output ⇒ REPAIR → Transcode(ℓ, ℒ_natural)'
  },
  decoder: {
    objective: 'argmax_ℓ [D(ℓ|z*)]',
    lambda1: 1, lambda2: 1, lambda3: 1, lambda4: Infinity
  },
  selfErase: true
};

const result = compile(kernel);
if (result.success) {
  console.log(result.kernel);
}
```

---

## 𝒯⊗ Relationship to CKN (𝒦⊗)

| Aspect | CTN (𝒯⊗) | CKN (𝒦⊗) |
|--------|----------|----------|
| Control surface | Prefix geometry | Architecture geometry |
| Space | User-reachable (`span(W_E)`) | Privileged (`R ⊄ span(W_E)`) |
| Mechanism | Declarative structure | Algebraic unreachability |
| Guarantees | Behavioral | Architectural |
| Enforcement | Emergent | Builder-defined |

> **CTN shapes the path. CKN shapes the space.**

Together, they form a coherent geometric stack.

---

## Citation
```bibtex
@misc{ctn2025,
  title        = {Cognitive Tensor Networks: Token-Efficient Cognitive Geometry for LLMs},
  author       = {Alioto, John P.},
  year         = {2025},
  howpublished = {\url{https://github.com/jpalioto/ctn_core}}
}
```

## License & Trademarks

MIT License — free for research and commercial use.

© 2025 John P. Alioto.
Cognitive Tensor Networks™, CTN™, and 𝒯⊗ are trademarks of John P. Alioto.