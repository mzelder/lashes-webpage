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

    // services and gallery carousels
    const carousels = document.querySelectorAll('.carousel-wrapper');

    carousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;
        let velocity = 0;
        let lastX;
        let lastTime;
        let animationFrame;
        let isScrolling = false;

        centerCarousel(carousel);

        const getPosX = (e) => {
            return e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        };

        const handleStart = (e) => {
            isDown = true;
            isScrolling = false;
            carousel.classList.add('dragging');
            startX = getPosX(e) - carousel.getBoundingClientRect().left;
            scrollLeft = carousel.scrollLeft;
            lastX = getPosX(e);
            lastTime = performance.now();
            velocity = 1;
            cancelAnimationFrame(animationFrame);
        };

        const handleMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            isScrolling = true;
            const x = getPosX(e) - carousel.getBoundingClientRect().left;
            const walk = (x - startX);
            carousel.scrollLeft = scrollLeft - walk;
            const now = performance.now();
            const timeDiff = now - lastTime;
            if (timeDiff > 0) {
                const currentX = getPosX(e);
                const distance = currentX - lastX;
                velocity = distance / timeDiff;
                lastX = currentX;
                lastTime = now;
            }
        };

        const handleEnd = () => {
            if (!isDown) return;
            isDown = false;
            carousel.classList.remove('dragging');
            applyMomentum();
        };

        carousel.addEventListener('mousedown', handleStart);
        carousel.addEventListener('mousemove', handleMove);
        carousel.addEventListener('mouseleave', handleEnd);
        carousel.addEventListener('mouseup', handleEnd);
        carousel.addEventListener('touchstart', handleStart);
        carousel.addEventListener('touchmove', handleMove);
        carousel.addEventListener('touchend', handleEnd);

        function applyMomentum() {
            if (!isScrolling || Math.abs(velocity) < 0.01) {
                velocity = 0;
                snapToCenter(carousel);
                return;
            }
            velocity *= 0.95;
            carousel.scrollLeft -= velocity * 4;
            if (Math.abs(velocity) > 0.01) {
                animationFrame = requestAnimationFrame(applyMomentum);
            } else {
                velocity = 0;
                snapToCenter(carousel);
            }
        }

        carousel.addEventListener('wheel', () => {
            cancelAnimationFrame(animationFrame);
            velocity = 0;
        });

        // Center carousel on resize
        window.addEventListener('resize', () => {
            if (!isDown && !isScrolling && velocity === 0) {
                centerCarousel(carousel);
            }
        });
    });

    function centerCarousel(carousel) {
        const containerWidth = carousel.offsetWidth;
        const contentWidth = carousel.scrollWidth;
        carousel.scrollLeft = (contentWidth - containerWidth) / 2;
    }

    function snapToCenter(carousel) {
        const containerWidth = carousel.offsetWidth;
        const contentWidth = carousel.scrollWidth;
        const scrollPosition = carousel.scrollLeft;
        const maxScroll = contentWidth - containerWidth;
        
        // If near center, snap to exact center
        if (Math.abs(scrollPosition - maxScroll/2) < containerWidth * 0.1) {
            carousel.scrollTo({
                left: maxScroll/2,
                behavior: 'smooth'
            });
        }
    }
});
