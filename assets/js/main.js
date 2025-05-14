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
});
