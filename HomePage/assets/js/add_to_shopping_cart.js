var add_to_shopping_cart_btn =document.getElementById("add_to_shopping_cart");
var img_src = JSON.parse(localStorage.getItem("Detail-Item")).picture_description[0].pic1;
add_to_shopping_cart_btn.addEventListener("click",function(e){
    var list_products_add_to_card = [];

    var name_item = document.getElementById("name-product-custom");
    var price_item = document.getElementById("price-product-custom");
    var quantity_item = document.getElementById("quantity_item_1");

    var total_price =
      Number(price_item.innerText.replace(/[, . đ]/g, "")) * quantity_item.value;

    var new_item_add_to_card = {
      img: img_src,
      name: name_item.innerText,
      quantity: Number(quantity_item.value),
      price: price_item.innerText,
      total_price: total_price,
    };

    if (localStorage.getItem("user_login_now") !== null) {
      if (localStorage.getItem("all_item_in_shopping_cart") === null) {
        list_products_add_to_card.push(new_item_add_to_card);
        localStorage.setItem(
          "all_item_in_shopping_cart",
          JSON.stringify(list_products_add_to_card)
        );
      } else {
        var old_list_products_add_to_card = JSON.parse(
          localStorage.getItem("all_item_in_shopping_cart")
        );
        old_list_products_add_to_card.push(new_item_add_to_card);
        localStorage.setItem(
          "all_item_in_shopping_cart",
          JSON.stringify(old_list_products_add_to_card)
        );
        window.location.reload();
      }
    }
      
});




