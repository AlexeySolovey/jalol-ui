function checkUser() {
  const isToken = localStorage.getItem("token");
  if (!isToken) {
    console.log(window.location);
    window.location.href = "/";
  }
}
checkUser();
