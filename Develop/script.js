// Assignment Code
// DOM elements
var generateBtn = document.querySelector("#generate");
var lengthEl = document.getElementById("#length");
var symbolEl = document.getElementById("#symbol");
var numericEl = document.getElementById("#numeric");
var uppercaseEl = document.getElementById("#uppercase");
var lowercaseEl = document.getElementById("#lowercase");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// 1 event, which is clicking the "Generate Password" button. Need a clickevent
generate.addEventListener("click", function() {
  var length = +lengthEl.value;
  var hasSymbol = symbolsEl.checked;
  var hasNumeric = numericEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasLower = lowercaseEl.checked;
}

console.log(hasUpper, hasLower, hasSymbol, hasNumeric);


// creating an object for the 4 functions below
var randomFunc = {
  symbols = getRandomSymbol
  numeric = getRandomNumber
  uppercase = getRandomUpper
  lowercase = getRandomLower
}


// Password generator functions - using https://www.w3schools.com/html/html_charset.asp
// using Math.floor method to round down

// can get a character in a string like in an array
function getRandomSymbol() {
  var symbols = "!@#$%^&*()[]{}-_=+~;:,<.>/?\|"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// 10 possible digits (0-9) - 48-57 in CharCode
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// 26 letters of the alphabet - Uppercase letters are 65 to 90 in CharCode
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// 26 letters of the alphabet - Lowercase letters are 97-122 in CharCode
function getRandomLower() [
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
]






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
