// import in from fetch()
const storeData = {
  "item 1": {
      "price": 10,
      "sizeList": true,
      "size": {
          "s": 10,
          "m": 10,
          "l": 10,
          "xl": 10,
          "xxl": 10
      },
      "descriptionSmall": "test text",
      "descriptionLarge": "test text"
  },
  "item XXXXX": {
      "price": 90,
      "sizeList": false,
      "inventory": 0,
      "descriptionSmall": "test text",
      "descriptionLarge": "test text"
  },
  "item3": {
      "price": 30,
      "sizeList": false,
      "inventory": 99,
      "descriptionSmall": "test text",
      "descriptionLarge": "test text"
  },
  "item4": {
      "price": 40,
      "sizeList": true,
      "size": {
          "s": 10,
          "m": 0,
          "l": 0,
          "xl": 10,
          "xxl": 0
      },
      "descriptionSmall": "test text",
      "descriptionLarge": "test text"
  },
  "item5": {
      "price": 90,
      "sizeList": false,
      "inventory": 0,
      "descriptionSmall": "test text",
      "descriptionLarge": "test text"
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
const modalContainer = document.querySelector(".modal-container");
const cartBtn = document.querySelector(".cart-btn");
const exitBtn = document.querySelector(".exit-btn");
cartBtn.addEventListener('click', () => {
    modalContainer.classList.toggle("visable");
    document.body.classList.toggle("hide-scroll");
});
exitBtn.addEventListener('click', () => {
    modalContainer.classList.toggle("visable");
    document.body.classList.toggle("hide-scroll");
});

let keys = [];

const shopProductsContainer = document.querySelector(".shop-products-container");
for (i in storeData) {
    keys.push(i);
    let temp = document.createElement("div");
    temp.setAttribute("class", "item-container")
    temp.innerHTML = `<div class="item-container-image-container"><img src="./products/${i}/1.png" alt="shop item"></div><div class="item-container-title">${i}</div><div class="item-container-footer">$${storeData[i].price.toFixed(2)}</div>`;
    shopProductsContainer.appendChild(temp);
}

for (let i=0; i<keys.length; i++) {
    document.querySelectorAll(".item-container")[i].addEventListener("click", () => {
        window.location.href += `${keys[i]}`;
    });
}
