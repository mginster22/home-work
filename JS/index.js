// const isInputNotNumber = function (value) {
//   return value === null || value === "" || isNaN(Number(value));
// };
// const getSumTwoNumbers = function (number1, number2) {
//   if (isInputNotNumber(number1) || isInputNotNumber(number2)) {
//     return false;
//   }
//   return Number(number1) + Number(number2);
// };

// const logResultInput = function () {
//   const userInputNumber1 = prompt("enter first num:");
//   const userInputNumber2 = prompt("enter fsec1 num:");
//   const result = getSumTwoNumbers(userInputNumber1, userInputNumber2);
//   if (result === false) {
//     console.log("ERROR");
//   } else {
//     console.log(result);
//   }
// };
// logResultInput();

// const isEven = function (num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false
// };
// console.log(isEven(12));

// const compareTwoTypes = function (value1, value2) {
//   if (typeof value1 === typeof value2) {
//     return compareTwoValue(value1,value2);
//   }
//   return null;
// };

// const compareTwoValue = function (value1, value2) {
//   if (value1 > value2) {
//     return "more first";
//   }
//   if (value2 > value1) {
//     return "more second";
//   }
//   return "They are equal";
// };

// compareTwoTypes()

// const getNumber = function () {
//   const user = prompt("enter number");
//   if (user > 0) {
//     return alert(1);
//   } else if (user < 0) {
//     return alert(-1);
//   }
//   return alert(0);
// };
// getNumber()

// const isAdult = function (value) {
//   return value >= 18;
// };
// console.log(isAdult(10));

// const getMultipicyNumber = function (num1, num2, num3) {
//   return num1 < num2 + num3 && num2 < num1 + num3 && num3 < num2 + num1
// };
// console.log(getMultipicyNumber(1, 1, 8));

// const getResult = function (num1, num2) {
//   if (num1 % 2 === 0 && num2 % 2 === 0) {
//     return num1 + num2;
//   }
//   if (num1 % 2 === 1 && num2 % 2 === 1) {
//     return num1 * num2;
//   }
//   if (num1 % 2 === 1) {
//     return num1;
//   }
//   return num2;
// };
// console.log(getResult(151, 21));

// const userLangugage = function () {
//   const userChoose = prompt("Enter number langugage:\n1-ua\n2-en\n3-pl");
//   if (userChoose === "1") {
//     return "Привит";
//   } else if (userChoose === "2") {
//     return "Oh,Hi man";
//   } else if (userChoose === '33') {
//     return "Shalom";
//   }else{
//     return '404'
//   }
// };
// console.log(userLangugage());

// const getMonth = function () {
//   const userInput = prompt(
//     "Enter your month:\n1,2,12-?\n3,4,5-?\n6,7,8-?\n9,10,11-?"
//   );
//   if (userInput === "1" || userInput === "12" || userInput === "2") {
//     return alert("winter");
//   } else if (userInput === "3" || userInput === "4" || userInput === "5") {
//     return alert("spring");
//   } else if (userInput === "6" || userInput === "7" || userInput === "8") {
//     alert("summer");
//   } else if (userInput === "9" || userInput === "10" || userInput === "11") {
//     return alert("autumn");
//   }
// };
// console.log(getMonth());

// const getMonth = function () {
//   const userChoose = prompt("enter your month:");
//   switch (userChoose) {
//     case "1":
//     case "2":
//     case "12":
//       return alert("winter");
//     case "3":
//     case "4":
//     case "5":
//       return alert("spring");
//     case "6":
//     case "7":
//     case "8":
//       return alert("summer");
//     case "9":
//     case "10":
//     case "11":
//       return alert("autumn");
//     default:
//       break;
//   }
// };
// getMonth()

// const ageClasification = function () {
//   const userInputAge = prompt("Enter your Age:");
//   if (userInputAge < 2) {
//     return alert("Baby");
//   } else if (userInputAge < 6) {
//     return alert("kinder");
//   } else if (userInputAge < 12) {
//     return alert("child");
//   }
//   return alert("SUPER AGE");
// };
// ageClasification();

