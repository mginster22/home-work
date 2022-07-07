"use strict";

class Stack {
  constructor(maxSize = 5, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    for (const argument of args) {
      this.push(argument);
    }
  }
  get size() {
    return this._size;
  }

  get empty() {
    return this._size === 0;
  }
  push(argument) {
    if (this._size >= this._maxSize) {
      throw new RangeError("stack overflow");
    }
    this[`_${this._size}`] = argument;
    return ++this._size;
  }
  pick() {
    return this[`_${this._size - 1}`];
  }
  pop() {
    if (this.empty) {
      return;
    }
    const last = this[`_${this._size - 1}`];
    delete this[`_${this._size - 1}`];
    --this._size;
    return last;
  }
}

const optionsGlobal = {
  brackets: {
    "(": ")",
    "[": "]",
  },
  isStrict: true,
};
const checkBrackets = (str, options = optionsGlobal) => {
  const brackets = options.brackets;
  const closedBrackets = Object.values(brackets);
  const stack = new Stack(str.length);
  for (const symbol of str) {
    if (brackets[symbol]) {
      stack.push(symbol);
      continue;
    }
    const pickSymbol = stack.pick();
    const valueOfPickSymbol = brackets[pickSymbol];
    if (valueOfPickSymbol === symbol) {
      stack.pop();
    } else if (closedBrackets.includes(symbol)) {
      return false;
    }
  }
  return stack.empty;
};

console.log(checkBrackets("()()"));
console.log(checkBrackets("()()"));
console.log(checkBrackets(")()()"));
