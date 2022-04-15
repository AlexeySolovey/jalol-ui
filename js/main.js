function checkUser() {
  const isToken = localStorage.getItem("token");
  if (!isToken) {
    window.location.href = "/";
  }
}
checkUser();
