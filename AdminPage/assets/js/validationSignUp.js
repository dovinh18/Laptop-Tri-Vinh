var input_name = document.getElementById("input-name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");

var account_admin_default = JSON.parse(localStorage.getItem("All-Admin"));

var signup_btn = document.getElementById("signUp-btn");
signup_btn.addEventListener("click", () => {
  
  var nameValid = false;
  if (input_name.value === "") {
    document.getElementById("name-error").style.display = "block";
  } else {
    document.getElementById("name-error").style.display = "none";
    nameValid = true;
  }

  var emailValid = false;
  if (
    Object(account_admin_default).some((value) => value.username === email.value)
  ) {
    document.getElementById("email-exist").style.display = "block";
    document.getElementById("email-error").style.display = "none";
  } else {
    let regex = /^\w+@\w+\.\w+$/;
    if (!regex.test(email.value)) {
      document.getElementById("email-error").style.display = "block";
      document.getElementById("email-exist").style.display = "none";
    } else {
      document.getElementById("email-error").style.display = "none";
      document.getElementById("email-exist").style.display = "none";
      emailValid = true;
    }
  }

  var passwordValid = false;
  if (String(password.value).length < 8) {
    document.getElementById("password-error").style.display = "block";
  } else {
    document.getElementById("password-error").style.display = "none";
    passwordValid = true;
  }
  var confirmPasswordValid = false;
  if (password.value !== confirmPassword.value) {
    document.getElementById("confirmPassword-error").style.display = "block";
  } else {
    document.getElementById("confirmPassword-error").style.display = "none";
    confirmPasswordValid = true;
  }
  if (nameValid && emailValid && passwordValid && confirmPasswordValid) {
    var newAccount = {
      id: account_admin_default.length + 1,
      username: email.value,
      password: password.value,
      name: input_name.value,
      img: "assets/images/no-user.webp",
    };
    account_admin_default.push(newAccount);
    localStorage.setItem("All-Admin", JSON.stringify(account_admin_default));
    alert("Đăng ký thành công !");
    window.location.href = "login.html";
  }
});
