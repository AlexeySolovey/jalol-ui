const logInFormEl = document.querySelector(".login-form");
const registerFormEl = document.querySelector(".register-form");

function goToLogin() {
  logInFormEl.style.display = "block";
  registerFormEl.style.display = "none";
}

function goToRegister() {
  logInFormEl.style.display = "none";
  registerFormEl.style.display = "block";
}

function login(e) {
  console.log(e);
  e.preventDefault();
  fetch("../data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = "order.html";
    });
  console.dir(logInFormEl[0].value);
}

function register() {}
