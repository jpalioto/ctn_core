import { describe, it, expect } from 'vitest';
import { VECTORS, validateTraitProfile, type TraitProfile } from '../src/types/vectors.js';

describe('Vectors', () => {
  it('should have 9 vectors', () => {
    expect(VECTORS).toHaveLength(9);
  });

  it('should have sequential IDs 1-9', () => {
    VECTORS.forEach((v, i) => {
      expect(v.id).toBe(i + 1);
    });
  });

  it('should have unique symbols', () => {
    const symbols = VECTORS.map(v => v.symbol);
    expect(new Set(symbols).size).toBe(symbols.length);
  });
});

describe('validateTraitProfile', () => {
  it('should accept valid profile', () => {
    const τ: TraitProfile = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
    expect(validateTraitProfile(τ)).toBe(true);
  });

  it('should reject values > 1', () => {
    const τ: TraitProfile = [1.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
    expect(validateTraitProfile(τ)).toBe(false);
  });

  it('should reject values < 0', () => {
    const τ: TraitProfile = [-0.1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
    expect(validateTraitProfile(τ)).toBe(false);
  });
});
