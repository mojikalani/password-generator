// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.

  //Psudo Code 
//   Storing user selections
//   Make arrays for lowercase letters, uppercase letters, numbers, and symbols

//   -----------Start "pop-up" windows for user confirmations---------

//   confirm upper case letters
//   confirm lower case letters
//   confirm numbers
//   confirm symbols 
//   if password is empty

//   build variable for sorting through user selections 

//   display generated password 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
