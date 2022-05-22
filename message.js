var listProductConfirm = JSON.parse(localStorage.getItem("confirm"));

const productWrapper = document.querySelector(".container");

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
