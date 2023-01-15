// array of variables for lowercase uppercase special characters.
var generateBtn = document.getElementById("generate");

var specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var number = "0123456789";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordCharacters = "";
var password = "";
//random character function
function randomCharacter() {
  var character =
    passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  return character;
}
// function for generating password
function generatePassword() {
  var passwordLength = prompt(
    "Password Length enter a number no less then 8 and no more 12)"
  );

  var lowercase = prompt(
    "Enter the number of lowercase characters you want to include in the password:"
  );
  var uppercase = prompt(
    "Enter the number of uppercase characters you want to include in the password:"
  );
  var numbers = prompt(
    "Enter the number of numeric characters you want to include in the password:"
  );
  var specials = prompt(
    "Enter the number of special characters you want to include in the password:"
  );
  // password length
  if (passwordLength <= 7 || passwordLength > 12) {
    alert("Password length should be between 8 and 12 characters");
    return "";
  }
  passwordCharacters = "";
  for (var i = 0; i < lowercase; i++) {
    passwordCharacters +=
      alphaLower[Math.floor(Math.random() * alphaLower.length)];
  }
  for (var i = 0; i < uppercase; i++) {
    passwordCharacters +=
      alphaUpper[Math.floor(Math.random() * alphaUpper.length)];
  }
  for (var i = 0; i < numbers; i++) {
    passwordCharacters += number[Math.floor(Math.random() * number.length)];
  }
  for (var i = 0; i < specials; i++) {
    passwordCharacters +=
      specialChar[Math.floor(Math.random() * specialChar.length)];
  }
  // alert for password length requirement
  if (passwordCharacters.length < passwordLength) {
    alert(
      "The total number of characters should be equal to or greater than the password length"
    );
    return "";
  }

  password = "";
  for (var i = 1; i <= passwordLength; i++) {
    password += randomCharacter();
  }
  return password;
}
// function to confirm password
function writePassword() {
  var confirmPassword = confirm("Are you ready to generate your new password?");
  if (confirmPassword) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
// event listener
generateBtn.addEventListener("click", writePassword);
console.log;
