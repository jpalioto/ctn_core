/**
 * CTN Grammar Token Definitions
 * Placeholder for lexer token types
 */

export enum TokenType {
  // Keywords
  CTN_KERNEL_SCHEMA = 'CTN_KERNEL_SCHEMA',
  SYS_KERNEL_INIT = 'SYS_KERNEL_INIT',
  COGNITIVE_TENSORS = 'COGNITIVE_TENSORS',
  STRATEGIC_SOLVER = 'STRATEGIC_SOLVER',
  BOUNDARY_CONTROL = 'BOUNDARY_CONTROL',
  DECODER_MANIFOLD = 'DECODER_MANIFOLD',
  SELF_ERASE = 'SELF_ERASE',

  // Operators
  ARROW = 'ARROW',           // ←
  DOUBLE_GT = 'DOUBLE_GT',   // ≫
  IMPLIES = 'IMPLIES',       // ⇒
  EQUALS = 'EQUALS',         // =

  // Delimiters
  LPAREN = 'LPAREN',
  RPAREN = 'RPAREN',
  LBRACE = 'LBRACE',
  RBRACE = 'RBRACE',
  LBRACKET = 'LBRACKET',
  RBRACKET = 'RBRACKET',
  COMMA = 'COMMA',
  COLON = 'COLON',

  // Literals
  IDENTIFIER = 'IDENTIFIER',
  NUMBER = 'NUMBER',
  GREEK_LETTER = 'GREEK_LETTER',

  // Special
  EOF = 'EOF',
  ERROR = 'ERROR',
}

export interface Token {
  readonly type: TokenType;
  readonly value: string;
  readonly line: number;
  readonly column: number;
}
