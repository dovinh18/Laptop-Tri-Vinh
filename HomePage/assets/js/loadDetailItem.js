var itemCurrent = JSON.parse(localStorage.getItem("Detail-Item"));

document.getElementById("name-product-custom").innerText = itemCurrent.name;
document.getElementById("price_reality").innerText = itemCurrent.cost_default;
document.getElementById("price-product-custom").innerText =
  itemCurrent.cost_sell;
document.getElementById("content_description_item").innerText =
  itemCurrent.content_description;
document.getElementById("content_details_item").innerText =
  itemCurrent.content_details;
// Set img;
document
  .getElementById("main_image")
  .setAttribute("src", itemCurrent.picture_description[0].pic1);
document
  .getElementById("main_image_link")
  .setAttribute("href", itemCurrent.picture_description[0].pic1);
