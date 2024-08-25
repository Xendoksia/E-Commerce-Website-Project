let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slideritem");
const totalSlides = slides.length;
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const dots = document.querySelectorAll(".dot");

showSlide(currentSlideIndex);

const slideInterval = setInterval(function () {
  nextSlide();
}, 4000);

prevButton.addEventListener("click", function () {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  }
  showSlide(currentSlideIndex);
  resetInterval();
});

nextButton.addEventListener("click", function () {
  nextSlide();
  resetInterval();
});

dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    resetInterval();
  });
});

function showSlide(index) {
  // Tüm slide'ları gizle
  slides.forEach(function (slide) {
    slide.style.display = "none";
  });

  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  slides[index].style.display = "block";
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(function () {
    nextSlide();
  }, 4000);
}
