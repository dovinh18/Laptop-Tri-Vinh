var all_item_in_wishlist = JSON.parse(
  localStorage.getItem("all_product_in_wishlist")
);
var all_item_in_shopping_cart = JSON.parse(
  localStorage.getItem("all_item_in_shopping_cart")
);

document.getElementById("total-sc-item").innerText = all_item_in_shopping_cart.length;
document.getElementById("total-wl-item").innerText = all_item_in_wishlist.length;