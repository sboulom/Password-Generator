let specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")
let numbers = "0123456789".split("")
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")
let allPassword = []
let size = 0

let tempAllPassword =[]
function generate(){


    let passwordLength = prompt("What is the size of your password (8-128)?")
        let isSpecialCharacters = confirm ("do you want special characters in your password?")
        let isNumber = confirm ("do you want numbers in your password?")
        let isUpperCase = confirm ("do you want upper case characters in your password?")
        let isLowerCase = confirm ("do you want lower case characters in your password?")

        if(passwordLength >= 8 && passwordLength <= 128) {
            size = passwordLength
            makePassword(isSpecialCharacters, isNumber, isUpperCase, isLowerCase, passwordLength)
        }
        else{
            alert("Invalid password length (8-128)")
        }

}


function addCharacters(array, checking, passwordLength, index){
    shuffle(array) 
    console.log(array)

   if(checking){
     tempAllPassword = [...array]
    allPassword.push(array[index])
    passwordLength = passwordLength-1
   }

}


function makePassword(isSpecialCharacters, isNumber, isUpperCase, isLowerCase, passwordLength){
    
    addCharacters(specialCharacters, isSpecialCharacters, passwordLength, 0)
    addCharacters(numbers, isNumber, passwordLength, 0)
    addCharacters(upperCase, isUpperCase, passwordLength, 0)
    addCharacters(lowerCase, isLowerCase, passwordLength, 0)

  
   shuffle(allPassword)

   shuffle (tempAllPassword)
   for (let index = 0; index < passwordLength; index++) {
        
            allPassword.push(tempAllPassword[index])

   }
   shuffle(allPassword)
    document.getElementById("Password").innerHTML = allPassword.join("")
}

function shuffle(arr) {
    arr.sort(function(a,b) {
      return (0.5 - Math.random());
    });
  }

document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value >0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;    }
}

function copyToClipboard(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Copied to Clipboard");
}
