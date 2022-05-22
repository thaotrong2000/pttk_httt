const laptops = [
  {
    id: 1,
    name: "Laptop Acer Aspire 1",
    img: "https://anphat.com.vn/media/product/250_40592_laptop_acer_gaming_predator_triton_300_pt315_53_77cv.jpg",
    price: "15.999$",
    priceReal: "15999",
    supplier: "Acer",
  },
  {
    id: 2,
    name: "Laptop Asus ZenBook 14 UX425EA",
    img: "https://anphat.com.vn/media/product/40621_laptop_asus_zenbook_14_ux425ea_ki839w.jpg",
    price: "14.999$",
    priceReal: "14999",
    supplier: "Asus",
  },
  {
    id: 3,
    name: "Laptop Gaming Lenovo Legion 5",
    img: "https://anphat.com.vn/media/product/40011_laptop_gaming_lenovo_legion_5_15ach6h_82ju00mmvn.jpg",
    price: "13.250$",
    priceReal: "13250",
    supplier: "Lenovo",
  },
  {
    id: 4,
    name: "Laptop Dell Mobile Precision 3561",
    img: "https://anphat.com.vn/media/product/250_39341_laptop_dell_mobile_precision_3561.jpg",
    price: "25.000$",
    priceReal: "25000",
    supplier: "Dell",
  },
  {
    id: 5,
    name: "Laptop Asus Vivobook A515EA",
    img: "https://anphat.com.vn/media/product/250_40030_laptop_asus_vivobook_a515ea_l12033w.jpg",
    price: "17.120$",
    priceReal: "17120",
    supplier: "Asus",
  },
  {
    id: 6,
    name: "Laptop MSI Modern 14",
    img: "https://anphat.com.vn/media/product/250_39939_39123_msi_modern_14_b5m_064vn_r5_5500u_a936c87e3177410d9bba59e4a3384e46_master.png",
    price: "10.250$",
    priceReal: "10250",
    supplier: "MSI",
  },
  {
    id: 7,
    name: "Laptop Gigabyte AERO 16",
    img: "https://anphat.com.vn/media/product/250_42061_laptop_gigabyte_aero_16_xe5_73vn938ah__10_.jpg",
    price: "18.900$",
    priceReal: "18900",
    supplier: "Gigabyte",
  },
  {
    id: 8,
    name: "Laptop Gigabyte AERO 15 ",
    img: "https://anphat.com.vn/media/product/250_42062_laptop_gigabyte_aero_15_oled_kd_72s1623go__1_.jpg",
    price: "22.000$",
    priceReal: "22000",
    supplier: "Gigabyte",
  },
];

var priceFilter = "0";

initProduct(laptops); // render product

setInterval(() => {}, 2000);

function initProduct(val) {
  const productWrapper = document.querySelector(".product-wrap");

  var valueLocalStorage = JSON.parse(localStorage.getItem("products"));

  const htmls = val.map((item) => {
    console.log(item.id);

    if (valueLocalStorage) {
      for (let i = 0; i < valueLocalStorage.length; i++) {
        if (valueLocalStorage[i].id == item.id) {
          if (valueLocalStorage[i].priceReal < 15000) {
            return `
          <div class="grid__column-2-3">
              <a class="home-product-item">
                  <img src="${item.img}" alt="" class="home-product-item__img">
                  <h4 class="home-product-item__name">${item.name}</h4>
                  <p class="home-product-item__price">Giá:${item.price}</p>
                  <p class="home-product-item__supplier">Nhà cung cấp: ${item.supplier}</p>
                  <h1 class="bought">Đã mua</h1>
              </a>
          </div>
          `;
          } else {
            return `
          <div class="grid__column-2-3">
              <a class="home-product-item">
                  <img src="${item.img}" alt="" class="home-product-item__img">
                  <h4 class="home-product-item__name">${item.name}</h4>
                  <p class="home-product-item__price">Giá:${item.price}</p>
                  <p class="home-product-item__supplier">Nhà cung cấp: ${item.supplier}</p>
                  <h1 class="bought">Đã liên hệ</h1>
              </a>
          </div>
          `;
          }
        }
      }
    }

    if (item.priceReal > 15000) {
      return `
    <div class="grid__column-2-3">
        <a class="home-product-item">
            <img src="${item.img}" alt="" class="home-product-item__img">
            <h4 class="home-product-item__name">${item.name}</h4>
            <p class="home-product-item__price">Giá:${item.price}</p>
            <p class="home-product-item__supplier">Nhà cung cấp: ${item.supplier}</p>
            <h1 onclick="buyProduct('${item.id}', '${item.supplier}', '${item.img}', '${item.name}', '${item.price}', '${item.priceReal}')">Liên hệ</h1>
        </a>
    </div>
    `;
    }

    return `
    <div class="grid__column-2-3">
        <a class="home-product-item">
            <img src="${item.img}" alt="" class="home-product-item__img">
            <h4 class="home-product-item__name">${item.name}</h4>
            <p class="home-product-item__price">Giá:${item.price}</p>
            <p class="home-product-item__supplier">Nhà cung cấp: ${item.supplier}</p>
            <h1 onclick="buyProduct('${item.id}', '${item.supplier}', '${item.img}', '${item.name}', '${item.price}', '${item.priceReal}')">Mua</h1>
        </a>
    </div>
    `;
  });

  productWrapper.innerHTML = htmls.join("");
  console.log(productWrapper);
}

function filterByPrice(val) {
  var listProduct = laptops.filter((value) => {
    if (val) {
      priceFilter = "1";
      if (value.priceReal >= 15000) {
        return value;
      }
    } else {
      priceFilter = "2";
      if (value.priceReal < 15000) {
        return value;
      }
    }
  });

  var checkEl = document.querySelector(".number-product");
  console.log(listProduct);
  if (checkEl) {
    checkEl.parentNode.removeChild(checkEl);
  }

  var el = document.createElement("h1");
  el.innerHTML = `Có ${listProduct.length} sản phẩm được tham gia mời thầu`;
  el.className = "number-product";

  var div = document.querySelector(".home-filter");
  div.parentNode.insertBefore(el, div.nextSibling);

  initProduct(listProduct);
}

function buyProduct(id, supplier, img, name, price, priceReal) {
  var checkDup = false;
  // alert(`Bạn đã chọn mua sản phẩm! Chờ sự đồng ý từ ${supplier}`);
  var colors = [];
  if (JSON.parse(localStorage.getItem("products"))) {
    colors = JSON.parse(localStorage.getItem("products"));
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

  localStorage.setItem("products", JSON.stringify(colors)); //store colors
  var storedColors = JSON.parse(localStorage.getItem("products")); //get them back
  console.log(storedColors);

  // location.reload();
  if (priceFilter == "1") {
    filterByPrice(true);
  }
  if (priceFilter == "2") {
    filterByPrice(false);
  }
  if (priceFilter == "0") {
    initProduct(laptops);
  }
}
