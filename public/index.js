const storeData = {
  "item1": {
      "route": "/item1",
      "img": "./image",
      "product": "item1",
      "price": 10,
      "sizeList": true,
      "size": {
          "sm": true,
          "md": true,
          "lg": true,
          "xl": true,
          "xxl": true
      }
  },
  "item2": {
      "route": "/item2",
      "img": "./image",
      "product": "item2",
      "price": 90,
      "sizeList": false,
      "soldout": false
  },
  "item3": {
      "route": "/item3",
      "img": "./image",
      "product": "item3",
      "price": 30,
      "sizeList": false,
      "soldout": true
  },
  "item4": {
      "route": "/item4",
      "img": "./image",
      "product": "item4",
      "price": 40,
      "sizeList": true,
      "size": {
          "sm": true,
          "md": false,
          "lg": false,
          "xl": true,
          "xxl": false
      }
  },
  "item5": {
      "route": "/item5",
      "img": "./image",
      "product": "item5",
      "price": 90,
      "sizeList": false,
      "soldout": false
  }
};

// smooth scrolling
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

let test = document.querySelectorAll(".logo");
for (let i=0; i<test.length; i++) {
  test[i].addEventListener('click', () => {
    window.location.href = window.location.href;
  });
}

//cart-btn click
const cartContainer = document.querySelector(".cart-container");
const cartBtn = document.querySelector(".cart-btn");
const exitBtn = document.querySelector(".exit-btn");
cartBtn.addEventListener('click', () => {
    cartContainer.classList.toggle("visable");
});
exitBtn.addEventListener('click', () => {
    cartContainer.classList.toggle("visable");
});

let keys = [];

const shopProductsContainer = document.querySelector(".shop-products-container");
for (i in storeData) {
    keys.push(i);
    let temp = document.createElement("div");
    temp.setAttribute("item", `${i}`)
    temp.setAttribute("class", "item-container")
    temp.innerHTML = `<div class="item-container-image-container"><img src="${storeData[i].image}" alt="shop item"></div><div class="item-container-title">${storeData[i].product}</div><div class="item-container-footer">$${storeData[i].price}</div>`;
    shopProductsContainer.appendChild(temp);
}

for (let i=0; i<keys.length; i++) {
    document.querySelectorAll(".item-container")[i].addEventListener("click", () => {
        window.location.href += `${keys[i]}`;
    });
}
