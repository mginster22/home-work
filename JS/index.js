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

const SECRET_NUM = "20";
let attempt = 0;
const getUserSecretNum = function () {
  for (let i = 1; i++; ) {
    const user = prompt("Enter your num:");
    if (user === SECRET_NUM) {
      console.log("Lacky,you win!");
      console.log("Количество попыток:" + attempt);
      break;
    } else if (user > SECRET_NUM) {
      console.log("less");
    } else if (user < SECRET_NUM) {
      console.log("more");
    }
    attempt++;
  }
};
getUserSecretNum();
