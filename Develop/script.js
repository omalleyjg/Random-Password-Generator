// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Button pressed.");

  //1. prompt the user for password length 8 < 128
  
  //2. validate length of password based on user input
  
  //3. prompt the user for uppercase letters
  
  //4. prompt the user for lowercase letters
  
  //5. prompt the user for numbers
  
  //6. prompt the user for symbols
  
  //7. generte random password based on criteria
  
  //8. return passowrd to page
  return ("Password will go here.")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
