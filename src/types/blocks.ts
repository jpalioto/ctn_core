/**
 * CTN Kernel Block Definitions
 * 6 required blocks in fixed order
 */

export type BlockType =
  | 'CTN_KERNEL_SCHEMA'
  | 'SYS_KERNEL_INIT'
  | 'COGNITIVE_TENSORS'
  | 'STRATEGIC_SOLVER'
  | 'BOUNDARY_CONTROL'
  | 'DECODER_MANIFOLD'
  | 'SELF_ERASE';

export interface BlockDefinition {
  readonly type: BlockType;
  readonly symbol: string;
  readonly required: boolean;
  readonly order: number;
  readonly description: string;
}

export const BLOCKS: readonly BlockDefinition[] = [
  { type: 'CTN_KERNEL_SCHEMA', symbol: 'Σ_CTN', required: true, order: 0, description: 'Schema container declaration' },
  { type: 'SYS_KERNEL_INIT', symbol: 'Ψ_global', required: true, order: 1, description: 'Global preconditions and auth' },
  { type: 'COGNITIVE_TENSORS', symbol: 'U', required: true, order: 2, description: 'Cognitive basis vectors' },
  { type: 'STRATEGIC_SOLVER', symbol: 'Ω', required: true, order: 3, description: 'Reasoning optimization target' },
  { type: 'BOUNDARY_CONTROL', symbol: 'ζ', required: true, order: 4, description: 'Syntax firewall (ζ-invariant)' },
  { type: 'DECODER_MANIFOLD', symbol: 'D', required: true, order: 5, description: 'Output projection constraints' },
  { type: 'SELF_ERASE', symbol: '', required: true, order: 6, description: 'Kernel hygiene directive' },
] as const;

export const BLOCK_ORDER: readonly BlockType[] = BLOCKS.map(b => b.type);

export function getBlockDefinition(type: BlockType): BlockDefinition {
  const block = BLOCKS.find(b => b.type === type);
  if (!block) throw new Error(`Unknown block type: ${type}`);
  return block;
}
