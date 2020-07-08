// import in from fetch()
const storeData = {
  "item 1": {
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
  "item XXXXX": {
      "price": 90,
      "sizeList": false,
      "soldout": false
  },
  "item3": {
      "price": 30,
      "sizeList": false,
      "soldout": true
  },
  "item4": {
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
    temp.innerHTML = `<div class="item-container-image-container"><img src="./products/${i}/1.png" alt="shop item"></div><div class="item-container-title">${i}</div><div class="item-container-footer">$${storeData[i].price}</div>`;
    shopProductsContainer.appendChild(temp);
}

for (let i=0; i<keys.length; i++) {
    document.querySelectorAll(".item-container")[i].addEventListener("click", () => {
        window.location.href += `${keys[i]}`;
    });
}
