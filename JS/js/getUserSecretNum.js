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