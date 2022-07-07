class ListItem {
  constructor(value) {
    this._value = value;
    this.next = null;
    this.prev = null;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
}

class LinkedListIterator {
  constructor(list) {
    this.collection = list;
    this.currentElement = null;
  }
  next() {
    this.currentElement = this.currentElement ? this.currentElement.next : this.collection.head
    return {
      value: this.currentElement ? this.currentElement.value : undefined,
      done: !this.currentElement ,
    };
  }
}

class LinkedList {
  constructor(...args) {
    this.lenght = 0;
    this.head = null;
    this.tail = null;
    for (const argument of args) {
      this.push(argument);
    }
  }
  push(value) {
    const newListItem = new ListItem(value);
    if (this.lenght === 0) {
      this.head = newListItem;
      this.tail = newListItem;
    } else {
      newListItem.prev = this.tail;
      this.tail.next = newListItem;
      this.tail = newListItem;
    }
    return ++this.lenght;
  }
  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}
const list = new LinkedList(1, true, null, "qwe", 5);
console.log(...list);
for (const item of list) {
  console.log(item);
}
