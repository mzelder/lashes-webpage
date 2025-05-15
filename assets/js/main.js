document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileDropdown = document.getElementById("mobile-dropdown");
    
    const servicesBtn = document.getElementById("services-btn");
    const servicesDropdown = document.querySelector(".services-container");

    const mainContainer = document.querySelector("#main-container");
    const footer = document.querySelector("footer");

    menuBtn.addEventListener("click", () => {
        const isOpen = menuBtn.classList.toggle("menu-open");
        mobileDropdown.classList.toggle("show", isOpen);
        footer.classList.toggle("hide", isOpen);
        mainContainer.classList.toggle("hide", isOpen);
    });

    servicesBtn.addEventListener("click", (event) => {
        event.preventDefault();
        servicesDropdown.classList.toggle("menu-open");
    });

    // services carousel
    const carousel = document.getElementById('carousel-wrapper');

    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('dragging');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('dragging');
    });

    carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('dragging');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX);
        carousel.scrollLeft = scrollLeft - walk;
    });
});
