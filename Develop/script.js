var passwordLength = 8;
var choiceArr = [];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbols = ['!', '@', '#', '$', '%', '&', '*', '?'];




// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Button pressed.");
  var password = "";
  for (i = 0; i < passwordLength; i++);
}

function getPrompts() {

  choiceArr = [];

  passwordLength = parseInt(prompt("How long would you like your password to be? Must be between 8 and 128 characters."));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
  alert("Must be a number between 8 and 128. Please try again.");
  return false;
}
if (confirm("Would you like lowercase letters?")) {
  choiceArr = choiceArr.concat(lowerCase);
}
if (confirm("Would you like uppercase letters?")) {
  choiceArr = choiceArr.concat(upperCase);
}
if (confirm("Would you like numbers letters?")) {
  choiceArr = choiceArr.concat(numbers);
}
if (confirm("Would you like symbols letters?")) {
  choiceArr = choiceArr.concat(symbols);
}
return true;
}



// Write password to the #password input
function writePassword() {

  var prompts = getPrompts();

  if (prompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
