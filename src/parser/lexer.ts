/**
 * CTN Lexer
 * Placeholder for tokenization logic
 */

import type { Token } from '../grammar/tokens.js';
import { TokenType } from '../grammar/tokens.js';

export class Lexer {
  private input: string;
  private position: number = 0;
  private line: number = 1;
  private column: number = 1;

  constructor(input: string) {
    this.input = input;
  }

  tokenize(): Token[] {
    const tokens: Token[] = [];

    while (this.position < this.input.length) {
      const token = this.nextToken();
      if (token) {
        tokens.push(token);
      }
    }

    tokens.push({
      type: TokenType.EOF,
      value: '',
      line: this.line,
      column: this.column,
    });

    return tokens;
  }

  private nextToken(): Token | null {
    this.skipWhitespace();

    if (this.position >= this.input.length) {
      return null;
    }

    // Placeholder: return error token for now
    const char = this.input[this.position];
    this.position++;
    this.column++;

    return {
      type: TokenType.ERROR,
      value: char,
      line: this.line,
      column: this.column - 1,
    };
  }

  private skipWhitespace(): void {
    while (this.position < this.input.length) {
      const char = this.input[this.position];
      if (char === ' ' || char === '\t') {
        this.position++;
        this.column++;
      } else if (char === '\n') {
        this.position++;
        this.line++;
        this.column = 1;
      } else if (char === '\r') {
        this.position++;
      } else {
        break;
      }
    }
  }
}
