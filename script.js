// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword (){
  var passwordLength = prompt("How many characters would you like your password to have?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8-128 characters long.")
    var passwordLength = prompt("How many characters would you like your password to have?")
  }

  alert("Your password will be " + passwordLength + " characters long.");
  var alphaLowerConfirm = confirm("Do you want lowercase characters?");
  var alphaUpperConfirm = confirm("Do you want uppercase characters?");
  var numbersConfirm = confirm("Do you wanted numerical characters?")
  var symbolsConfirm = confirm("Do you wanted special characters? (example:@*#^$)");


  if (alphaLowerConfirm === false && alphaUpperConfirm === false && numbersConfirm === false && symbolsConfirm === false) {
    alert("Please choose at least one parameter.");
    generatePassword()
  }

  var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var alphaUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var symbols = ['!','@','#','$','%','^','&','*','_','-','=','+'];
  var passwordCharacters = []


  if(alphaLowerConfirm){
    passwordCharacters = passwordCharacters.concat(alphaLower);
    console.log(passwordCharacters)
  }  

  if(alphaUpperConfirm){
    passwordCharacters = passwordCharacters.concat(alphaUpper);
    console.log(passwordCharacters)
  }
  
  if(numbersConfirm){
    passwordCharacters = passwordCharacters.concat(numbers);
    console.log(passwordCharacters)
  } 
  
  if(symbolsConfirm){
    passwordCharacters = passwordCharacters.concat(symbols);
    console.log(passwordCharacters)
  }  
  
  console.log(passwordCharacters);

  var finalPassword = ""
  for (var i = 0; i <= passwordLength; i++) {
    var finalPassword = finalPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(finalPassword);

  }
  return finalPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

