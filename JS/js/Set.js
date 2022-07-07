"use strict";
const dictionary = new Map();
dictionary.set("мир", "peace");
dictionary.set("небо", "sky");
dictionary.set("море", "sea");
dictionary.set("людина", "man");
dictionary.set("поехать", "go");
dictionary.set("на", "on");
dictionary.set("як", "as");
dictionary.set("група", "group");
dictionary.set("навчання", "teaching");
dictionary.set("мова", "langugae");
dictionary.set("програмування", "programming");
dictionary.set("заниматься", "engage in");

// const mySet = new Set(...dictionary.keys())
// console.log(mySet);

const numbers1 = [1, 2, 3];
const numbers2 = [2, 2, 3, 5, 3, 5];
const numbersUnique = [...new Set([...numbers1,...numbers2])]
console.log(numbersUnique);
