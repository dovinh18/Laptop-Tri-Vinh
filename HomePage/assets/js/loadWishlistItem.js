var product_in_wishlist = [];
if (localStorage.getItem("all_product_in_wishlist") !== null) {
  product_in_wishlist = JSON.parse(
    localStorage.getItem("all_product_in_wishlist")
  );
}

for (var i = 0; i < product_in_wishlist.length; i++) {
  var product = `
  <tr id="wl-item-${i + 1}">
                      <td class="col-md-2">
                        <img
                          src="${
                            product_in_wishlist[i].picture_description[0].pic1
                          }"
                          alt="image"
                        />
                      </td>
                      <td class="col-md-9">
                        <div class="product-name">
                          <a id="product-name-wl-${i + 1}" href="detail.html" onclick="loadDetailItemInWishlist('${
                            product_in_wishlist[i].name
                          }')"
                            >${product_in_wishlist[i].name}</a
                          >
                        </div>
                        <div class="rating">
                          <i class="fa fa-star rate"></i>
                          <i class="fa fa-star rate"></i>
                          <i class="fa fa-star rate"></i>
                          <i class="fa fa-star rate"></i>
                          <i class="fa fa-star non-rate"></i>
                          <span class="review">( 06 lượt thích )</span>
                        </div>
                        <div class="price">
                          ${product_in_wishlist[i].cost_sell}
                          <span>${product_in_wishlist[i].cost_default}</span>
                        </div>
                      </td>
                      <td class="col-md-1 close-btn">
                        <a href="#" class=""
                          ><i
                            id="delete-wl-item-${i + 1}"
                            onclick="delete_wl_item('wl-item-${i + 1}')"
                            class="fa fa-times"
                          ></i
                        ></a>
                      </td>
                    </tr>
  `;
  document
    .getElementById("all-item-in-wl")
    .insertAdjacentHTML("beforeend", product);
}
