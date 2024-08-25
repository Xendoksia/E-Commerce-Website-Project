document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("nav-toggle-button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var nav = document.getElementById("NavB");
      var productsite = document.querySelector(".productmain-container");

      // Debugging statements
      console.log("Nav element:", nav);
      console.log("Product site element:", productsite);

      if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "flex";
        productsite.style.marginTop = "20px"; // Adjusted to a smaller margin
        console.log("Nav is now flex, margins set to 20px");
      } else {
        nav.style.display = "none";
        productsite.style.marginTop = "120px"; // Set to 0 to remove the blank space
        console.log("Nav is now none, margins set to 0");
      }
    });
});
