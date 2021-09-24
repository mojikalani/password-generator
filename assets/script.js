// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  // string. You will need to change the following two lines of code.

  //storing user array length
  function userCharacters(){
    
    var userLength = prompt("How many characters for password? "); 
    
    if (userLength < 8 || userLength > 27){ 
      alert("invalid length, please choose between 8 and 27");
      userCharacters();
      }
      
  }
  //Call function for asking character length
  userCharacters();
  
  //Make arrays for lowercase letters, uppercase letters, numbers, and symbols
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]; 
  
  var lowerCaseLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

  var userPassword= [];

  //--------Start "pop-up" windows for user confirmations--------

  //Confirm upper case letters
  if (confirm("Include upper case letters?")) { 
    //add upper case letters 
    userPassword = userPassword.concat(upperCaseLetters); 
    
  }
  
  //Confirm lower case letters
  if (confirm("Inlcude lower case letters?")){ 
    userPassword = userPassword.concat(lowerCaseLetters ); 
    
  }

  //Confirm numbers
  if (confirm("Inlcude numbers?")){ 
    userPassword = userPassword.concat(numbers); 
    
  }

  //Confirm Symbols
  if (confirm("Include Symbols?")){ 
    userPassword = userPassword.concat(symbols); 
    
  }

  //if userPassword is empty 
  if (userPassword.length === 0 ){ 
    alert("You must choose one option!")
    return generatePassword(); 
  }

  //Function for getting random elements 
  
  //Build variable for sorting through user selections
    //var length= userCharacters(); 
    
     for ( var i =0; i < 7; i++){    
      
      var passPick = userPassword[Math.floor(Math.random() * userPassword.length)];
     
      console.log(passPick);
       };

       return passPick;
  //     var userPass = [];
  //     userPass.concat(passPick);
  //     //Display generated password
  //     //------- for reference ----- 
  //  writePassword(userPass);
  
  
 }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



