document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileDropdown = document.getElementById("mobile-dropdown");
    
    const servicesBtn = document.getElementById("services-btn");
    const servicesDropdown = document.querySelector(".services-container");

    menuBtn.addEventListener("click", () => {
        const isOpen = menuBtn.classList.toggle("menu-open");
        mobileDropdown.classList.toggle("show", isOpen);
    });

    servicesBtn.addEventListener("click", (event) => {
        event.preventDefault();
        servicesDropdown.classList.toggle("menu-open");
    });
});
