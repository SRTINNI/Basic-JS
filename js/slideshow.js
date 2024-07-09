// Basic Slideshow

document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
    var totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(function(slide) {
            slide.style.display = "none";
        });
        slides[index].style.display = "block";
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Event listeners for next and previous buttons
    document.getElementById("nextButton").addEventListener("click", nextSlide);
    document.getElementById("prevButton").addEventListener("click", prevSlide);
});
