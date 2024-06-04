const list_item = document.getElementById("list-all-item");

const btn_delete = document.getElementById("delete-action");
btn_delete.addEventListener("click", () => {
  const checkOption = confirm(
    "Bạn chắc chắn muốn xóa những sản phẩm đã chọn ?"
  );
  if (checkOption === true) {
    const check_conform_delete =
      document.getElementsByClassName("choose-to-delete");
    for (let i = 0; i < check_conform_delete.length; i++) {
      var id_element_parent = `row-info-item-${i + 1}`;
      if (check_conform_delete[i].checked === true) {
        document.getElementById(id_element_parent).style.display = "none";
      }
    }
  }
});
