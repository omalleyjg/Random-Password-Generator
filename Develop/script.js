// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password object

var passwordCriteria = {

  passwordLength: 0,

  lowerCase: [abcdefghijklmnopqrstuvwxyz],

  upperCase: [ABCDEFGHIJKLMNOPQRSTUVWXYZ],

  numbers: [1234567890],

  symbols: [!@#$%&*?],

  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


