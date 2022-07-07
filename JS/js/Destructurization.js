const user = {
  personalInfo: {
    fname: "Vlad",
    lname: "Korochanskiy",
    sname: "Olegovich",
    bday: {
      day: 22,
      month: 10,
      yeaer: 1997,
    },
    age: 26,
    sex: "male",
  },
  contactsInfo: {
    mobilePhone: "+380996101480",
    email: "mginster234942@gmail.com",
  },
  location: {
    country: "Ukraine",
    city: "Zaporozhie",
    adress: {
      street: "Graznova",
      house: 7,
      apartment: 27,
    },
  },
  hobby: {
    sport: ["judo", "gym", "run"],
    boardGame: ["monopolia", "uno"],
  },
};

const {
  personalInfo: { fname },
  contactsInfo: { mobilePhone, email },
  location: {
    adress: { street },
  },
  hobby: {
    sport: [, , last],
  },
} = user;

// console.log(`${fname} ${mobilePhone} ${street} ${last} ${email}`);

const user1 = {
  id: 1,
  fname: "elon",
};
const user2 = {
  id: 2,
  fname: "vlad",
};

const msgElon = ["Hi", "456ggg", "Bye!"];
const msgVlad = ["Try!", "Go", "Change!"];

const mapUsers = new Map();
mapUsers.set(user1, msgElon);
mapUsers.set(user2, msgVlad);

const getUserMessages = (user) => {
  return mapUsers.get(user);
};
console.log(getUserMessages());
