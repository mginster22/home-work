//1.CONCAT//
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const result = arr1.concat(arr2);
// console.log(result);

//2.REVERSE
// const arr = [1, 2, 3];
// const result = arr.reverse()
// console.log(result);

//3.4.PUSH,UNSHIFT
// const arr = [1, 2, 3];
// arr.push(4, 5, 6);
// arr.unshift(4, 5, 6);
// console.log(arr);

//5.6.SHIFT,POP
// const arr = ["js", "css", "html"];
// console.log(arr);
// alert(arr[0])
// arr.shift()
// alert(arr[1])
// arr.pop()
// console.log(arr);

//7.9.SLICE
// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.slice(0,3)
// const arr3=arr.slice(3)
// console.log(arr2);
// console.log(arr3);

//9-12.SPLICE
//9.
// const arr = [1,2,3,4,5];
// arr.splice(1,2)
// console.log(arr);
//10.
// const arr=[1,2,3,4,5];
// const arr2 = arr.splice(1,3);
// console.log(arr2);
//11.
// const arr = [1, 2, 3, 4, 5];
// arr.splice(3,0,'a','b','c')
// console.log(arr);
//12.
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, "a", "b");
// arr.splice(6, 0, "c");
// arr.splice(8, 0, "e");
// console.log(arr);

//13.SORT
// const arr = [3, 4, 1, 2, 7];
// arr.sort()
// console.log(arr);

//14.Object.keys
// const obj={
//   js:'test',
//   jq:'hello',
//   css:'word'
// }
// console.log(Object.keys(obj));

//Function hasElem
// const str = "vlad";
// const arr = ["vlad"];

// function hasElem(arr, str) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === str) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(hasElem(arr,str));

//2.
// const arr = [1, 2, 3, 4, 5];

// function checkNumberInArr(num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (num === arr[i]) {
//       return true
//     }
//   }
//   return false;
// }
// console.log(checkNumberInArr(10));

//3.ChtckIdenticalNum

// const arr = [1, 2, 1, 4, 4, 6, 8];

// function checkIdenticalNum() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === i) {
//       //return true ??? не знаю как правильно по заданию
//       return arr.splice(3,3);
//     }
//   }
//   // return false;??
//   return arr.splice(3,3);

// }
// console.log(checkIdenticalNum());

//4.Math.random

// const arr1 = [];
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// for (let i = 0; i < 10; i++) {
//   arr1.push(Math.round(getRandomArbitrary(5, 33)));
// }
// console.log(arr1);

//5.
// const arr = [12, 15, 20, 25, 59, 79];
// let result = arr.reduce(function (a, b) {
//   return a + b;
// });
// result = result / arr.length;
// console.log(result);
