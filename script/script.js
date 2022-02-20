/* ============================================ */
/*                      DOM                     */
/* ============================================ */
const toggle = document.querySelector(".head-toggle");
const head = document.querySelector(".head");

const smallImg = document.querySelectorAll(".small");
const clickSmallImg = document.querySelectorAll(".click-thumbnail img");

const bigImg = document.querySelector(".big");
const clickImg = document.querySelector(".image-click");
const clickClose = document.querySelector(".click-close .close");
const clickBig = document.querySelector(".click-big");

const pre = document.querySelector(".click-next");
const next = document.querySelector(".click-pre");

/* ============================================ */
/*                  // 1.TOOGLE                 */
/* ============================================ */
toggle.onclick = () => {
  head.classList.toggle("active");
  infoShop.classList.remove("active");
  infoUser.classList.remove("active");
};

/* ============================================ */
/*                // 2.CLICK-THUMBNAIL          */
/* ============================================ */
smallImg.forEach((image) => {
  image.addEventListener("click", (e) => {
    let srcImg = e.target.getAttribute("src");
    if (srcImg.includes("-thumbnail")) {
      srcImg = srcImg.replace("-thumbnail", "");
    }

    bigImg.setAttribute("src", srcImg);
  });
});

/* ============================================ */
/*               CLICK-BTN-MOBILE               */
/* ============================================ */

const preMobile = document.querySelector(".next");
const nextMobile = document.querySelector(".pre");

nextMobile.onclick = () => {
  let index = parseInt(bigImg.dataset.index);
  if (index < 4) {
    index++;
  } else {
    index = 1;
  }

  bigImg.src = `./images/image-product-${index}.jpg`;
  bigImg.dataset.index = `${index}`;
};

preMobile.onclick = () => {
  let index = parseInt(bigImg.dataset.index);
  if (index > 1) {
    index--;
  } else {
    index = 4;
  }

  bigImg.src = `./images/image-product-${index}.jpg`;
  bigImg.dataset.index = `${index}`;
};

/* ============================================ */
/*                  // 3.CLICK-BIG-IMG     */
/* ============================================ */

// click

bigImg.onclick = () => {
  infoShop.classList.remove("active");
  infoUser.classList.remove("active");
  clickImg.classList.add("active");
};
clickClose.onclick = () => {
  clickImg.classList.remove("active");
};

// thumbnail
clickSmallImg.forEach((image) => {
  image.addEventListener("click", (e) => {
    let srcImg = e.target.getAttribute("src");
    if (srcImg.includes("-thumbnail")) {
      srcImg = srcImg.replace("-thumbnail", "");
    }

    clickBig.setAttribute("src", srcImg);
  });
});

// click next, pre
next.onclick = () => {
  let index = parseInt(clickBig.dataset.index);
  if (index < 4) {
    index++;
  } else {
    index = 1;
  }

  clickBig.src = `./images/image-product-${index}.jpg`;
  clickBig.dataset.index = `${index}`;
};

pre.onclick = () => {
  let index = parseInt(clickBig.dataset.index);
  if (index > 1) {
    index--;
  } else {
    index = 4;
  }

  clickBig.src = `./images/image-product-${index}.jpg`;
  clickBig.dataset.index = `${index}`;
};

/* ============================================ */
/*               // 4.SHOP               */
/* ============================================ */

/* ---------------- PLUS-MINUS ---------------- */

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const value = document.querySelector(".value");

// plus
plus.onclick = () => {
  let value2 = parseInt(value.innerText);
  value2++;
  value.innerText = value2;
};

// minus
minus.onclick = () => {
  let value2 = parseInt(value.innerText);
  if (value2 > 0) {
    value2--;
  } else {
    value2 = 0;
  }

  value.innerText = value2;
};

/* ----------------- // CLICK-TOGGLE ----------------- */

const cartImg = document.querySelector(".cart-img");
const infoShop = document.querySelector(".info-shop");
const infoUser = document.querySelector(".info-user");
const infoAvatar = document.querySelector(".info-avatar");

cartImg.onclick = () => {
  infoShop.classList.toggle("active");
  infoUser.classList.remove("active");
};

infoAvatar.onclick = () => {
  infoUser.classList.toggle("active");
  infoShop.classList.remove("active");
};

window.onscroll = () => {
  infoShop.classList.remove("active");
  infoUser.classList.remove("active");
  head.classList.remove("active");
};

/* ------------------ // ADD ------------------ */

const addBtn = document.querySelector(".buy-add");
const cartValue = document.querySelector(".cart-value");
const order = document.querySelector(".order-wrapper");

const empty = document.querySelector(".empty-product");

const infoProduct = document.querySelector(".info-product");
const checkout = document.querySelector(".checkout");

// add
let ProductNumber = 0;

addBtn.addEventListener("click", AddProduct);

function AddProduct() {
  ProductNumber = parseInt(value.innerText);

  updateCart();
}

function updateCart() {
  showNumber();
  showProduct();
}

function showNumber() {
  if (ProductNumber > 0) {
    cartValue.innerHTML = ProductNumber;
    cartValue.classList.add("active");
  } else {
    cartValue.classList.remove("active");
  }
}

function showProduct() {
  let price = 125;

  if (ProductNumber > 0) {
    empty.classList.add("hidden");
    order.innerHTML = ` <div class="info-product">
                <img
                  class="order-img"
                  src="./images/image-product-1-thumbnail.jpg"
                  alt=""
                />

                <div class="order-detail">
                  <span class="detail-name">fall limited edtin sneakers</span>
                  <div class="detail-value">
                    <span>$${price}.00</span>
                    <span class="buy-value">${ProductNumber}</span>
                    <strong>$${(ProductNumber * price).toFixed(2)}</strong>
                  </div>
                </div>

                <div class="trash-btn">
                  <img src="./images/icon-delete.svg" alt="" />
                </div>
              </div>
              
              <!-- 2 -->
              <button class="checkout">Checkout</button>`;

    const deleteBtn = document.querySelector(".trash-btn");
    deleteBtn.addEventListener("click", deleteItem);
  } else {
    order.innerHTML = "";
    empty.classList.remove("hidden");
  }
}

// delete
function deleteItem() {
  ProductNumber--;

  updateCart();
}
