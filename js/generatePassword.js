"use strict";

// All lower case letters
const lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// All upper case letters
const upperAlphabet = lowerAlphabet.map(letter => letter.toUpperCase());

// All numbers
const numbers = ['0','1','2','3','4','5','6','7','8','9'];

// All special characters
const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+','[',']','{','}','|','\\',':',';','"',',','.','/','?'];

// Password variable initialization
export let password = [];

// Error variable initialization
export let error;

// Functions to generate passwords
export function generatePassword(length) {

    //Reset old password generated
    password = [];

    //Reset error generated
    error = "";

    //check length of password
    if(length <= 0){
        error = "Length must be greater than 0";
        return;
    }
    else if(length >10000){
        error = "More than 10 000 is too much"
    }
    else{
        // Reset error
        error = null;
        return createPassword(length);
    }

    // Execute create password
    function createPassword(length){
        // Generate password
        while(length > 0) {
            // Generate random index for each type of character
            const indexLowerAlphabet = Math.floor(Math.random() * lowerAlphabet.length);
            const indexUpperAlphabet = Math.floor(Math.random() * upperAlphabet.length);
            const indexNumber = Math.floor(Math.random() * numbers.length);
            const indexSpecialsCharacters = Math.floor(Math.random() * specialCharacters.length);

            // Choose a random lowerAlphabet
            password.push(lowerAlphabet[indexLowerAlphabet]);
            length--;

            // Choose a random upperAlphabet
            password.push(upperAlphabet[indexUpperAlphabet]);
            length--;

            // Choose a random number
            password.push(numbers[indexNumber]);
            length--;

            // Choose a random special character
            password.push(specialCharacters[indexSpecialsCharacters]);
            length--;
        }
        return password.join(''); // Return password as a string
    }
    
}
