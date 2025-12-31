# 𝒯⊗ Cognitive Tensor Networks — Contribution Guidelines

CTN is an open research effort.
If the ideas work, they matter.
If they fail, we want to find out quickly and precisely.

---

## What Changed in v1.0

CTN v1.0 is a **ground-up rewrite** in TypeScript with a formal specification.

| Component | Location | Status |
|-----------|----------|--------|
| Type definitions | `src/types/` | Complete |
| EBNF grammar | `docs/GRAMMAR.ebnf` | Complete |
| Kernel compiler | `src/compiler/` | Complete |
| Validator | `src/validator/` | Stub (needs invariant checks) |
| Parser | `src/parser/` | Placeholder |

The old Python implementation is preserved in:
- Branch: `python-legacy`
- Tag: `v0.1.0-python`

---

## Repository Structure
```
ctn_core/
├── src/
│   ├── types/           # Vector, block, kernel definitions
│   ├── compiler/        # Kernel → string compilation
│   ├── parser/          # String → AST parsing (WIP)
│   └── validator/       # Invariant checking (WIP)
├── docs/
│   ├── GRAMMAR.ebnf     # Formal syntax specification
│   ├── VECTORS.md       # 9-dimensional cognitive basis
│   ├── INVARIANTS.md    # Three well-formedness rules
│   ├── CTN_PROTOCOL.md  # Wire protocol vision
│   └── *.tex, *.pdf     # Whitepapers
├── examples/
│   └── minimal.ctn      # Smallest valid kernel
└── tests/
    └── *.test.ts        # Vitest test files
```

---

## How to Contribute

### 1. Test CTN Kernels

The most valuable contribution: test baseline vs CTN under deterministic decoding.
```json
{
  "temperature": 0,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}
```

Report deltas in:
- Hallucination rate
- Presupposition handling
- Reasoning structure
- Symbol consistency

### 2. Improve the Specification

The EBNF grammar in `docs/GRAMMAR.ebnf` is authoritative. If you find:
- Ambiguities
- Missing productions
- Inconsistencies with examples

Submit a PR or issue.

### 3. Implement the Parser

`src/parser/` contains stubs. A working parser would:
- Tokenize kernel text (`lexer.ts`)
- Build AST (`parser.ts`)
- Enable programmatic kernel validation

### 4. Implement Invariant Validation

`src/validator/` needs logic to verify:
- **ϑ-invariant**: Truth dominates precedence
- **ζ-invariant**: BOUNDARY_CONTROL is present and well-formed
- **σ-invariant**: Satisfiability guard is defined

### 5. Propose New Vectors (v₁₀, v₁₁, ...)

CTN's 9-vector basis is extensible. If experiments reveal:
- New cognitive dimensions
- Stable emergent patterns
- Consistent alignment behaviors

Propose a vector with:
- Symbol and name
- Limit expression
- Intended effect
- Empirical evidence

### 6. Add Example Kernels

`examples/` needs more kernels demonstrating:
- Different trait profiles
- Domain-specific configurations
- Edge cases

### 7. Challenge the Design

If you identify:
- Theoretical errors
- Degeneracies
- Modes where CTN fails

File an issue. CTN is not doctrine—it's a controlled experiment.

---

## Code Style

- TypeScript strict mode
- Vitest for tests
- pnpm for package management
```bash
pnpm build    # Compile
pnpm test     # Run tests
pnpm lint     # Type check
```

---

## Philosophy

CTN asks:

> **"What type of mind do you want to collaborate with?"**

Not "who" — **what type**.

The gold is in the geometry.
The value is in the emergence.

---

## License

MIT License.
Use CTN for research, benchmarking, experimentation, or applied work.
Please cite the repo if you extend or publish on CTN.