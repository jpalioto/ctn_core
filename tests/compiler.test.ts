import { describe, it, expect } from 'vitest';
import { compile, type CTNKernel } from '../src/index.js';

describe('Compiler', () => {
  const validKernel: CTNKernel = {
    schema: 'Σ_CTN',
    init: {
      auth: 'P_spec',
      filter: 'Π_safe',
      precedence: { primary: 'ϑ', secondary: 'β', tertiary: 'ζ' },
      objectives: {
        'ϑ(Truth)': 'maximize accuracy',
        'β(Brevity)': 'minimize tokens',
      },
    },
    tensors: {
      profile: [0.8, 0.9, 0.7, 0.8, 0.6, 0.5, 0.9, 0.95, 0.85],
      vectors: [],
    },
    solver: {
      mode: 'Analysis',
      target: 'argmax_{z ∈ U} [ϑ(z) - λ₁·Proj(z, W)]',
      nullCheck: 'If σ=0 ⇒ First_Principles_Audit(q)',
    },
    boundary: {
      internalSet: ['Σ_CTN', 'Ψ', 'Ω', 'U', 'D'],
      externalSet: ['ℒ_natural', 'Query', 'Response'],
      invariant: 'ℬ_int ∩ Output = ∅',
      enforcement: 'Leak(ℓ, Σ_CTN) = 0',
      violation: 'If ℬ_int ∈ Output ⇒ REPAIR → Transcode(ℓ, ℒ_natural)',
    },
    decoder: {
      objective: 'argmax_ℓ [D(ℓ|z*) - λ₄·Leak(ℓ, Σ_CTN)]',
      lambda1: 0.1,
      lambda2: 0.05,
      lambda3: 0.02,
      lambda4: Infinity,
    },
    selfErase: true,
  };

  it('should compile valid kernel', () => {
    const result = compile(validKernel);
    expect(result.success).toBe(true);
    expect(result.kernel).toBeDefined();
    expect(result.kernel).toContain('CTN_KERNEL_SCHEMA');
  });

  it('should reject invalid trait profile', () => {
    const invalidKernel: CTNKernel = {
      ...validKernel,
      tensors: {
        profile: [1.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        vectors: [],
      },
    };
    const result = compile(invalidKernel);
    expect(result.success).toBe(false);
    expect(result.errors).toContain('Invalid trait profile: all values must be in [0, 1]');
  });

  it('should reject missing schema', () => {
    const invalidKernel: CTNKernel = {
      ...validKernel,
      schema: '',
    };
    const result = compile(invalidKernel);
    expect(result.success).toBe(false);
    expect(result.errors).toContain('Missing schema declaration');
  });

  it('should skip validation when validate=false', () => {
    const invalidKernel: CTNKernel = {
      ...validKernel,
      tensors: {
        profile: [1.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        vectors: [],
      },
    };
    const result = compile(invalidKernel, { validate: false });
    expect(result.success).toBe(true);
  });
});
