// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//storing user selections
var password= [];

//Make arrays for lowercase letters, uppercase letters, numbers, and symbols
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
  "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]; 

var lowerCaseLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

//--------Start "pop-up" windows for user confirmations--------

//Confirm upper case letters
if (confirm("Include upper case letters?")) { 
  //add upper case letters 
  password = password.concat(upperCaseLetters); 
  console.log(password);
}

//Confirm lower case letters
if (confirm("Inlcude lower case letters?")){ 
  password = password.concat(lowerCaseLetters ); 
  console.log(password);
}

//Confirm numbers
if (confirm("Inlcude numbers?")){ 
  password = password.concat(numbers); 
  console.log(password);
}

//Confirm Symbols
if (confirm("Include Symbols?")){ 
  password = password.concat(symbols); 
  console.log(password);
}

//if password is empty 
if (password.length === 0 ){ 
  alert("You must choose one option!")
  return generatePassword(); 
}

//Function for getting random elements 

//Build variable for sorting through user selections
  // for ( var i =0; i > 5; i++){    
    
  // //Display generated password
  

  // };
  
  var passPick = password[Math.floor(Math.random() * password.length)]
 return passPick; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
