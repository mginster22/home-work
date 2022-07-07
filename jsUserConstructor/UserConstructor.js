/**
 *
 * @param {string} fname
 * @param {string} lname
 * @param {number} age
 * @param {boolean} isMale
 * @param {string} email
 * @param {boolean} isSubscribed
 */
function User(fname, lname, age, isMale, email, isSubscribed = false) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}
function UserPrototype() {
  this.fullName = function () {
    return `${this.fname} ${this.lname}`;
  };
}
User.prototype = new UserPrototype();
function createUsers(amount = 30) {
  const arrUsers = [];
  for (let i = 0; i < amount; i++) {
    const user = new User(
      `Elon${i}`,
      `Musk${i}`,
      Math.ceil(Math.random() * (60 - 20) + 20),
      Math.random() > 0.5,
      `email${i}@gmail.com`
    );
    arrUsers.push(user);
  }
  return arrUsers;
}
const user = createUsers(20);

console.table(user);

const arrFullName = user.map(function (user) {
  return user.fullName();
});
// console.table(user)
const AGE_LIMIT = 40;
const arrAgeMore40 = user.map(function (num) {
  if (num.age >= AGE_LIMIT) {
    return num;
  }
});
// console.table(arrAgeMore40);
const isSubscribedRandom = user.forEach(function (user) {
  user.isSubscribed = Math.random() > 0.5;
});

// console.table(isSubscribedRandom);

const getFemale = user.map(function (user) {
  if (user.age < AGE_LIMIT && user.isMale === true) {
    return user;
  }
});
// console.table(getFemale);

const getEmail = user
  .filter(function (user) {
    return user.age > AGE_LIMIT;
  })
  .filter(function (user) {
    return user.isMale === true;
  })
  .filter(function (user) {
    return user.isSubscribed === true;
  })
  .map(function (user) {
    return user.email;
  });
console.table(getEmail);

const getUserFullNameMaleUpTo40 = user
  .filter(function (user) {
    return user.isMale === false;
  })
  .filter(function (user) {
    return user.age < AGE_LIMIT;
  })
  .filter(function (user) {
    return user.isSubscribed === false;
  })
  .map(function (user) {
    return `${user.fullName()} ${user.email}`;
  });

// console.table(getUserFullNameMaleUpTo40);
