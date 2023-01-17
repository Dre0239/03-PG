// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("password");
// Arrays
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = upperCase.toString().toLowerCase().split(",");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var arrays = [];

function selectsymbol() {
  if (confirm("Add uppercaser letters?")) {
    arrays = arrays.concat(upperCase);
  }
  if (confirm("Add uppercaser letters?")) {
    arrays = arrays.concat(lowercase);
  }
  if (confirm("Add uppercaser letters?")) {
    arrays = arrays.concat(number);
  }
  if (confirm("Add uppercaser letters?")) {
    arrays = arrays.concat(symbol);
  }
}

function generatePassword() {
  var passwordlength = prompt(
    " I choose a length of at least 8 characters and no more than 128 characters "
  );
  if (passwordlength >= 8 && passwordlength <= 128) {
    selectsymbol();
  } else {
    alert("please enter 8 or more numbers.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
