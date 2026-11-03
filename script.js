let menuIcon = document.querySelector("#menu-icon");
let navLinks = document.querySelector("#nav-list");

menuIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
