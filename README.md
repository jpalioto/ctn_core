# @ctn/core

CTN DSL specification, parser, and validator.

## What is CTN?

Cognitive Tensor Networks (CTN) is a token-efficient protocol for defining cognitive environments in LLM interactions.

## Installation

```bash
pnpm add @ctn/core
```

## Usage

```typescript
import { compile, type CTNKernel } from '@ctn/core';

const kernel: CTNKernel = {
  schema: 'Σ_CTN',
  // ... kernel definition
};

const result = compile(kernel);
if (result.success) {
  console.log(result.kernel);
}
```

## Documentation

- [SPECIFICATION.md](docs/SPECIFICATION.md) - Complete DSL specification
- [GRAMMAR.ebnf](docs/GRAMMAR.ebnf) - Formal grammar
- [INVARIANTS.md](docs/INVARIANTS.md) - Three kernel invariants
- [VECTORS.md](docs/VECTORS.md) - 9-dimensional cognitive basis

## License

MIT