// let count = 0;
// while (count < 3) {
//   console.log(count++);
//   // count++
// }

// const MAX_SIZE = 10;
// let count = 0;
// while (true) {
//   if (count % 2 === 0) {
//     count++;
//     continue;
//   }
//   console.log(count++);
//   if (count >= MAX_SIZE) {
//     break;
//   }
// }

// const PIN_SECRET = "1111";
// const PIN_ENTER = 3;
// let count = PIN_ENTER;
// while (true) {
//   const userPin = prompt("Enter your Pin:");
//   count--;
//   if (userPin === PIN_SECRET) {
//     console.log("УРА");
//     break;
//   }
//   if (count === 0) {
//     console.log("by-by");
//     break;
//   }
//   console.log("Try again! rest:", count);
// }
// const MAX_TRY = 3;
// const PIN_SECRET = "1111";

// for (let i = 0; i < MAX_TRY; i++) {
//   const PIN = prompt("Enter pin");
//   if (PIN === PIN_SECRET) {
//     console.log("thanks");
//     break;
//   }
//   if (MAX_TRY === i + 1) {
//     console.log("пока");
//     break;
//   }
//   console.log("try=", i + 1);
// }

// const getSum = function (value) {
//   let summa = 0;
//   for (let i = 0; i <= value; i++) {
//     summa += i;
//   }
//   return summa;
// };
// console.log(getSum(10));

// const getFactorial = function (value) {
//   let factorial = 1;
//   for (let i = 1; i <= value; i++) {
//     factorial *= i;
//   }
//   return factorial;
// };
// console.log(getFactorial(5));
// const getPower = function (base, pow) {
//   let result = 1;
//   for (let i = 0; i < pow; i++) {
//     result *= base;
//   }
//   return result;
// };
// console.log(getPower(2, 10));

// function Cat(name, color, age) {
//   this.name = name;
//   this.color = color;
//   this.age = age;
//   this.say = function () {
//     return "Meow";
//   };
//   this.run = function () {
//     return this.name + " " + "run";
//   };
// }
// const cat1 = new Cat("casper", "red", 12);
// console.log(cat1);

// function User(name, sname, fullName) {
//   this.name = name;
//   this.sname = sname;
//   this.fullName = function () {
//     return this.name + " " + this.sname;
//   };
// }
// const user1 = new User("Vlad", "Korochanskiy");
// console.log(user1.fullName());
// const user2 = new User("Oleg", "Korochanskiy");
// console.log(user2.fullName());
// const user3 = new User("Inna", "Korochanskaya");
// console.log(user3.fullName());

// function Country(name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDencity = function () {
//     return this.population / this.area;
//   };
// }
// const country = new Country("Ukraine", 6500000, 450000);
// console.log(country.getDencity());
// country.population += 1000000;
// console.log(country.getDencity());

// Example KETTLE
// function Kettle(maxVolume) {
//   this.maxVolume = maxVolume;
//   this.volume = 0;
//   this.addWater = function (value) {
//     if (this.volume + value <= this.maxVolume) {
//       this.volume += value;
//     } else {
//       console.log("rest water:", value - (this.maxVolume - this.volume));
//       this.volume = this.maxVolume;
//     }
//     return this.volume;
//   };
//   this.drainWater = function (value) {
//     if (this.volume - value >= 0) {
//       this.volume -= value;
//     }
//     return "water now" + " " + this.volume;
//   };
// }
// const pot = new Kettle(200);

// const num1 = 2;
// const num2 = 5;
// const str = "+";

// const sum = function (num1, num2) {
//   return num1 + num2;
// };
// const strResult = num1 + " " + str + " " + num2 + " = " + sum(num1, num2);
// console.log(strResult);

// const PROTOCOL = "http://";
// const LOCAL_SERVER = "127.0.0.1:5500";
// const urlServer = function(path){
//   return `${PROTOCOL}${LOCAL_SERVER}/${path}`
// }
// console.log(urlServer('index.html'));

