const closeIcon = `<svg width="48" height="50" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7.06527L17.59 5.65527L12 11.2453L6.41 5.65527L5 7.06527L10.59 12.6553L5 18.2453L6.41 19.6553L12 14.0653L17.59 19.6553L19 18.2453L13.41 12.6553L19 7.06527Z" fill="black"/>
</svg>`
const hamburgerIcon = `<svg width="48px" height="50px" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18.6553C3.71667 18.6553 3.47934 18.5593 3.288 18.3673C3.09667 18.1753 3.00067 17.9379 3 17.6553C2.99934 17.3726 3.09534 17.1353 3.288 16.9433C3.48067 16.7513 3.718 16.6553 4 16.6553H20C20.2833 16.6553 20.521 16.7513 20.713 16.9433C20.905 17.1353 21.0007 17.3726 21 17.6553C20.9993 17.9379 20.9033 18.1756 20.712 18.3683C20.5207 18.5609 20.2833 18.6566 20 18.6553H4ZM4 13.6553C3.71667 13.6553 3.47934 13.5593 3.288 13.3673C3.09667 13.1753 3.00067 12.9379 3 12.6553C2.99934 12.3726 3.09534 12.1353 3.288 11.9433C3.48067 11.7513 3.718 11.6553 4 11.6553H20C20.2833 11.6553 20.521 11.7513 20.713 11.9433C20.905 12.1353 21.0007 12.3726 21 12.6553C20.9993 12.9379 20.9033 13.1756 20.712 13.3683C20.5207 13.5609 20.2833 13.6566 20 13.6553H4ZM4 8.65527C3.71667 8.65527 3.47934 8.55927 3.288 8.36727C3.09667 8.17527 3.00067 7.93794 3 7.65527C2.99934 7.37261 3.09534 7.13527 3.288 6.94327C3.48067 6.75127 3.718 6.65527 4 6.65527H20C20.2833 6.65527 20.521 6.75127 20.713 6.94327C20.905 7.13527 21.0007 7.37261 21 7.65527C20.9993 7.93794 20.9033 8.17561 20.712 8.36827C20.5207 8.56094 20.2833 8.65661 20 8.65527H4Z" fill="black"/>
</svg>`

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("hamburger");
    const menuDropdown = document.getElementById("mobile-dropdown");
    mobileMenuBtn.addEventListener("click", () => buttonPressed(mobileMenuBtn, menuDropdown));
});

function buttonPressed(button, contentToDisplay) {
    let isShown = contentToDisplay.hidden;
    console.log(isShown);
    console.log("hello");
    if (isShown) {
        contentToDisplay.hidden = false;
        button.innerHTML = closeIcon;
    } else { 
        contentToDisplay.hidden = true;
        button.innerHTML = hamburgerIcon;
    }
}