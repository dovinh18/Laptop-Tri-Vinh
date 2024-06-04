var account_default = [
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

if (localStorage.getItem("All-User") === null) {
  localStorage.setItem("All-User", JSON.stringify(account_default));
} else {
  account_default = JSON.parse(localStorage.getItem("All-User"));
}

const login_btn = document.getElementById("login-btn");
login_btn.addEventListener("click", () => {
  var exampleInputEmail1 = document.getElementById("exampleInputEmail1").value;
  var exampleInputPassword1 = document.getElementById(
    "exampleInputPassword1"
  ).value;
  console.log(exampleInputEmail1);
  console.log(exampleInputPassword1);
  var isUsernameValid = account_default.some(
    (value) => value.username === exampleInputEmail1
  );

  var isPasswordValid = account_default.some(
    (value) => value.password === exampleInputPassword1
  );

  if (!isUsernameValid) {
    alert("Không tồn tại tài khoản này !");
  } else if (!isPasswordValid) {
    alert("Email hoặc mật khẩu không hợp lệ !");
  }

  var isAccountValid = isUsernameValid && isPasswordValid;
  if (isAccountValid) {
    var index = account_default.findIndex(
      (value) => value.username === exampleInputEmail1
    );

    localStorage.setItem(
      "user_login_now",
      JSON.stringify(account_default[index])
    );
    window.location.href = "home.html";
    alert("Đăng nhập thành công !");
  }
});
