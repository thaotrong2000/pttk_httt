var products = [];
var confirm = [];

if (JSON.parse(localStorage.getItem("products"))) {
  products = JSON.parse(localStorage.getItem("products"));
}

if (JSON.parse(localStorage.getItem("confirm"))) {
  confirm = JSON.parse(localStorage.getItem("confirm"));
}

if (products && confirm) {
  console.log(products);
  console.log(confirm);

  for (var i = 0; i < products.length; i++) {
    for (var j = 0; j < confirm.length; j++) {
      if (products[i].id == confirm[j].id) {
        break;
      }

      if (confirm.length - 1 == j) {
        if (products[i].priceReal < 15000) {
          console.log(products[i]);
          console.log(confirm);
          confirm.push(products[i]);
          localStorage.setItem("confirm", JSON.stringify(confirm)); //store colors
        }
      }
    }
  }
}

if (products.length > 0 && confirm.length == 0) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].priceReal < 15000) {
      console.log(products[i]);
      console.log(confirm);
      confirm.push(products[i]);
      localStorage.setItem("confirm", JSON.stringify(confirm)); //store colors
    }
  }
}

var listProductConfirm = JSON.parse(localStorage.getItem("confirm"));

console.log(listProductConfirm);

const productWrapper = document.querySelector(".container");

if (listProductConfirm) {
  const htmls = listProductConfirm.map((item) => {
    return `
              <a class="home-product-item">
                  <img src="${item.img}" alt="" class="home-product-item__img">
                  <h4 class="home-product-item__name">${item.name}</h4>
                  <p class="home-product-item__price">Giá:${item.price}</p>
                  <p class="home-product-item__supplier">Nhà cung cấp: ${item.supplier}</p>
                  <h1 class="bought">Đã đồng ý</h1>
              </a>
          `;
  });

  productWrapper.innerHTML = htmls.join("");
  console.log(productWrapper);
}