// const user = {
//   name: "Tom",
//   age: 12,
//   newAge: function (value) {
//     return `Через ${value} ${this.name} will ${this.age + value} years old`;
//   },
// };

// console.log(user.newAge(4));

// const object = {
//   prop1: "prop vaule",
//   prop2: 2,
//   "prop 3": true,
//   4: "qwerty",
// };
// const prop1 = 4;
// console.log(object[prop1]);
// console.log(object[4]);
// console.log(object["prop1"]);

// const varibale = 4;
// console.log(object[varibale]);

// const variable2 = "prop2";
// console.log(object[variable2]);

// const creatMultipleTable = function () {
//   const table = {};
//   for (let i = 1; i <= 10; i++) {
//     table[`${i}`] = {};
//     for (let j = 1; j <= 10; j++) {
//       table[`${i}`][`${i}*${j}=:`] = i * j;
//     }
//   }
//   return table;
// };
// creatMultipleTable();

// const getInfoUser = function () {
//   const family = {};
//   const howManyPeople = prompt("How many people");
//   for (let i = 0; i < howManyPeople; i++) {
//     const userName = prompt("Name");
//     const whoHim = prompt("whoHim");
//     for (let j = 1; j < 2; j++) {
//       family[userName] = whoHim;
//     }
//   }
//   return family;
// };

// getInfoUser();

// const getNumber = function (max, min, num) {
//   for (let i = max; i > min; i--) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// };
// getNumber(20, 1, 10);

// const SECRET_NUM = "20";
// let attempt = 0;
// const getUserSecretNum = function () {
//   for (let i = 1; i++; ) {
//     const user = prompt("Enter your num:");
//     if (user === SECRET_NUM) {
//       console.log("Lacky,you win!");
//       console.log("Количество попыток:" + attempt);
//       break;
//     } else if (user > SECRET_NUM) {
//       console.log("less");
//     } else if (user < SECRET_NUM) {
//       console.log("more");
//     }
//     attempt++;
//   }
// };
// getUserSecretNum();

// function MyArray() {
//   this.length = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     this.push(arguments[i]);
//   }
// }
// function MyArrayPrototype() {
//   this.push = function (element) {
//     this[this.length] = element;
//     return ++this.length;
//   };
//   this.pop = function () {
//     if (this.length === 0) {
//       return;
//     }
//     const lastElem = this[--this.length];
//     delete this[this.length];
//     return lastElem;
//   };
// }

// MyArray.prototype = new MyArrayPrototype();
// const myArray = new MyArray(1, 2, 3, 4,22, 5);
// myArray.push(11);
// myArray.push(14);
// console.log(myArray);

// function Accumulator() {
//   this.maxCharge = 100;
//   this.minCharge = 0;
// }

// function AccumulatorPrototype() {
//   this.chargeBattary = function (value) {
//     if (this.minCharge + value <= this.maxCharge) {
//       this.minCharge += value;
//       return this.minCharge;
//     }
//   };
//   this.rechergeBattary = function (value) {
//     if (this.minCharge - value >= 0) {
//       this.maxCharge = value;
//       return this.minCharge;
//     }
//   };
// }
// Accumulator.prototype = new AccumulatorPrototype();
// const accumulator = new Accumulator(1000);
// console.log(accumulator);
// accumulator.chargeBattary(200);
// console.log(accumulator);

// const animal = {
//   eat: function () {
//     return this.name + " eat";
//   },
//   go: function () {
//     return (this.name ? this.name : "i'm") + " go";
//   },
// };
// const man = {
//   dancing: function () {
//     return this.name + " dancing";
//   },
//   __proto__: animal,
//   toString: function () {
//     return this.name + " " + this.sname;
//   },
// };
// const user = {
//   name: "Vlad",
//   sname: "Korochanskiy",
//   __proto__: man,
// };

// const rabbit = {
//   eat: function () {
//     return (this.name ? this.name : "i'm") + " eat";
//   },
//   jump: function () {
//     return (this.name ? this.name : "i'm") + " go";
//   },
// };

