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
    supplier: "Acer",
  },
  {
    id: 3,
    name: "Laptop Gaming Lenovo Legion 5",
    img: "https://anphat.com.vn/media/product/40011_laptop_gaming_lenovo_legion_5_15ach6h_82ju00mmvn.jpg",
    price: "13.250$",
    priceReal: "13250",
    supplier: "Acer",
  },
  {
    id: 4,
    name: "Laptop Dell Mobile Precision 3561",
    img: "https://anphat.com.vn/media/product/250_39341_laptop_dell_mobile_precision_3561.jpg",
    price: "25.000$",
    priceReal: "25000",
    supplier: "Acer",
  },
  {
    id: 5,
    name: "Laptop Asus Vivobook A515EA",
    img: "https://anphat.com.vn/media/product/250_40030_laptop_asus_vivobook_a515ea_l12033w.jpg",
    price: "17.120$",
    priceReal: "17120",
    supplier: "Acer",
  },
  {
    id: 6,
    name: "Laptop MSI Modern 14",
    img: "https://anphat.com.vn/media/product/250_39939_39123_msi_modern_14_b5m_064vn_r5_5500u_a936c87e3177410d9bba59e4a3384e46_master.png",
    price: "10.250$",
    priceReal: "10250",
    supplier: "Acer",
  },
  {
    id: 7,
    name: "Laptop Gigabyte AERO 16",
    img: "https://anphat.com.vn/media/product/250_42061_laptop_gigabyte_aero_16_xe5_73vn938ah__10_.jpg",
    price: "18.900$",
    priceReal: "18900",
    supplier: "Acer",
  },
  {
    id: 8,
    name: "Laptop Gigabyte AERO 15 ",
    img: "https://anphat.com.vn/media/product/250_42062_laptop_gigabyte_aero_15_oled_kd_72s1623go__1_.jpg",
    price: "22.000$",
    priceReal: "22000",
    supplier: "Acer",
  },
];

initProduct(laptops); // render product

function initProduct(val) {
  const productWrapper = document.querySelector(".product-wrap");

  const htmls = val.map((item) => {
    return `
    <div class="grid__column-2-3">
        <a class="home-product-item">
            <img src="${item.img}" alt="" class="home-product-item__img">
            <h4 class="home-product-item__name">${item.name}</h4>
            <p class="home-product-item__price">Giá:${item.price}</p>
            <p class="home-product-item__supplier">Nhà cung cấp: ${item.supplier}</p>
            <h1 onclick="buyProduct('${item.id}', '${item.supplier}')">Mua</h1>
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
      if (value.priceReal >= 15000) {
        return value;
      }
    } else {
      if (value.priceReal < 15000) {
        return value;
      }
    }
  });

  initProduct(listProduct);
}

function buyProduct(id, supplier) {
  console.log(id, supplier);
  var checkDup = false;
  alert(`Bạn đã chọn mua sản phẩm! Chờ sự đồng ý từ ${supplier}`);
  var colors = [];
  if (JSON.parse(localStorage.getItem("my_colors"))) {
    colors = JSON.parse(localStorage.getItem("my_colors"));
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
    });
  }

  localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors
  var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back
  console.log(storedColors);
}
