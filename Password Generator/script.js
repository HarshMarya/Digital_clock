//set of data
const numberSet = "1234567890";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = upperCase.toLowerCase();
const symbolSet = "@#$%^&*()_|?~,./><+";

//selectors
const totalChar = document.getElementById("total-char");
const display = document.getElementById("display");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const symbolInput = document.getElementById("symbol");
const numberInput = document.getElementById("number");
const btn = document.getElementById("btn");

//function for get element from set of data
const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

//conditional function for checked & input condition to get proper output
const getPassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (password.length <= totalChar.value) {
    return getPassword(password);
  }

  display.innerText = truncateString(password, totalChar.value);
};

btn.addEventListener("click", function () {
  getPassword();
});

//trim function to aliminate extra output of getPassword function
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}
