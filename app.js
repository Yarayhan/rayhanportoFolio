function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const skillImages = document.querySelector(".skill-images");
    let currentIndex = 0;
    const totalItems = document.querySelectorAll(".skill-item").length;

    function updateSlider() {
        const offset = -currentIndex * 100;
        skillImages.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        updateSlider();
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    // Fungsi untuk swipe di perangkat mobile
    let touchStartX = 0;
    let touchEndX = 0;

    skillImages.addEventListener("touchstart", function (e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    skillImages.addEventListener("touchend", function (e) {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX > touchEndX + 50) {
            // Geser ke kanan (Next)
            nextButton.click();
        } else if (touchStartX < touchEndX - 50) {
            // Geser ke kiri (Prev)
            prevButton.click();
        }
    });
});






