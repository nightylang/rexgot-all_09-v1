let slideIndex = 1;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

function changeSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

// Auto-play slideshow
let slideInterval = setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 2000);

// Pause on hover
const slideshow = document.querySelector('.slideshow-container');
slideshow.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

slideshow.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 2000);
});




// mini slide
let slideIndexe = 0;
showSlidese();

function showSlidese() {
    let i;
    let slidese = document.getElementsByClassName("mySlides");
    for (i = 0; i < slidese.length; i++) {
        slidese[i].style.display = "none";
    }
    slideIndexe++;
    if (slideIndexe > slidese.length) { slideIndexe = 1 }
    slidese[slideIndexe - 1].style.display = "block";
    setTimeout(showSlidese, 2000); // Change image every 2 seconds
}

// scrollBehavior: 
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size