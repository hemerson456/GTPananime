function hamburguesa(){
    let element = document.getElementById("deslizar");
    element.classList.toggle("header__nav-ul3");
}

document.addEventListener("DOMContentLoaded", function () {
    const rotacionImage = document.querySelector(".rotacion-image");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    function moveToIndex(index) {
        currentIndex = index;
        rotacionImage.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 7;
        moveToIndex(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + 7) % 7;
        moveToIndex(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    const interval = setInterval(nextSlide, 6000);//6000 es los milisegundos osea 6s equivale a 6000ms

    // Detener el intervalo al pasar el ratón sobre el carrusel
    rotacion.addEventListener("mouseenter", () => clearInterval(interval));

    // Reanudar el intervalo al retirar el ratón del carrusel
    rotacion.addEventListener("mouseleave", () => {
        clearInterval(interval);
        interval = setInterval(nextSlide, 6000);//6000 es los milisegundos osea 6s equivale a 6000ms
    });
});
