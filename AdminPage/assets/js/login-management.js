var account_admin_default = [
  {
    id: 1,
    username: "user1111@gmail.com",
    password: "user1111",
    name: "Đỗ Quang Vinh",
    img: "./assets/images/admin-1.jpg",
    dob: "2004-02-18",
    address: "Cà Mau",
    phoneNumber: "0912678082",
    gender: "Nam",
  },
  {
    id: 2,
    username: "user2222@gmail.com",
    password: "user2222",
    name: "Nguyễn Cao Đức Trí",
    img: "./assets/images/admin-2.jpg",
    dob: "2004-02-18",
    address: "Cà Mau",
    phoneNumber: "0912678082",
    gender: "Nam",
  },
];

if (localStorage.getItem("All-Admin") === null) {
  localStorage.setItem("All-Admin", JSON.stringify(account_admin_default));
} else {
  account_admin_default = JSON.parse(localStorage.getItem("All-Admin"));
}

const login_btn = document.getElementById("login-admin-btn");
login_btn.addEventListener("click", () => {
  var input_email_admin1 = document.getElementById("login-admin-email").value;
  var input_password_admin1 = document.getElementById(
    "login-admin-password"
  ).value;
  console.log(input_email_admin1);
  console.log(input_password_admin1);
  var isUsernameValid = account_admin_default.some(
    (value) => value.username === input_email_admin1
  );

  var isPasswordValid = account_admin_default.some(
    (value) => value.password === input_password_admin1
  );

  if (!isUsernameValid) {
    alert("Không tồn tại tài khoản này !");
  } else if (!isPasswordValid) {
    alert("Email hoặc mật khẩu không hợp lệ !");
  }

  var isAccountValid = isUsernameValid && isPasswordValid;
  if (isAccountValid) {
    var index = account_admin_default.findIndex(
      (value) => value.username === input_email_admin1
    );

    localStorage.setItem(
      "user_login_admin_now",
      JSON.stringify(account_admin_default[index])
    );
    window.location.href = "index.html";
    alert("Đăng nhập thành công !");
  }
});
