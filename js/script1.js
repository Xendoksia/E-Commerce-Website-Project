document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("nav-toggle-button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var nav = document.getElementById("NavB");
      var main = document.querySelector(".slider");
      var activeNavbutton = document.getElementById("navbtn");

      if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "flex";
        main.style.marginTop = "20px";
        activeNavbutton.classList.remove("font-large");
        activeNavbutton.classList.add("font-small");
        console.log(
          "Nav is now flex, margins set to 20px, font size set to 38px"
        );
      } else {
        nav.style.display = "none";
        main.style.marginTop = "120px";
        activeNavbutton.classList.remove("font-small");
        activeNavbutton.classList.add("font-large");
        console.log("Nav is now none, margins set to 0, font size set to 50px");
      }
    });

  // Clone and append the logos slide
  var original = document.querySelector(".logos-slide");
  if (original) {
    var copy = original.cloneNode(true);

    var container = document.createElement("div");
    container.classList.add("logos-container");
    original.parentNode.appendChild(container);
    container.appendChild(original);
    container.appendChild(copy);

    copy.style.animation = original.style.animation;
  }
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
