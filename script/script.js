/* ============================================ */
/*                      DOM                     */
/* ============================================ */
const toggle = document.querySelector(".head-toggle");
const head = document.querySelector(".head");

const smallImg = document.querySelectorAll(".small");
const bigImg = document.querySelector(".big");

/* ============================================ */
/*                  // 1.TOOGLE                 */
/* ============================================ */
toggle.onclick = () => {
  head.classList.toggle("active");
};

/* ============================================ */
/*                // 2.CLICK-IMG-SMALL               */
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
/*                  // 3.CLICK-BIG-IMG                    */
/* ============================================ */
// 4.add product
// 5.local storage
