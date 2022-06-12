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
}

MyArray.prototype = new MyArrayPrototype();
const myArray = new MyArray(1, 2, 3, 4,22, 5);
myArray.push(11);
myArray.push(14);
console.log(myArray);
