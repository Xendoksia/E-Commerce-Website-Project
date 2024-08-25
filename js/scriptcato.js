document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("nav-toggle-button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var nav = document.getElementById("NavB");

      if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "flex";
        console.log("Nav is now flex, margins set to 20px");
      } else {
        nav.style.display = "none";
        console.log("Nav is now none, margins set to 0");
      }
    });
});
x;
console.log("scriptcato.js loaded");
