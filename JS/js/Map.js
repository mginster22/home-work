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

const str = "Група поехать  заниматься програмування на море";
const translate = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => (dictionary.has(word) ? dictionary.get(word) : word))
    .join(" ");
};

for (const key of dictionary.keys()) {
  // console.log(key);
}
// console.log(...dictionary.values());
// for(const value of dictionary.values()){
//   console.log(value);
// }

// const arrayKeys = [...dictionary.keys()]
// console.log(arrayKeys);

const getMap = (str) => {
  const strMap = new Map();
  for (const symbol of str) {
    if (strMap.has(symbol)) {
      const count = strMap.get(symbol);
      strMap.set(symbol, count + 1);
      continue;
    }
    strMap.set(symbol, 1);

  }
  return strMap;
};
const compare = (str1, str2) => {
  const str1Map = getMap(str1);
  const str2Map = getMap(str2);
  if (str1Map.size !== str2Map.size) {
    return false;
  }
  for (const key of str1Map.keys()) {
    if (str1Map.get(key) !== str2Map.get(key)) {
      return false;
    }
  }
  return true;
};
console.log(compare("str1", "str1"));
console.log(compare("love", "evol"));
console.log();


const user1={
  id:1,
  fname:"elon"
}
const user2={
  id:1,
  fname:"Vlad"
}
const msgElon =['Hi','How are you?']
const msgVlad =['Hi','How are you?']

const mapUsers = new Map()
mapUsers.set(user1,msgElon)
console.log(mapUsers);