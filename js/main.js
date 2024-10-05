const burgerButton = document.querySelector(".burger-button")
const closeButton = document.querySelector(".mobile-menu__close-button")
const mobileMenu = document.querySelector(".mobile-menu")
const scrollItems = document.querySelectorAll(".scroll-item")
let offset = 110;

burgerButton.addEventListener("click", () => {
    mobileMenu.classList.add("mobile-menu--open")
})

closeButton.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile-menu--open")
})

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - offset );
}

const displayScrollElement = (el) => {
    el.classList.add("scrolled")
}

const hideScrollElemet = (el) => {
    el.classList.remove("scrolled")
}

const handleScrollAnimation = () => {
    scrollItems.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el)
        }
        else {
            hideScrollElemet(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
})