function passLength() {
  // Function asks user how long they want their password to be. 8 and 128 characters in length is acceptable. 
  var passwordLength = prompt("How many characters would you like your password to be");
  
  if (passwordLength <= 8) {
    window.alert("Password must be at least 8 characters.");
    passLength();
  } else if (passwordLength >= 128) {
    window.alert("Password length must not exceed 128 characters.");
    passLength();
  }
  
  return passwordLength;
}



function typeOfChars() {
    // Function asks user what kind of characters they want to include in their password (numbers, symbols, uppercase, and lowercase are the options).

  var characters = '' 

  var acceptableInput = ['Yes', 'yes', 'Y', 'y'];  

  var number = window.prompt("Would you like your password to include numeric characters?");
  if (acceptableInput.includes(number)) {
    characters += "0123456789";
  }
  
  var symbol = window.prompt("Would you like your password to include special characters (symbols)?");
  if (acceptableInput.includes(symbol)) {
    characters += "!@#$%^&*()-_=+[]{}\|;:.>,</?`~";
  }

  var lowercase = window.prompt("Would you like your password to include lowercase characters?");
  if (acceptableInput.includes(lowercase)) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  var uppercase = window.prompt("Would you like your password to include uppercase characters?");
  if (acceptableInput.includes(uppercase)) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return characters;
}



function randomChar(charString) {
    // Function creates and returns a random character.
  var randomChar = charString[Math.floor(Math.random() * charString.length)]
  return randomChar;
}



function constructPassword(charString) {
    // Function creates a password of randomly chosen characters (numbers, symbols, uppercase, and lowercase).
  var passwordLength = passLength();
  var password = '';

  for (var i = 0; i < passwordLength; i++) {
    var temporaryChar = randomChar(charString);  
    password += temporaryChar
  }  
  return password;
}



function generatePassword() {
    // This is the main function = it will generate the final password. 
  var charString = typeOfChars()
  if (charString.length == 0) {
    alert('You must choose at least one type of character');
    var charString = typeOfChars();  
  }

  var password = constructPassword(charString);
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
var generateBtn = document.querySelector("#generate"); 
generateBtn.addEventListener("click", generatePassword); 