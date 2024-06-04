var addToCartMessage = document.getElementsByClassName("checkLogin");

if (localStorage.getItem("user_login_now") === null) {
  document.getElementById("cart-redirect").style.display = "none";
  document.getElementById("wishlist-redirect").style.display = "none";
  for (var i = 0; i < addToCartMessage.length; i++) {
    addToCartMessage[i].addEventListener("click", () => {
      alert("Vui lý đăng nhập trang web để thêm sản phẩm vào giỏ hàng !");
    });
  }
} else {
  for (var i = 0; i < addToCartMessage.length; i++) {
    addToCartMessage[i].addEventListener("click", () => {
      alert("Thêm sản phẩm vào giỏ hàng thành công !");
    });
  }
}