//ЛИТЕРАЛЬНО ПРОТОТИПИРОВАЛИ
// const rabbitPet = {
//   name: "Casper",
//   petMe() {
//     return "погладь меня!";
//   },
//   __proto__: rabbit,
// };
// const rabbitMagic = {
//   say() {
//     return this.name + " say" + " морковку";
//   },
//   __proto__: rabbitPet,
// };
// const rabbit = {
//   eat: function () {
//     return (this.name ? this.name : "i'm") + " eat";
//   },
//   jump: function () {
//     return (this.name ? this.name : "i'm") + " go";
//   },
// };

//С ПОМОЩЬЮ КОНСТРУКТОРА!
// function Rabbit() {
//   (this.go = function () {
//     return (this.name ? this.name : "i'm") + " go";
//   }),
//     (this.jump = function () {
//       return (this.name ? this.name : "i'm") + " jump";
//     });
// }

// function RabbitPet(name) {
//   this.name = name;
//   this.petMe = function () {
//     return "погладь меня!";
//   };
// }
// RabbitPet.prototype = new Rabbit();

// function RabbitMagic(name) {
//   this.name = name;

//   this.say = function () {
//     return this.name +" say" + " морковку";
//   };
// }
// RabbitMagic.prototype = new RabbitPet();

// const rabbit = new RabbitMagic("sasd");

// function Ladder() {
//   this.step = 0;
// }

// function LadderStep() {
//   this.up = function () {
//      this.step++;
//      return this;
//   };
//   this.down = function () {
//     this.step--;
//     return this;
//   };
//   this.showStep = function () {
//     return this.step;
//   };
// }
// Ladder.prototype = new LadderStep();
// const ladder = new Ladder();
// console.log(ladder.up().up().up().down().showStep());

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// const arr1 = [];
// const amount = 10;
// const min = -10;
// const max = 10;

// for (let i = 0; i < amount; i++) {
//   arr1.push(Math.round(getRandomArbitrary(min, max)));
// }

// console.log(arr1);

// const evenArr = arr1.filter(isEven);
// const oddArr = arr1.filter(isOdd);

// function isEven(element) {
//   return element % 2 === 0;
// }
// console.log(evenArr);

// function isOdd(element) {
//   return element % 2 === 1;
// }
// console.log(oddArr);

"use strict";

// const site = {
//   title: "green site",
//   headers: ["Header 1", "Header 2", "Header 3"],
//   showHeaers() {
//     console.log(this);
//     this.headers.forEach((header) => {
//       console.log(`${header} | ${this.title}`);
//     });
//   },
// };
// site.showHeaers();

// const sumNum = (...num) => num.reduce((acum, vol) => acum + vol);
// console.log(sumNum(2, 4));

// const arrNumbers = [1, 2];

// sumNum(...arrNumbers)

// const vowelsLeters = ["a", "e", "o"];
// const nonVowelsLetters = ["b", "c", "d"];
// const result = [...vowelsLeters, ...nonVowelsLetters];
// console.log(result);

// const factorial = (num, pow) => {
//   if (pow === 0) {
//     return 1;
//   }
//   return num * factorial(num, pow - 1);
// };
// console.log(factorial(2, 4));

// const sum = (...arg) => arg.reduce((value, num) => value + num);
// const arr = [1, 2];
// console.log(sum(...arr));

// const obj = {
//   showArgs(a, b, ...c) {
//     console.log(c);
//     c.forEach((elem) => console.log(this));
//   },
// };
// obj.showArgs(1,2,10,20,30)

//Lastname F.
// const re = /First Lastname/gi;
// const str = "First Lastname";
// const newStr = str.replace(re, "Lastname F.");
// console.log(newStr);

// const str = "First Lastname";

// const newStr = (str, re = /First Lastname/gi) => {
//   return str.replace(re, "Lastname F.");
// };
// console.log(newStr(str));

// //Korochanksiy V.

