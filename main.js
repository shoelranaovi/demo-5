const display = document.querySelector(".input");
const copy = document.querySelector(".fa-regular");
const btn = document.querySelector(".btn");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowqer = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "#*$%^&*()!@#$#";
const length = 12;
const all = upperCase + lowqer + number + symbol;

btn.addEventListener("click", () => {
  let a = passward();
  display.value = a;
});

function random(len) {
  return Math.floor(Math.random() * len);
}
function passward() {
  let passward = "";
  passward += upperCase[random(upperCase.length)];
  passward += lowqer[random(lowqer.length)];
  passward += number[random(number.length)];
  passward += symbol[random(symbol.length)];
  while (length > passward.length) {
    passward += all[random(all.length)];
  }

  return passward;
}
