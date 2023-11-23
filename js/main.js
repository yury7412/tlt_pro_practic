document.getElementById("login-form").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("email-input");
    var passwordInput = document.getElementById("password-input");
    var rememberCheckbox = document.getElementById("remember-checkbox");

    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");

    var isValid = true;

    if (emailInput.value.trim() === "") {
        emailInput.classList.add("error-input");
        emailError.innerHTML = "Введите адрес электронной почты";
        isValid = false;
    } else {
        emailInput.classList.remove("error-input");
        emailError.innerHTML = "";
    }

    if (passwordInput.value.trim() === "") {
        passwordInput.classList.add("error-input");
        passwordError.innerHTML = "Введите пароль";
        isValid = false;
    } else {
        passwordInput.classList.remove("error-input");
        passwordError.innerHTML = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});