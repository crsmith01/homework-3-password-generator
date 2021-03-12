// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthEl = document.getElementById("#length");
var spcecialEl = document.getElementById("#speical-characters");
var numericEl = document.getElementById("#numeric");
var uppercaseEl = document.getElementById("#uppercase");
var lowercaseEl = document.getElementById("#lowercase");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function getRandomSymbol() {
  
}

function getRandomLower





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
