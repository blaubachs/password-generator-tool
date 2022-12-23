// Assignment Code
var generateBtn = document.querySelector("#generate");

let correctValue=false
let charLength=0
let upperCase=false
let lowerCase=false
let numberChar=false
let specialChar=false
let lowercaseValues = 'abcdefghijklmnopqrstuvwxyz'
let uppercaseValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numericValues = '1234567890'
let specialCharValues = '~`!@#$%^&*()_-+={[}]|:;<,>.?/'
let passwordGenString=''
let passwordGenerated=[]


function generateLength() {
    var userInput = prompt("Pick a length of characters between 8 and 128.");

    if (userInput<=7 || userInput>=129) {
      window.alert("Must be a number between 8 and 128.");
    } else if (userInput>=8 && userInput<129) {
      window.alert("The next few boxes will give you options for character types.");
      correctValue = true;
      charLength=userInput;
    //   console.log(charLength)
    } else {
      window.alert("Please enter a number.");
    }

}

function generatePassword() {
    generateLength()
    if(correctValue) {

        //Deciding if we want special characters or not, and adding a flag that tells a function called later whether we want this type of character or not.
        var upperAlert = confirm("Would you like uppercase characters? OK for yes, Cancel for no.");
        if (upperAlert) {
          passwordGenString+=passwordGenString.concat(uppercaseValues)
        //   console.log(uppercaseValues[Math.floor(Math.random()*uppercaseValues.length)])
          passwordGenerated+=(uppercaseValues[Math.floor(Math.random()*uppercaseValues.length)])
        //   console.log(passwordGenerated)
        } 

        var lowerAlert = confirm("Would you like lowercase characters? OK for yes, Cancel for no.");
        if (lowerAlert) {
          passwordGenString+=passwordGenString.concat(lowercaseValues)
          passwordGenerated+=(lowercaseValues[Math.floor(Math.random()*lowercaseValues.length)])
        //   console.log(passwordGenerated)
        } 

        var numAlert = confirm("Would you like numeric values? OK for yes, Cancel for no.");
        if (numAlert) {
          passwordGenString+=passwordGenString.concat(numericValues)
          passwordGenerated+=(numericValues[Math.floor(Math.random()*numericValues.length)])
        //   console.log(passwordGenerated)
        } 

        var specialAlert = confirm("Would you like special characters? OK for yes, Cancel for no.");
        if (specialAlert) {
          passwordGenString+=passwordGenString.concat(specialCharValues)
          passwordGenerated+=(specialCharValues[Math.floor(Math.random()*specialCharValues.length)])
        //   console.log(passwordGenerated)
        } 
        // Adding an if statement and return; to quit out of 
        if (!upperAlert&&!lowerAlert&&!numAlert&&!specialAlert) {
            alert("Must select at least one type of character. Please try again.")
            return;
        }

        // Defining variable below for while loop
        let i=passwordGenerated.length

        // While loop runs until the password generated is the length of the characters chosen by the user.
        while (i<charLength) {
            passwordGenerated+=passwordGenString[Math.floor(Math.random()*passwordGenString.length)]
            i++
            // console.log(passwordGenerated);
        }

        return passwordGenerated;
    } 

    return;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  passwordGenString=''
  passwordGenerated=''
  upperCase=false
  lowerCase=false
  numberChar=false
  specialChar=false

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
