// Assignment code here

// Get references to the #generate element
// Defining variables I need to generate this, my plan is to create an array length based on the amount of characters requested, and then randomly replace with values from their proper types, and then randomizing it.
var generateBtn = document.querySelector("#generate");
var itemArray =[1];
var passwordArray = []
var charLength = 0;
var charLengthCorrect= false;
var lowercase = false;
var lowercaseValues = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = false;
var uppercaseValues = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric = false;
var numericValues = [1,2,3,4,5,6,7,8,9,0];
var specialChars = false;
var specialCharValues = ['~','','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','<',',','>','.','?','/'];

// This is taking input for length of characters from the user.
function passwordLength() { 
  var userInput = prompt("Pick a length of characters between 8 and 128.");
  if (userInput<=7 || userInput>=129) {
    window.alert("Must be a number between 8 and 128.");
  } else if (userInput>=8 || userInput<=128) {
    window.alert("The next few boxes will give you options for character types.");
    charLengthCorrect = true;
    charLength=userInput;
  } else {
    window.alert("Please enter a number.");
  }
}

//use charLength to decide the length of itemArray in decideArrayLength, and make the array the specified length
function decideArrayLength() {
  if (charLengthCorrect === true) {
    var length = charLength-1;
    for(var i = 0; i < length; i++) {
      itemArray.push("");
    }
  } else {
    console.log("Incorrect data type or size.");
  }
}

//Deciding if we want uppercase letters or not, and adding a flag that tells a function called later whether we want this type of character or not.
function characterUppercase() {
  var upperAlert = confirm("Would you like uppercase characters? OK for yes, Cancel for no.");
  if (upperAlert == true) {
    uppercase = true;
    console.log("upcase "+uppercase);
  } else {
    uppercase = false;
    console.log("upcase "+uppercase);
  }
}

//Deciding if we want lowercase letters or not, and adding a flag that tells a function called later whether we want this type of character or not.
function characterLowercase() {
  var lowerAlert = confirm("Would you like lowercase characters? OK for yes, Cancel for no.");
  if (lowerAlert == true) {
    lowercase = true;
    console.log("lowcase "+lowercase);
  } else {
    lowercase = false;
    console.log("lowcase "+lowercase);
  }

}

//Deciding if we want numeric values or not, and adding a flag that tells a function called later whether we want this type of character or not.
function characterNum() {
  var numAlert = confirm("Would you like numeric values? OK for yes, Cancel for no.");
  if (numAlert == true) {
    numeric = true;
    console.log("number "+numeric);
  } else {
    numeric = false;
    console.log("number "+numeric);
  }

}

//Deciding if we want special characters or not, and adding a flag that tells a function called later whether we want this type of character or not.
function characterSpecial() {
  var specialAlert = confirm("Would you like special characters? OK for yes, Cancel for no.");
  if (specialAlert == true) {
    specialChars = true;
    console.log("spec "+specialChars);
  } else {
    specialChars = false;
    console.log("spec "+specialChars);
  }

}

//randomly replacing pieces in an array using a for loop, this takes the flags 
function placeChars() {
  function charIndexRandom() { 

    Math.floor(Math.random()*4); 

  }
  var charFlags = [uppercase,lowercase,numeric,specialChars]
  var holdPlacer = [uppercaseValues,lowercaseValues,numericValues,specialCharValues]

  for(var h=0; h<charFlags.length; h++) {

    if (charFlags[h]===true) {

      for(var i=0; i<itemArray.length; i++) {

          itemArray.splice(Math.floor(Math.random() * itemArray.length),1,holdPlacer[h][Math.floor(Math.random() * holdPlacer[h].length)]);
          charFlags[h]=false;
        }
    } else {
      console.log("No types of characters chosen.")
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  itemArray =[1]
  lowercase = false;
  uppercase = false;
  numeric = false;
  specialChars = false;
  console.log(lowercase,uppercase,numeric,specialChars)

}

function generatePassword() {
  console.log(itemArray);
  passwordLength();
  if (charLengthCorrect=true) {
    decideArrayLength();
    characterUppercase();
    characterLowercase();
    characterNum();
    characterSpecial();
    placeChars()
    console.log(itemArray);
    return itemArray.join("")
  } else {
    alert("Please try again.")
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
