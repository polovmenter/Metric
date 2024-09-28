const burgerButton = document.querySelector(".burger-button")
const closeButton = document.querySelector(".mobile-menu__close-button")
const mobileMenu = document.querySelector(".mobile-menu")

burgerButton.addEventListener("click", () => {
    mobileMenu.classList.add("mobile-menu--open")
})

closeButton.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile-menu--open")
})