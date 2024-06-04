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
    var emailValid = false;
    if (Object(account_default).some((value) => value.username === email1)) {
      document.getElementById("emailInvalidMessage").style.display = "block";
      document.getElementById("emailInvalidMessage1").style.display = "none";
    } else {
      let regex = /^\w+@\w+\.\w+$/;
      if (!regex.test(email1)) {
        document.getElementById("emailInvalidMessage1").style.display = "block";
        document.getElementById("emailInvalidMessage").style.display = "none";
      } else {
        document.getElementById("emailInvalidMessage").style.display = "none";
        document.getElementById("emailInvalidMessage1").style.display = "none";
        emailValid = true;
      }
    }

    var nameValid = false;
    if (String(name1) === "") {
      document.getElementById("nameInvalidMessage").style.display = "block";
    } else {
      document.getElementById("nameInvalidMessage").style.display = "none";
      nameValid = true;
    }

    var addressValid = false;
    if (String(address1) === "") {
      document.getElementById("addressInvalidMessage").style.display = "block";
    } else {
      document.getElementById("addressInvalidMessage").style.display = "none";
      addressValid = true;
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
    if (document.getElementById("dob1").value === "") {
      document.getElementById("dobInvalidMessage1").style.display = "block";
    } else {
      var birthDate = new Date(document.getElementById("dob1").value);
      var age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        document.getElementById("dobInvalidMessage").style.display = "block";
        document.getElementById("dobInvalidMessage1").style.display = "none";
      }
      var monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 18) {
        document.getElementById("dobInvalidMessage").style.display = "block";
        document.getElementById("dobInvalidMessage1").style.display = "none";
      } else {
        dobValid = true;
        document.getElementById("dobInvalidMessage").style.display = "none";
        document.getElementById("dobInvalidMessage1").style.display = "none";
      }
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
      phoneNumberValid &&
      emailValid &&
      nameValid &&
      addressValid;

    //================================================================

    if (account_valid) {
      var newUser = {
        username: email1,
        password: password1,
        name: name1,
        img: "./assets/images/no-user.webp",
        dob: dob1,
        address: address1,
        phoneNumber: phoneNumber1,
        gender: gender1,
      };

      var countNewUser =
        localStorage.getItem("countNewUser") === null
          ? 0
          : Number(localStorage.getItem("countNewUser"));
      localStorage.setItem("countNewUser", ++countNewUser);

      var countNewUserInfo = `User${countNewUser}`;
      localStorage.setItem(countNewUserInfo, JSON.stringify(newUser));

      //==================================================================
      account_default.push(newUser);
      localStorage.setItem("All-User", JSON.stringify(account_default));
      alert("Đăng ký thành công !");
      window.location.href = "sign-in.html";
    }
  });
