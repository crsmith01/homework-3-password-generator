// Assignment Code
// DOM elements
// var generateBtn = document.querySelector("#generate");
var passwordEl = document.getElementById("#password");
var lengthEl = document.getElementById("#length");
var symbolEl = document.getElementById("#symbol");
var numericEl = document.getElementById("#numeric");
var uppercaseEl = document.getElementById("#uppercase");
var lowercaseEl = document.getElementById("#lowercase");
var generateEl = document.querySelector("#generate");

// Created alert to say what to do.
window.alert("Type, use the up or down arrows, or use the slidebar to indicate how many character you would like your password to be. Then uncheck a box if you do not want those types of characters included in your password.");


// Setting the various ways of entering user character length so that they sync together
var lengthRange = document.getElementById("#lengthRange");
var lengthNumber = document.getElementById("#lengthNumber");

lengthRange.addEventListener("input", syncLength);
lengthNumber.addEventListener("input", syncLength);

function syncLength(event) {
  var length = event.target.value;
  lengthRange.value = value;
  lengthNumber.value = value;
}


// Created an object for the 4 functions at the bottom of the js file - keys used later
var randomFunc = {
  symbols: getRandomSymbol,
  numeric: getRandomNumber,
  uppercase: getRandomUpper,
  lowercase: getRandomLower
}

// Add event listener to generate button
generateEl.addEventListener("submit", e => {
  e.preventDefault()
  var length = lengthNumber.value.trim();
  var hasSymbol = symbolEl.checked;
  var hasNumeric = numericEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasLower = lowercaseEl.checked;

  passwordEl.innerText = writePassword(length, hasSymbol, hasNumeric, hasUpper, hasLower);
});


// Generate password function. typesCount to count how many are checked off, typesArr for array. Want array of objects with symbols, numeric, uppercase, and lowercase as the key. Filtering out if it's unchecked

function writePassword(symbols, numeric, uppercase, lowercase, length) {
  var generatedPassword = "";
  // ^^^or set it to have an alert that says you must select something
  var typesCount = symbols + numeric + uppercase + lowercase;
  // console.log("typesCount: ", typesCount);
  // ^^^typesCount is the number of checked boxes, and typesArr is the those values as an array
	var typesArr = [{symbols}, {numeric}, {uppercase}, {lowercase}].filter(item => Object.values(item)[0]);
  // ^^^filter method used to eliminate the falses (aka unchecked)
  // console.log("typesArr: ", typesArr);


  // If user unchecks all boxes so there are no selected types, return an alert for minimum length.
  if (typesCount === 0) {
    alert("Password must contain at least 8 characters.");
    return;
  }

  // Created a loop to generate each character for each type (type being numeric, symbol, lowercase and uppercase). Using keys of var randomFunc. += to append on to the generatedPassword function
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
        var funcName = Object.keys(type)[0];
          // console.log("funcName: ", funcName);
        generatedPassword += randomFunc[funcName]();
    });
  }

  // console.log(generatedPassword);

  var finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Password generator functions - using https://www.w3schools.com/html/html_charset.asp
// Using Math.floor method to round down since we don't want decimals

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
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
