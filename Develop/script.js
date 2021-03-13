// Assignment Code
// DOM elements
// var generateBtn = document.querySelector("#generate");
var generateEl = document.querySelector("#generate");
var lengthEl = document.getElementById("#length");
var symbolEl = document.getElementById("#symbol");
var numericEl = document.getElementById("#numeric");
var uppercaseEl = document.getElementById("#uppercase");
var lowercaseEl = document.getElementById("#lowercase");
var passwordEl = document.getElementById("#password");



// creating an object for the 4 functions below - keys used later
var randomFunc = {
  symbols: getRandomSymbol
  numeric: getRandomNumber
  uppercase: getRandomUpper
  lowercase: getRandomLower
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// STILL TO DO: create alerts to say what to do
window.alert("How many characters would you like your password to be? Type or use the up or down arrows. Then uncheck a box if you do not want those types of characters included in your password.");

// Generate password function. typesCount to count how many are checked off, typesArr for array. Want array of objects with symbols, numeric, upper, and lower as the key. Filtering out if it's unchecked

function generatePassword(symbols, numeric, uppercase, lowercase, length) {
  var generatePassword = " ";
  var typesCount = symbols + numeric + uppercase + lowercase;
	var typesArr = [{numeric}, {upper}, {lower}, {symbols}].filter(item function() Object.values(item)[0]);
}

  // if user unchecks all boxes so there are no selected types, return an empty string
  if (typesCount === 0) {
    return "";
  }
  // create a loop to generate each character for each type
  for (i=0; i<length; i+=typesCount) {
    typesArr.forEach(type => {
        var funcName = Object.keys(type)[0];
        generatePassword =+ randomFunc[funcName]();
    });
}



// Password generator functions - using https://www.w3schools.com/html/html_charset.asp
// using Math.floor method to round down since we don't want decimals

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

// 1 event, which is clicking the "Generate Password" button. Need a clickevent
generateBtn.addEventListener("click", function() {
  var length = +lengthEl.value;
  var hasSymbol = symbolsEl.checked;
  var hasNumeric = numericEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasLower = lowercaseEl.checked;

  passwordEl.innerText = writePassword(length, hasSymbol, hasNumeric, hasUpper, hasLower);
});