// const fullName = "vlad korochanskiy";
// const getFullName = (string, separator = " ") => {
//   const getArrReversFullName = string
//     .split(separator)
//     .reverse()
//     .map((word) => word.at(0).toUpperCase() + word.slice(1));
//   return (
//     getArrReversFullName.shift() +
//     " " +
//     getArrReversFullName.map((word) => word.at(0) + ".").join()
//   );
// };

// console.log(getFullName(fullName));

//OLD SYNTAX
// function User(fname, sname, age) {
//   this.fname = fname;
//   this.sname = sname;
//   this.age = age;
//   User.count++; //статаческое свойство
// }
// User.count = 0;
// User.createTestUser = () => new User("Anonim", "Anonimus");
// function UserPrototype() {
//   this.getFullName = () => `${this.fname} ${this.sname}`;
// }
// User.prototype = new UserPrototype();
// const user1 = new User("Elon", "Musk", 50);
// console.log(user1);
// const user2 = new User("Elon", "Musk", 50);
// const user3 = new User("Elon", "Musk", 50);

//NEW SYNTAX
// class Woker {
//   constructor(fname, sname, rate, days, age) {
//     this.fname = fname;
//     this.sname = sname;
//     this.days = days;
//     this.rate = rate;
//     this.age = age;
//     Woker.count++;
//     Woker.isWoker;
//     Woker.createTestUser;
//   }
//   getSalary = () => this.rate * this.days;
//   get age() {
//     return this._age;
//   }
//   set age(age) {
//     if (typeof age !== "number") {
//       throw new TypeError("Age must be number");
//     }
//     if (age < 0 || age > AGE_MAX) {
//       throw new RangeError("Age must be 0.." + AGE_MAX);
//     }
//     this._age = age;
//   }
//   get days() {
//     return this._days;
//   }
//   set days(days) {
//     if (typeof days !== "number") {
//       throw new TypeError("Hey,Days,must be number");
//     }
//     if (days < 1 || days > DAYS_WORK) {
//       throw new RangeError("Hey,work days must be 1.." + DAYS_MAX);
//     }
//     this._days = days;
//   }
//   static count = 0;
//   static createTestUser() {
//     return new Woker("Anonim", "Anonimus", 15, 15, 15);
//   }
//   static isWoker(obj) {
//     return obj instanceof Woker;
//   }
// }

// class Fuel {
//   constructor(volume, dencity) {
//     this.volume = volume;
//     this.dencity = dencity;
//   }
//   get volume() {
//     return this._volume;
//   }
//   set volume(volume) {
//     if (typeof volume !== "number") {
//       throw new TypeError("volume must be number");
//     }
//     if (volume < 0 || volume > 40) {
//       throw new RangeError("volume must be 0...40");
//     }
//     this._volume = volume;
//   }
//   get dencity() {
//     return this._dencity;
//   }
//   set dencity(dencity) {
//     if (typeof dencity !== "number") {
//       throw new TypeError("dencity must be number");
//     }
//     if (dencity < 0.65 || dencity > 0.85) {
//       throw new RangeError("dencity must be 0.65....0.85");
//     }
//     this._dencity = dencity;
//   }
//   get weight() {
//     return this._volume * this._dencity;
//   }
//   static isFuel(obj) {
//     return obj instanceof Fuel;
//   }
// }

// class Auto {
//   #model;
//   constructor(model, ownWeight) {
//     this.#model = model;
//     this.ownWeight = ownWeight;
//   }
//   get ownWeight() {
//     return this._ownWeight;
//   }
//   set ownWeight(ownWeight) {
//     if (typeof ownWeight !== "number") {
//       throw new TypeError("Ownweight must be number");
//     }
//     if (typeof ownWeight < 1500 || ownWeight > 2000) {
//       throw new RangeError("Ownweight must be 1500...2000");
//     }
//     this._ownWeight = ownWeight;
//   }
//   getFullWeight(objFuel) {
//     return this._ownWeight + objFuel.weight;
//   }
// }

