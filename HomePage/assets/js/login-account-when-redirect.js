const login_status = document.querySelectorAll("#login-status li");
window.onload = () => {
  if (localStorage.getItem("user_login_now") === null) {
    login_status[0].style.display = "none";
    login_status[1].style.display = "none";
    login_status[4].style.display = "none";
    login_status[5].style.display = "none";
  } else {
    login_status[2].style.display = "none";
  }
};

login_status[5].addEventListener("click",() => {
    localStorage.removeItem("user_login_now");
    window.location.reload();
});