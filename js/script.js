"use strict";

//Imports
import { error, generatePassword, password } from './generatePassword.js';

// Get display tag
const displayTag = document.getElementById('display');

// Get length tag
const lengthTag = document.getElementById('length');

// Generate password action
document.getElementById('generate').addEventListener('click',()=>{

    // Get password length
    let length = lengthTag.value;

    // Generate password
    generatePassword(length);

    // Display copy container and password display container
    document.querySelector('.copy-container').style.display = 'block';
    document.querySelector('.display-container').style.display = 'block';

    if(error==null) {        
        // Display password
        displayTag.textContent = password;
    }
    else{ 
        displayTag.textContent = error;
        displayTag.style.color ='#ff0000';
    }
})

// Get copy button tag
const copyBtn = document.getElementById('copy');

// Copy password to clipboard
copyBtn.addEventListener('click',()=>{
    // Copy to clipboard using the clipboard API
    navigator.clipboard.writeText(password);

    // Change button text to indicate that password has been copied
    copyBtn.textContent = "Password copied to clipboard";

    // Reset text to "Copy password"
    setTimeout(()=>{
        copyBtn.textContent = "Copy password";
    },1000)
})

