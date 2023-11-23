document.getElementById("login-form").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("email-input");
    var passwordInput = document.getElementById("password-input");
    var confirmPasswordInput = document.getElementById("confirm-password-input");
    var rememberCheckbox = document.getElementById("remember-checkbox");

    var emailError = document.getElementById("email-error");
    var passwordError = document.getElementById("password-error");
    var confirmPasswordError = document.getElementById("confirm-password-error");

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

    if (confirmPasswordInput.value.trim() === "") {
        confirmPasswordInput.classList.add("error-input");
        confirmPasswordError.innerHTML = "Повторите пароль";
        isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.classList.add("error-input");
        confirmPasswordError.innerHTML = "Пароли не совпадают";
        isValid = false;
    } else {
        confirmPasswordInput.classList.remove("error-input");
        confirmPasswordError.innerHTML = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});