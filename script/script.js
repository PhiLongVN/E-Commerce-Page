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
};

window.onscroll = () => {
  head.classList.remove("active");
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

cartImg.onclick = () => {
  infoShop.classList.toggle("active");
};

/* ------------------ // ADD ------------------ */

const addBtn = document.querySelector(".buy-add");
const cartValue = document.querySelector(".cart-value");
const buyValue = document.querySelector(".buy-value");
const order = document.querySelector(".order");

addBtn.addEventListener("click", handleAdd);

function handleAdd() {
  let value2 = value.innerText;

  if (value2 > 0) {
    // add number o ngoai
    cartValue.innerHTML = value2;
    cartValue.classList.add("active");

    // add ben trong
    order.innerHTML = `    <div class="info-product">
                <img
                  class="order-img"
                  src="./images/image-product-1-thumbnail.jpg"
                  alt=""
                />

                <div class="order-detail">
                  <span class="detail-name">fall limited edtin sneakers</span>
                  <div class="detail-value">
                    <span>$125.00 x </span>
                    <span class="buy-value">${value2}</span>
                    <strong>$${value2*125}.00</strong>
                  </div>
                </div>

                <div class="trash-btn">
                  <img src="./images/icon-delete.svg" alt="" />
                </div>
              </div>
              
              <!-- 2 -->
              <button class="checkout">Checkout</button>`;
  } else {
    order.innerHTML = `Your cart is empty`;
    cartValue.classList.remove("active");
  }
}

/* ------------------ DELETE ------------------ */
const trash = document.querySelector(".trash-btn");

trash.addEventListener("click", handleDelete);

function handleDelete() {
  console.log("trash", trash);
  let value2 = parseInt(buyValue.innerText);
  value2--;

  // if (value2 < 1) {
  //   order.innerHTML = `Your cart is empty`;
  // } else {
  //   order.innerHTML = `    <div class="info-product">
  //               <img
  //                 class="order-img"
  //                 src="./images/image-product-1-thumbnail.jpg"
  //                 alt=""
  //               />

  //               <div class="order-detail">
  //                 <span class="detail-name">fall limited edtin sneakers</span>
  //                 <div class="detail-value">
  //                   <span>$125.00 x </span>
  //                   <span class="buy-value">${value2}</span>
  //                   <strong>$375.00</strong>
  //                 </div>
  //               </div>

  //               <div class="trash-btn">
  //                 <img src="./images/icon-delete.svg" alt="" />
  //               </div>
  //             </div>

  //             <!-- 2 -->
  //             <button class="checkout">Checkout</button>`;
  // }
}
