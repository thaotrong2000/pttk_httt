$(document).ready(function () {
  $("#nameSupplier").keypress(function (e) {
    if (e.keyCode == 13) {
      console.log();
      var listProducts = [];

      var valueLocalStorage = JSON.parse(localStorage.getItem("products"));
      valueLocalStorage.map((value) => {
        if (
          $("#nameSupplier").val().toLowerCase() == value.supplier.toLowerCase()
        ) {
          listProducts.push(value);
        }
      });
      console.log(listProducts);

      const productWrapper = document.querySelector(".container");

      const htmls = listProducts.map((item) => {
        return `
        <a class="home-product-item">
            <img src="${item.img}" alt="" class="home-product-item__img">
            <h4 class="home-product-item__name">${item.name}</h4>
            <p class="home-product-item__price">Giá:${item.price}</p>
            <p class="home-product-item__supplier">Nhà cung cấp: ${item.supplier}</p>
            <h1 onclick="buyProduct('${item.id}', '${item.supplier}', '${item.img}', '${item.name}', '${item.price}', '${item.priceReal}')">Đồng ý</h1>
        </a>
    `;
      });

      productWrapper.innerHTML = htmls.join("");
      console.log(productWrapper);
    }
  });
});

function buyProduct(id, supplier, img, name, price, priceReal) {
  var checkDup = false;
  var colors = [];
  if (JSON.parse(localStorage.getItem("confirm"))) {
    colors = JSON.parse(localStorage.getItem("confirm"));
  }

  colors.map((value) => {
    if (value.id == id) {
      checkDup = true;
    }
  });

  if (!checkDup) {
    colors.push({
      id: id,
      supplier: supplier,
      img: img,
      name: name,
      price: price,
      priceReal: priceReal,
    });
  }

  localStorage.setItem("confirm", JSON.stringify(colors)); //store colors
  var storedColors = JSON.parse(localStorage.getItem("confirm")); //get them back
  console.log(storedColors);
}
