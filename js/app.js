const hamburger = document.querySelector(".hamburger");
const navUL = document.querySelector(".nav-list2");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
