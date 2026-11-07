let menuIcon = document.querySelector("#menu-icon");
let navLinks = document.querySelector("#nav-list");

menuIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

let themeButtons = document.querySelectorAll(".theme");

themeButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      themeButtons.forEach(function (button) {
        button.innerText = "Dark Mode";
      });
    } else {
      themeButtons.forEach(function (button) {
        button.innerText = "Light Mode";
      });
    }
  });
});

