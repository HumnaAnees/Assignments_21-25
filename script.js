// Question_01

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome!");


// Question_02

let favoritePhone = prompt("Enter your favorite mobile phone model:");
let inputLength = favoritePhone.length;
alert("My favourite phone is: " + favoritePhone + "\nLength of string: " + inputLength);


// Question_03

var word = "Pakistani";
var indexOfN = word.indexOf("n");
document.write("The index of letter 'n' is: " + indexOfN);


// Question_04

var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("The last index of letter 'l' is: " + lastIndex +"<br>");


// Question_05

var word = "Pakistani";
var charAtIndex = word.charAt(3);
document.write("The character at the 3rd index is: " + charAtIndex +"<br>");


// Question_06

let firrstName = prompt("Enter your first name:");
let lasttName = prompt("Enter your last name:");
let fulllName = firrstName.concat(" ", lasttName);
alert("Hello, " + fulllName + "! Welcome!" +"<br>");


// Question_07

var city = "Hyderabad";
var updatedCity = city.replace("Hyder", "Islam");
document.write(updatedCity + "<br>");


// Question_08

var message = "Ali and Sami are best friends. They play cricket and football together.";
var updatedMessage = message.replace(/and/g, "&");
document.write(updatedMessage + "<br>");


// Question_09

var str = "472";
var num = Number(str);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>"); 


// Question_10

let userrrInput = prompt("Enter a sentence:");
let capitalizedInput = userrrInput.toUpperCase();
alert("Capital Letters: " + capitalizedInput);


// Question_11

function toTitleCase(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
        )
        .join(' '); 
}let userrInput = prompt("Enter a sentence:");
let titleCaseInput = toTitleCase(userrInput);
alert("Title Case: " + titleCaseInput);



// Question_12

var num = 35.36;
var numString = num.toString().replace('.', '');
document.write(numString);


// Question_13

function checkUsername() {
    let username = prompt("Enter your username:");
    const specialSymbols = ['@', '.', '!', ','];
    for (let i = 0; i < specialSymbols.length; i++) {
        if (username.includes(specialSymbols[i])) {
            alert("Invalid username! Please enter a valid username without special symbols.");
            return; 
        }
    }
    alert("Username is valid.");
}
checkUsername();


// Question_14

const A = ["cake", "apple pie", "cookie", "chips", "patties"];
function searchItem() {
    const searchTerm = prompt("Enter an item to search:");
    const foundItem = A.some(item => item.toLowerCase() === searchTerm.toLowerCase());
    if (foundItem) {
        alert(`The item "${searchTerm}" is found in the list.`);
    } else {
        alert(`The item "${searchTerm}" is not found in the list.`);
    }
}searchItem();


// Question_15

function validatePassword(password) {
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    if (!isNaN(password.charAt(0))) {
        alert("Password should not start with a number.");
        return false;
    }
    let hasAlphabet = /[a-zA-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);

    if (!hasAlphabet || !hasNumber) {
        alert("Password must contain both alphabets and numbers.");
        return false;
    }

    return true;
}
let password;
do {
    password = prompt("Enter your password:");
} while (!validatePassword(password));
alert("Password is valid.");



// Question_16

var university = "University of Karachi";
var universityArray = university.split("");
universityArray.forEach(function(character) {
    document.write(character + "<br>");
});


// Question_17

let userInput = prompt("Enter a string:");
let lastCharacter = userInput.charAt(userInput.length - 1);
alert("The last character of your input is: " + lastCharacter);


// Question_18

let text = "The quick brown fox jumps over the lazy dog";
let lowerCaseText = text.toLowerCase();
let count = (lowerCaseText.match(/\bthe\b/g) || []).length;
alert("The number of occurrences of the word 'the' is: " + count);
