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
  e.preventDefault();
  const dataRequest = {
    email: logInFormEl[0],
    password: logInFormEl[1],
  };

  fetch("../data.json", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(dataRequest),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        window.location.href = "order.html";
      } else {
        alert(data.message);
      }
    });
}

function register(e) {
  e.preventDefault();
  const dataRequest = {
    firstName: registerFormEl[0],
    email: registerFormEl[1],
    password: registerFormEl[2],
    password_confirmation: registerFormEl[3],
  };
  fetch("../data.json", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(dataRequest),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        window.location.href = "order.html";
      } else {
        alert(data.message);
      }
    });
}
