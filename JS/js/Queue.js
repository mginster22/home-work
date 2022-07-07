"use strict";

class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    for (const argument of args) {
      this.push(argument);
    }
  }
  get size() {
    return this._tail - this._head;
  }
  push(value) {
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }
  shift() {
    const valueHead = this[this._head];
    delete this[this._head++];
    return valueHead;
  }
}

const queue1 = new Queue("q", "f", "a");
queue1.push("s");
queue1.push("d");
queue1.shift();
queue1.shift();
queue1.shift();
queue1.shift();
queue1.shift();
queue1.shift();
queue1.shift();
queue1.shift();
queue1.shift();

console.log(queue1);
