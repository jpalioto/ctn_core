/**
 * CTN Parser
 * Placeholder for parsing logic
 */

import type { Token } from '../grammar/tokens.js';
import type { KernelAST } from './ast.js';
import { Lexer } from './lexer.js';

export interface ParseResult {
  readonly success: boolean;
  readonly ast?: KernelAST;
  readonly errors?: ParseError[];
}

export interface ParseError {
  readonly message: string;
  readonly line: number;
  readonly column: number;
}

export class Parser {
  private tokens: Token[] = [];
  private position: number = 0;

  parse(input: string): ParseResult {
    const lexer = new Lexer(input);
    this.tokens = lexer.tokenize();
    this.position = 0;

    // Placeholder: return error for now
    return {
      success: false,
      errors: [
        {
          message: 'Parser not yet implemented',
          line: 1,
          column: 1,
        },
      ],
    };
  }
}
