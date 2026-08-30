const header = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-exapnded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open");
});