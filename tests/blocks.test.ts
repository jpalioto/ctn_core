import { describe, it, expect } from 'vitest';
import { BLOCKS, BLOCK_ORDER, getBlockDefinition } from '../src/types/blocks.js';

describe('Blocks', () => {
  it('should have 7 blocks', () => {
    expect(BLOCKS).toHaveLength(7);
  });

  it('should all be required', () => {
    BLOCKS.forEach(b => {
      expect(b.required).toBe(true);
    });
  });

  it('should have correct order', () => {
    expect(BLOCK_ORDER).toEqual([
      'CTN_KERNEL_SCHEMA',
      'SYS_KERNEL_INIT',
      'COGNITIVE_TENSORS',
      'STRATEGIC_SOLVER',
      'BOUNDARY_CONTROL',
      'DECODER_MANIFOLD',
      'SELF_ERASE',
    ]);
  });

  it('should include BOUNDARY_CONTROL', () => {
    const boundary = getBlockDefinition('BOUNDARY_CONTROL');
    expect(boundary.symbol).toBe('ζ');
    expect(boundary.order).toBe(4);
  });
});
