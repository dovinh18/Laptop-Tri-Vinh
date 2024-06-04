// Hiển thị khi click vào các hãng sản xuất
function menuControl() {
  document.getElementById("menu__show").style.display = "block";
}

// Ẩn khi nhấn button type:submit
function submitFilter() {
  document.getElementById("menu__show").style.display = "none";
}

// Xóa sản phẩm khi nhấn list
function removeItem(i) {
  document.getElementById(i).style.display = "none";
  var all_item_in_shopping_carts = JSON.parse(
    localStorage.getItem("all_item_in_shopping_cart")
  );
  var id_ni = `product-name-sc-${i.slice(10)}`;
  var new_list_item = [...all_item_in_shopping_carts];
  console.log(new_list_item);
  for (let index = 0; index < all_item_in_shopping_carts.length; index++) {
    if (
      all_item_in_shopping_carts[index].name ===
      document.getElementById(id_ni).innerText.trim()
    ) {
      new_list_item.splice(index, 1);
      console.log(new_list_item);
    }
  }

  localStorage.setItem(
    "all_item_in_shopping_cart",
    JSON.stringify(new_list_item)
  );

  alert("Xóa thành công !");

  if (localStorage.getItem("all_item_in_shopping_cart") === "[null]") {
    localStorage.removeItem("all_item_in_shopping_cart");
    setTimeout(window.location.reload(), 1000);
  }

  window.location.reload();
}

// Cập nhật sản phẩm

// Count down slide1
const dayTime = document.getElementById("dayTime");
const hoursTime = document.getElementById("hoursTime");
const minutesTime = document.getElementById("minutesTime");
const secondTime = document.getElementById("secondTime");

setInterval(() => {
  var secondsExpiration = secondTime.innerText;
  secondTime.innerText = String(--secondsExpiration).padStart(2, "0");
  if (secondTime.innerText - 1 === -2) {
    var minutesExpiration = minutesTime.innerText;
    minutesTime.innerText = String(--minutesExpiration).padStart(2, "0");
    secondTime.innerText = "59";
  }
  if (minutesTime.innerText - 1 === -2) {
    var hoursExpiration = hoursTime.innerText;
    hoursTime.innerText = String(--hoursExpiration).padStart(2, "0");
    minutesTime.innerText = "59";
  }
  if (hoursTime.innerText - 1 === -2) {
    var dayExpiration = dayTime.innerText;
    dayTime.innerText = String(--dayExpiration).padStart(2, "0");
    hoursTime.innerText = "23";
  }

  if (
    secondTime.innerText === "00" &&
    minutesTime.innerText === "00" &&
    hoursTime.innerText === "00" &&
    dayTime.innerText === "00"
  ) {
    document.getElementById("boxTime").remove();
    const notification = document.createElement("p");
    notification.innerText = "Chương Trình Sale Đã Kết Thúc !";
    Object.assign(notification.style, {
      "font-family": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      "font-size": "20px",
      "font-weight": "bolder",
      color: "red",
    });
    document.getElementById("boxContent").appendChild(notification);
  }
}, 1000);

// Thông báo
$(document).ready(function () {
  $("#cart-redirect").popover();
  $("#wishlist-redirect").popover();
  $("#account-redirect").popover();
});
