class MyArrayIterator {
  constructor(myArray) {
    this.collection = myArray;
    this.currentPosition = 0;
  }
  next() {
    return {
      value: this.collection[this.currentPosition++],
      done: this.currentPosition > this.collection.length,
    };
  }
}

//NEW SYNTAX MyARRAY!
class MyArrayClass {
  constructor() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  push(element) {
    this[this.length] = element;
    return ++this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastElem = this[--this.length];
    delete this[this.length];
    return lastElem;
  }
  forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  every(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
    return true;
  }
  some(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }
  filter(callback) {
    const newMyArr = new MyArrayClass();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newMyArr.push(this[i]);
      }
    }
    return newMyArr;
  }
  concat(insanceMyArray) {
    if (MyArrayClass.isMyArrayClass(insanceMyArray) === false) {
      throw new TypeError("need Myarayclas");
    }
    const newMyArr = new MyArrayClass();
    for (let i = 0; i < this.length; i++) {
      newMyArr.push(this[i]);
    }
    for (let i = 0; i < insanceMyArray.length; i++) {
      newMyArr.push(insanceMyArray[i]);
    }
    return newMyArr;
  }
  flat(depth = 1) {
    let newMyarr = new MyArrayClass();
    this.forEach((elem) => {
      if (MyArrayClass.isMyArrayClass(elem) && depth) {
        const subNewMyArray = elem.flat(depth - 1);
        newMyarr = newMyarr.concat(subNewMyArray);
      } else if (elem !== undefined) {
        newMyarr.push(elem);
      }
    });
    return newMyarr;
  }
  static isMyArrayClass(obj) {
    return obj instanceof MyArrayClass;
  }
  [Symbol.iterator]() {
    return new MyArrayIterator(this);
  }
}

// const myArr1 = new MyArrayClass(2, 5, 8, 9, 4);
// console.log(...myArr1);
// for (const elem of myArr1) {
//   console.log(elem);
// }
