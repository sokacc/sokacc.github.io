const readMoreBtn = document.querySelector(".product-icon-top");
const readMoreBtnBottom = document.querySelector(".product-icon-bottom");
const text = document.querySelector(".more-text-top");
const textBottom = document.querySelector(".more-text-bottom");
const dropDownIcon = document.querySelector(".dropdown-icon-first");
const dropDownIconBottom = document.querySelector(".dropdown-icon-second");

readMoreBtn.addEventListener("click", () => {
  text.classList.toggle("show-more-products");
  dropDownIcon.classList.toggle("rotate180");
});

readMoreBtnBottom.addEventListener("click", () => {
  textBottom.classList.toggle("show-more-products");
  dropDownIconBottom.classList.toggle("rotate180");
});
