function delete_wl_item(id) {
  document.getElementById(id).style.display = "none";
  var all_item_in_wishlist = JSON.parse(
    localStorage.getItem("all_product_in_wishlist")
  );
  var id_ni = `product-name-wl-${id.slice(8)}`;
  var new_list_item = [...all_item_in_wishlist];
  console.log(new_list_item);
  for (let index = 0; index < all_item_in_wishlist.length; index++) {
    if (
      all_item_in_wishlist[index].name ===
      document.getElementById(id_ni).innerText.trim()
    ) {
      new_list_item.splice(index, 1);
      console.log(new_list_item);
    }
  }

  localStorage.setItem(
    "all_product_in_wishlist",
    JSON.stringify(new_list_item)
  );

  alert("Xóa thành công !");

  if (localStorage.getItem("all_product_in_wishlist") === "[null]") {
    localStorage.removeItem("all_product_in_wishlist");
    setTimeout(window.location.reload(), 1000);
  }

  window.location.reload();
}