// class Animal {
//   #type;
//   constructor(name, type, countOfLegs) {
//     this.name = name;
//     this.#type = type;
//     this.countOfLegs = countOfLegs;
//   }
//   get countOfLegs() {
//     return this.countOfLegs;
//   }
//   set countOfLegs(countOfLegs) {
//     if (countOfLegs < 0 || countOfLegs > 4) {
//       throw new RangeError();
//     }
//     this._countOfLegs = countOfLegs;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   static isAnimal(obj) {
//     return obj instanceof Animal;
//   }
// }

// class User {
//   constructor(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
//     this._isBan = false;
//   }
//   getFullName() {
//     return `${this.fname} ${this.lname}`;
//   }
//   static isUser(obj) {
//     return obj instanceof User;
//   }
//   get isBan() {
//     return this._isBan;
//   }
// }

// class Moderator extends User {
//   constructor(fname, lname, permisson) {
//     super(fname, lname);
//     this.permisson = permisson;
//   }
// }

// class Admin extends Moderator {
//   constructor(fname, lname, permisson) {
//     super(fname, lname, permisson);
//   }
//   ban(obj) {
//     if (User.isUser(obj) === false) {
//       throw new TypeError("must be user!");
//     }
//     obj._isBan = true;
//   }
//   unBan(obj) {
//     if (User.isUser(obj) === false) {
//       throw new TypeError("must be user!");
//     }
//     obj._isBan = false;
//   }
// }

// class Squirrel {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   jump() {
//     return `${this.name} is jumping`;
//   }
// }

// class FlySquirel extends Squirrel {
//   constructor(name, color, maxDistance) {
//     super(name, color);
//     this.maxDistance = maxDistance;
//   }
//   get maxDistance() {
//     return this._maxDistance;
//   }
//   set maxDistance(value) {
//     if (value > 90 || value < 70) {
//       throw new RangeError("error");
//     }
//     this._maxDistance = value;
//   }
//   fly(dist) {
//     return `${this.name} is ${
//       dist > this._maxDistance ? "not" : ""
//     } flying at ${dist}`;
//   }
// }

// class MagicFlySqueriel extends FlySquirel {
//   constructor(name, color, maxDistance, songs) {
//     super(name, color, maxDistance);
//     this.songs = songs;
//   }

//   songsSign() {
//     this.songs.forEach((song) => {
//       console.log(`${this.name} is singing ${song}`);
//     });
//   }
// }

// class Figura {
//   constructor(name) {
//     this.name = name;
//   }
//   getArea() {
//     return null;
//   }
//   static isFigura(obj) {
//     return obj instanceof Figura;
//   }
// }

// class Triangular extends Figura {
//   constructor(side1, side2, angle) {
//     super("Triangular");
//     this.side1 = side1;
//     this.side2 = side2;
//     this.angle = angle;
//   }
//   getArea() {
//     return (
//       ((this.side1 * this.side2) / 2) * Math.sin(this.angle * (180 / Math.PI))
//     );
//   }
// }
// const tr = new Triangular(12, 12, 45);
// console.log(tr.getArea());

// class Square extends Figura {
//   constructor(side) {
//     super("Square");
//     this.side = side;
//   }
//   getArea() {
//     return this.side * this.side;
//   }
// }

// function calcAreaFigure(figure){
//   if(Figura.isFigura(figure)===false){
//     throw new TypeError('must be figure')
//   }
//   return figure.getArea()
// }
// console.log(calcAreaFigure(tr));

// const arr = [1,2,63];
// for (const elem of arr) {
//   console.log(elem);
// }

// function sum(){
//   console.log(arguments);
// }
// sum(...arr)

// const getRandomNum20 = (min, max, amount) => {
//   let arr20 = [];
//   for (let i = 0; i < amount; i++) {
//     arr20.push(Math.round(Math.random() * (max - min) + min));
//   }
//   return arr20
// };

// const max = getRandomNum20(10,50,20)
// console.log(max);
// console.log(Math.max(...max));

// const min = getRandomNum20(10,50,20)
// console.log(min);
// console.log(Math.min(...min));




