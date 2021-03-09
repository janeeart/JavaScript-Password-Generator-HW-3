// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialSymbols = ['#','@','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','^','!','@','['];
var numbers = [0,1,2,3,4,5,6,7,8,9];

// Write password to the #password input

function generatePassword() {
  var totalCharacters = [];
  var charLength = prompt("How many characters would you like your password to contain?");
  if(charLength < 8 || charLength > 128) {
    alert("It is recommended that your password contain 8 to 128 characters.");
  } else {
  if(confirm("Click 'OK' to include upper case letters in your password.")) {
    Array.prototype.push.apply(totalCharacters, upperCase);
  }
  if(confirm("Click 'OK' to include lower case letters in your password.")) {
    Array.prototype.push.apply(totalCharacters, lowerCase);
  }
  if(confirm("Click 'OK' to include special characters in your password.")) {
    Array.prototype.push.apply(totalCharacters, specialSymbols);
  }
  if(confirm("Click 'OK' to include numbers in your password.")) {
    Array.prototype.push.apply(totalCharacters, numbers);
  }

  var password = "";
  for (var i = 0; i < charLength; i++) {
      var random = Math.floor(Math.random()*totalCharacters.length);
      password += totalCharacters[random];
    }
  }
  return password;
}

// Add event listener to generate button

function writePassword() {
  var password = generatePassword()
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);




