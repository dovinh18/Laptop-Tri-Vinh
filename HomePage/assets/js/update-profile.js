const update_profile = document.getElementById("update-profile");

var user_login_old = JSON.parse(localStorage.getItem("user_login_now"));

var img;

update_profile.addEventListener("click", () => {
  var name = document.getElementById("Name").value;
  user_login_old["name"] = name;
  var dob = document.getElementById("dob").value;
  user_login_old["dob"] = dob;
  if (document.getElementById("Gender-0").checked) {
    user_login_old["gender"] = "Nam";
  } else if (document.getElementById("Gender-1").checked) {
    user_login_old["gender"] = "Nữ";
  } else {
    user_login_old["gender"] = "Khác";
  }
  var address = document.getElementById("Permanent_Address").value;
  user_login_old["address"] = address;
  var phoneNumber = document.getElementById("Phone_Number").value;
  user_login_old["phoneNumber"] = phoneNumber;
  var email = document.getElementById("Email_Address").value;
  user_login_old["username"] = email;
  var img = document.getElementById("avatar-user").value;
  user_login_old["img"] = img;
  localStorage.setItem("user_login_now", JSON.stringify(user_login_old));
  user_login_old["img"] = document
    .getElementById("avatar-user")
    .getAttribute("src");
  localStorage.setItem("user_login_now", JSON.stringify(user_login_old));
  alert("Cập nhật thành công");
});

document
  .getElementById("Upload_avater-user")
  .addEventListener("change", (event) => {
    // Lấy thông tin tập tin được đăng tải
    const files = event.target.files[0];

    const reader = new FileReader();
    // Đọc thông tin tập tin đã được đăng tải

    // Lắng nghe quá trình đọc tập tin hoàn thành
    reader.addEventListener("load", (event) => {
      // Lấy chuỗi Binary thông tin hình ảnh
      img = event.target.result;
      document.getElementById("avatar-user").setAttribute("src", img);
    });

    reader.readAsDataURL(files);
  });
