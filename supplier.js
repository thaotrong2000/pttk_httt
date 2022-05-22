var nameSupplierSave = "";

$(document).ready(function () {
  $("#nameSupplier").keypress(function (e) {
    if (e.keyCode == 13) {
      filterSupplier();
    }
  });
});

function filterSupplier() {
  var listProducts = [];

  var valueLocalStorage = JSON.parse(localStorage.getItem("products"));
  valueLocalStorage.map((value) => {
    if (
      $("#nameSupplier").val().toLowerCase() == value.supplier.toLowerCase()
    ) {
      nameSupplierSave = $("#nameSupplier").val();
      console.log(value.priceReal, "value");
      if (value.priceReal > 15000) {
        listProducts.push(value);
      }
    }
  });

  const productWrapper = document.querySelector(".container");
  var listConfirm = JSON.parse(localStorage.getItem("confirm"));

  const htmls = listProducts.map((item) => {
    if (listConfirm) {
      for (var i = 0; i < listConfirm.length; i++) {
        if (listConfirm[i].id == item.id) {
          return `
      <a class="home-product-item">
          <img src="${item.img}" alt="" class="home-product-item__img">
          <h4 class="home-product-item__name">${item.name}</h4>
          <p class="home-product-item__price">Giá:${item.price}</p>
          <p class="home-product-item__supplier">Nhà cung cấp: ${item.supplier}</p>
          <h1 class="bought">Đã đồng ý</h1>
      </a>
  `;
        }
      }
    }
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
}

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

  console.log(nameSupplierSave);

  filterSupplier();
}
