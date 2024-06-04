function format_shopping_cart_item(
  id,
  img_src,
  name_item,
  quantity,
  price,
  total_price
) {
  return `<tr id="cart-item-${id}">
                      <td class="romove-item">
                        <a
                          href="#"
                          title="cancel"
                          class="icon"
                          data-toggle="modal"
                          data-target="#dialog-confirm-delete${id}"
                          ><i class="fa fa-trash-o"></i
                        ></a>
                      </td>
                      <td class="cart-image">
                        <a class="entry-thumbnail" href="detail.html">
                          <img
                            src="${img_src}"
                            alt="Ảnh mô tả sản phẩm"
                          />
                        </a>
                      </td>
                      <td class="cart-product-name-info">
                        <h4 class="cart-product-description">
                          <a id="product-name-sc-${id}" href="detail.html" onclick="loadDetailItemInSC('${name_item}')" >
                            ${name_item}
                          </a>
                        </h4>
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="rating rateit-small"></div>
                          </div>
                          <div class="col-sm-8">
                            <div class="reviews">(06 Lượt xem)</div>
                          </div>
                        </div>
                        <!-- /.row -->
                        <div class="cart-product-info">
                          <span class="product-color"
                            >Màu:
                            <span>
                              <select>
                                <option>Đỏ</option>
                                <option>Vàng</option>
                                <option>Trắng</option>
                                <option>Đen</option>
                              </select>
                            </span>
                          </span>
                        </div>
                      </td>
                      <td class="cart-product-quantity" style="font-size: 15px">
                        <input
                          id="sl-dd-item-${id}"
                          type="number"
                          style="width: 70px; text-align: center; border: none"
                          min="1"
                          value="${quantity}"
                          onchange="
                          document.getElementById('total-price-item-${id}').innerText 
                          = numeral(document.getElementById('sl-dd-item-${id}').value * ${Number(
    price.substring(0, price.length - 1).replace(/[, .]/g, "")
  )}).format('0,0') + 'đ'"
                        />
                      </td>
                      <td class="cart-product-sub-total">
                        <span class="cart-sub-total-price">${String(
                          price
                        ).replace(/[.]/g, ",")}</span>
                      </td>
                      <td class="cart-product-grand-total">
                        <span
                          id="total-price-item-${id}"
                          class="cart-grand-total-price"
                          >${numeral(total_price).format("0,0")}đ</span
                        >
                      </td>
                      <td class="text-center">
                        <input type="checkbox" id="confirm-buy-item-${id}" />
                      </td>
                      <!--Xác nhận xóa sản phẩm-->
                      <div
                        class="modal fade"
                        id="dialog-confirm-delete${id}"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel${id}"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h3 class="modal-title" id="exampleModalLabel${id}">
                                Bạn muốn xóa sản phẩm này
                              </h3>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="submit"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Hủy
                              </button>
                              <button
                                type="submit"
                                class="btn btn-primary"
                                data-dismiss="modal"
                                onclick="removeItem('cart-item-${id}')"
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </tr> `;
}

var all_item_in_shopping_cart;
if (localStorage.getItem("all_item_in_shopping_cart") === null) {
  alert("Chưa có sản phẩm nào trong giỏ hàng !");
} else {
  all_item_in_shopping_cart = JSON.parse(
    localStorage.getItem("all_item_in_shopping_cart")
  );
}

for (var i = 0; i < all_item_in_shopping_cart.length; i++) {
  var id = i + 1;
  var img_src = all_item_in_shopping_cart[i].img;
  var namei = all_item_in_shopping_cart[i].name;
  var quantity = all_item_in_shopping_cart[i].quantity;
  var price = all_item_in_shopping_cart[i].price;
  var total_price = all_item_in_shopping_cart[i].total_price;
  var container = document.getElementById("list-all-item-sc");
  var newItem = container.insertAdjacentHTML(
    "beforeend",
    format_shopping_cart_item(id,img_src,namei,quantity,price,total_price)
  );
}
