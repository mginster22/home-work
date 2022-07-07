function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
function MyArrayPrototype() {
  this.push = function (element) {
    this[this.length] = element;
    return ++this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastElem = this[--this.length];
    delete this[this.length];
    return lastElem;
  };
  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  this.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
    return true;
  };
  this.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  this.filter = function (callback) {
    const newMyArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newMyArr.push(this[i]);
      }
    }
    return newMyArr;
  };
}

MyArray.prototype = new MyArrayPrototype();
function isOdd(num) {
  return num % 2 === 1;
}
const myArray = new MyArray(1, 2, 3, 4, 5, 6, 8, 9, 10);

const check = myArray.filter(isOdd);
console.log(check);
