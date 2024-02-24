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

// function showPasswordError(){
//     if (password.validity.tooShort)
// }

confirm_password.addEventListener("input", (event) => {
    if (confirm_password.value !== password.value){
        confirm_password.setCustomValidity("Your passwords do not match.");
    } else {
        confirm_password.setCustomValidity("");
    } 
});
