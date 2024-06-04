var account_admin_default = [
  {
    id: 1,
    username: "user1111@gmail.com",
    password: "user1111",
    name: "Đỗ Quang Vinh",
    img: "",
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
    img: "",
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

document
  .getElementById("confirm-create-new-user")
  .addEventListener("click", () => {
    var email1 = document.getElementById("email1").value;
    var name1 = document.getElementById("name1").value;
    var password1 = document.getElementById("password1").value;
    var confirmPassword1 = document.getElementById("confirmPassword1").value;
    var phoneNumber1 = document.getElementById("phone1").value;
    var address1 = document.getElementById("address1").value;
    var gender1;
    if (document.getElementById("Gender1-0").checked) {
      gender1 = "Nam";
    } else if (document.getElementById("Gender1-1").checked) {
      gender1 = "Nữ";
    } else {
      gender1 = "Khác";
    }
    var dob1 = document.getElementById("dob1").value;

    // ===============================================================
    var emailInvalid = false;
    if (Object(account_default).some((value) => value.email === email1)) {
      document.getElementById("emailInvalidMessage").style.display = "block";
    } else {
      document.getElementById("emailInvalidMessage").style.display = "none";
      emailInvalid = true;
    }

    var passValid = false;
    if (String(password1).length < 8) {
      document.getElementById("passInvalidMessage").style.display = "block";
    } else {
      document.getElementById("passInvalidMessage").style.display = "none";
      passValid = true;
    }
    var passConfirmValid = false;
    if (password1 !== confirmPassword1) {
      document.getElementById("passConfirmInvalidMessage").style.display =
        "block";
    } else {
      document.getElementById("passConfirmInvalidMessage").style.display =
        "none";
      passConfirmValid = true;
    }

    var dobValid = false;
    var today = new Date();
    var birthDate = new Date(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age >= 18) {
      document.getElementById("dobInvalidMessage").style.display = "block";
    } else {
      dobValid = true;
      document.getElementById("dobInvalidMessage").style.display = "none";
    }

    var phoneNumberValid = false;
    if (
      (String(phoneNumber1).length === 10 ||
        String(phoneNumber1).length === 11) &&
      String(phoneNumber1)[0] === "0"
    ) {
      document.getElementById("numberPhoneInvalidMessage").style.display =
        "none";
      phoneNumberValid = true;
    } else {
      document.getElementById("numberPhoneInvalidMessage").style.display =
        "block";
    }

    var account_valid =
      passValid &&
      passConfirmValid &&
      dobValid &&
      phoneNumberValid & emailInvalid;

    //================================================================

    if (account_valid) {
      var newUser = {
        username: email1,
        password: password1,
        name: name1,
        img: "",
        dob: dob1,
        address: address1,
        phoneNumber: phoneNumber1,
        gender: gender1,
      };

      var countNewUser =
        localStorage.getItem("countNewAdmin") === null
          ? 0
          : Number(localStorage.getItem("countNewAdmin"));
      localStorage.setItem("countNewAdmin", ++countNewUser);

      var countNewUserInfo = `User${countNewUser}`;
      localStorage.setItem(countNewUserInfo, JSON.stringify(newUser));

      //==================================================================
      account_default.push(newUser);
      localStorage.setItem("All-Admin", JSON.stringify(account_default));
      alert("Đăng nhập thành công !");
      window.location.href = "login.html";
    }
  });
