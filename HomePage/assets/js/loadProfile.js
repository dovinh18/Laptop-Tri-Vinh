var user_login = JSON.parse(localStorage.getItem("user_login_now"));

var name = document
  .getElementById("Name")
  .setAttribute("value", user_login.name);
var dob = document.getElementById("dob").setAttribute("value", user_login.dob);
if (user_login.gender === "Nam") {
  document.getElementById("Gender-0").checked = true;
} else if (user_login.gender === "Nữ") {
  gender = document.getElementById("Gender-1").checked = true;
} else {
  gender = document.getElementById("Gender-3").checked = true;
}
var address = document
  .getElementById("Permanent_Address")
  .setAttribute("value", user_login.address);
var phoneNumber = document
  .getElementById("Phone_Number")
  .setAttribute("value", user_login.phoneNumber);
var email = document
  .getElementById("Email_Address")
  .setAttribute("value", user_login.username);
var img = document
  .getElementById("avatar-user")
  .setAttribute("src", user_login.img);
