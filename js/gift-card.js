let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(n) {
    slideIndex = (n + slides.length) % slides.length;
    slides.forEach(slide => slide.style.display = 'none');
    indicators.forEach(indicator => indicator.classList.remove('active'));
    slides[slideIndex].style.display = 'block';
    indicators[slideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function changeSlide(n) {
    showSlide(n);
}

setInterval(nextSlide, 4000); // Auto slide every 3 seconds
showSlide(slideIndex);






const cardsWrapper = document.querySelector(".cards-wrapper");
let currentIndex = 0;

function scrollLeftFunction() {
    currentIndex -= 8;
    if (currentIndex < 0) currentIndex = 0;
    cardsWrapper.style.transform = `translateX(-${currentIndex * (100 / 8)
        }%)`;
}

function scrollRight() {
    currentIndex += 8;
    if (currentIndex >= cardsWrapper.children.length)
        currentIndex = cardsWrapper.children.length - 1;
    cardsWrapper.style.transform = `translateX(-${currentIndex * (100 / 8)
        }%)`;
}