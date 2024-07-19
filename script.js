// carousel 

const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n = n - 1;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e) => {
    if (n == imgs.length - 1) {
        n = 0;
    } else {
        n = n + 1;
    }
    changeSlide();
})



for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none';
    setTimeout(() => {
        imgs[n].style.display = 'block';
    }, 1000);
}


// product-card-slider & product-cards-with-deals

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}



document
    .getElementById("toggleButton")
    .addEventListener("click", function () {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("show"); // Toggle the 'show' class
    });

document
    .getElementById("closeButton")
    .addEventListener("click", function () {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("show"); // Remove the 'show' class to hide the sidebar
    });
