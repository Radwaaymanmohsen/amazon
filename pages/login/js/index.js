const users = {
    radwa: {
        email: "radwa@example.com",
        password: "radwa",
        isAdmin: true
    },
    roaa: {
        email: "roaa@example.com",
        password: "roaa",
        isAdmin: false
    }
}

const btn = document.getElementById("btn");

const login_form = document.getElementById("login")
const username_login = document.getElementById("username-login")
const password_login = document.getElementById("password-login")
const login_button = document.getElementById("login-btn")

const register_form = document.getElementById("register")
const username_register = document.getElementById("username-register")
const email_register = document.getElementById("email-register")
const password_register = document.getElementById("password-register")
const password_confirm_register = document.getElementById("password-confirm-register")
const register_button = document.getElementById("register-btn")

const forms = document.getElementsByTagName("form");

function is_email_available(email) {
    for (user in users) {
        if (users[user].email === email) {
            return false;
        }
    }
    return true;
}

[...forms].forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    })
})

login_button.addEventListener("click", () => {
    if (!login_form.checkValidity()) {
        return;
    }

    if (!(username_login.value in users)) {
        alert("User does not exist");
        return;
    }

    let user = users[username_login.value]

    if (password_login.value != user.password) {
        alert("Incorrect password");
        return;
    }

    if (user.isAdmin) {
        window.location = "../../dashboard/index.html";
    } else {
        window.location = "../../../index.html";
    }
})

register_button.addEventListener("click", () => {
    if (!register_form.checkValidity()) {
        return;
    }

    if (username_register.value in users) {
        alert("Username is in use");
        return;
    }

    if (!is_email_available(email_register.value)) {
        alert("Email is in use");
        return;
    }

    if (password_register.value != password_confirm_register.value) {
        alert("Passwords do not match");
        return;
    }

    users[username_register.value] = {
        email: email_register.value,
        password: password_register.value,
        isAdmin: false
    }

    login_form.style.left = "50px";
    register_form.style.left = "450px";
    btn.style.left = "0px";
})

