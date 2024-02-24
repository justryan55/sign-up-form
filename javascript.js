const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password")
const emailError = document.querySelector("#email + span.error");
const firstNameError = document.querySelector("#first_name + span.error");
const lastNameError = document.querySelector("#last_name + span.error");
const numberError = document.querySelector("#number + span.error");
const passwordError = document.querySelector("#password + span.error");
const confirmPasswordError = document.querySelector("#confirm_password + span.error");


email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showEmailError();
    }
})

function showEmailError(){
    if (email.validity.valueMissing){
        emailError.textContent = "You need to enter an email address";
    } else if (email.validity.typeMismatch){
        emailError.textContent = "Please provide a valid email address.";
    } else {
        emailError.textContent = " ";
        }
    }


password.addEventListener("input", showPasswordError)

function showPasswordError(event){
    if (password.value.length < password.minLength){
        passwordError.textContent = "You need a minimum of 8 characters.";
    } else {
        passwordError.textContent = "";
    }
}

function comparePassword(event){
    if (confirm_password.value !== password.value){
        confirmPasswordError.textContent = "Your passwords do not match.";
    } else {
        confirmPasswordError.textContent = "";
    } 
}

confirm_password.addEventListener("input", comparePassword);
