/**
 * CTN Abstract Syntax Tree Definitions
 * Placeholder for parser AST types
 */

export interface ASTNode {
  readonly type: string;
  readonly location: SourceLocation;
}

export interface SourceLocation {
  readonly start: Position;
  readonly end: Position;
}

export interface Position {
  readonly line: number;
  readonly column: number;
}

export interface KernelAST extends ASTNode {
  readonly type: 'Kernel';
  readonly schema: SchemaNode;
  readonly blocks: BlockNode[];
}

export interface SchemaNode extends ASTNode {
  readonly type: 'Schema';
  readonly id: string;
  readonly blockRefs: string[];
}

export interface BlockNode extends ASTNode {
  readonly type: 'Block';
  readonly blockType: string;
  readonly id: string;
  readonly params: Record<string, unknown>;
}
