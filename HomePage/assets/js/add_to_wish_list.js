var product_in_wishlist = [];

if (localStorage.getItem("all_product_in_wishlist") !== null) {
  product_in_wishlist = JSON.parse(
    localStorage.getItem("all_product_in_wishlist")
  );
}
var add_to_wishlist_btn = document.getElementById("add_to_wishlist_btn");

add_to_wishlist_btn.addEventListener("click", function () {
  if (localStorage.getItem("user_login_now") === null) {
    alert(
      "Vui lý đăng nhập trang web để thêm sản phẩm vào danh sách yêu thích !"
    );
  } else {
    var produc_data = JSON.parse(localStorage.getItem("Detail-Item"));
    product_in_wishlist.push(produc_data);
    localStorage.setItem(
      "all_product_in_wishlist",
      JSON.stringify(product_in_wishlist)
    );
    alert("Sản phẩm đã được thêm vào danh sách yêu thích !");
  }
  window.location.reload();
});
