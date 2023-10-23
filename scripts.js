// Input Validation - Making sure password and confirm password values match ; 
const submitButton = document.querySelector('.cta-inputs > button'); 

// When the 'Create Account' button is clicked, check if the passwords entered
// in the 'Password' and 'Confirm Password' input fields match. 
submitButton.addEventListener('click', (e) => {
    // Cannot use .innerText to grab password values. Have to use .value. 
    const userPasswordInput = document.querySelector("#password"); 
    const confirmUserPasswordInput = document.querySelector("#confirm-password"); 

    const userPassword = userPasswordInput.value; 
    const confirmUserPassword = confirmUserPasswordInput.value; 

    if (userPassword !== confirmUserPassword) {
        e.preventDefault(); 
        userPasswordInput.classList.toggle('error'); 
        confirmUserPasswordInput.classList.toggle('error'); 

        const errorMessage = document.querySelector('.error-message');
        errorMessage.innerText = "* Passwords do not match"; 
    }

})

// On file load, Initially toggle off the error class for both password inputs. 
const userPassword = document.querySelector("#password"); 
const confirmUserPassword = document.querySelector("#confirm-password"); 

userPassword.classList.toggle('error'); 
confirmUserPassword.classList.toggle('error'); 