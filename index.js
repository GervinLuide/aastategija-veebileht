let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let indicators = document.getElementsByClassName("page-indicator");

    // Wrap around to the last slide if at the end
    if (n >= slides.length) {
        slideIndex = 0;
    }

    // Wrap around to the first slide if going back from the first slide
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Set active class to the corresponding page indicator
    for (i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("active");
    }
    indicators[slideIndex].classList.add("active");

    // Display the current slide
    slides[slideIndex].style.display = "block";
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        plusSlides(-1);
    } else if (event.key === "ArrowRight") {
        plusSlides(1);
    }
});

// Add event listeners for left and right arrows in the page-image
let pageImages = document.getElementsByClassName("page-image");
for (let i = 0; i < pageImages.length; i++) {
    pageImages[i].addEventListener("click", function (event) {
        const clickX = event.clientX - this.getBoundingClientRect().left;
        const middle = this.clientWidth / 2;

        if (clickX < middle) {
            plusSlides(-1); // Clicked on the left side of the image
        } else {
            plusSlides(1);  // Clicked on the right side of the image
        }
    });
}