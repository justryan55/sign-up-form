const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password")

email.addEventListener("input", (event) => {
    if (email.validity.valueMissing){
        email.setCustomValidity("You need to enter an email address.");
    } else if (email.validity.typeMismatch){
        email.setCustomValidity("Entered value needs to be an email address");
    } else {
        email.setCustomValidity("");
    }
})

confirm_password.addEventListener("input", (event) => {
    if (confirm_password.value !== password.value){
        confirm_password.setCustomValidity("Your passwords do not match.");
    } else {
        confirm_password.setCustomValidity("");
    } 
})