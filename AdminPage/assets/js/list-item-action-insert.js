const list_value_input = document.getElementsByClassName("value-insert");

const list_item_2 = document.getElementsByClassName("choose-to-delete");
var total_item = list_item_2.length;


document.getElementById("images_item").addEventListener("change", (event) => {
  var img = event.target.files[0];
  const r = new FileReader();
  r.onload = (e) => {
    document
    .getElementById("images_item_value")
    .setAttribute("src",  e.target.result);
  };
  r.readAsDataURL(img);
});

const btn_insert = document.getElementById("btn-insert");
btn_insert.addEventListener("click", () => {
  var code_item = list_value_input[0].value;
  var name_item = list_value_input[1].value;
  var cost_item = list_value_input[2].value;
  var quantity_item = list_value_input[3].value;
  var productor_item = list_value_input[4].value;

  var images_item = document
    .getElementById("images_item_value")
    .getAttribute("src");
  var now = new Date();
  var datetime = `${now.getDate().toString().padStart(2, "0")}/${(
    now.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${now.getFullYear()}`;
  var status = "Còn hàng";
  total_item++;
  var value = `<tr id="row-info-item-${total_item}">
                                <td>
                                  <input
                                    class="choose-to-delete"
                                    type="checkbox"
                                    value="row-info-item-${total_item}"
                                  />
                                </td>
                                <td>${total_item}</td>
                                <td>${code_item}</td>
                                <td>${name_item}</td>
                                <td>${status}</td>
                                <td>${
                                  numeral(cost_item).format("0,0") + "đ"
                                }</td>
                                <td>${quantity_item}</td>
                                <td>${productor_item}</td>
                                <td>${datetime}</td>
                                <td>
                                  <img
                                    class="rounded-circle img-3x me-2"
                                    src="${images_item}"
                                    alt="Ảnh mô tả sản phẩm"
                                  />
                                </td>
                              </tr>`;
  const checkOption = confirm("Bạn đã chắc chắn thêm sản phẩm này ?");
  if (checkOption === true) {
    document
      .getElementById("list-all-item")
      .insertAdjacentHTML("beforeend", value);

    setTimeout(function () {
      alert("Thêm sản phẩm thành công !");
    }, 50);
  }
});
