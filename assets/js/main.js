document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileDropdown = document.getElementById("mobile-dropdown");

    menuBtn.addEventListener("click", () => {
        const isOpen = menuBtn.classList.toggle("menu-open");
        mobileDropdown.classList.toggle("show", isOpen);
    });
});
