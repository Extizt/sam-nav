const navButton = document.querySelector('.navButton')
const navLines = document.querySelectorAll('.navLine')
const sliders = document.querySelectorAll('.slide-in')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelectorAll('.nav-links')
const body = document.documentElement
let showMenu = false

navButton.addEventListener('click', toggleMenu)
navButton.addEventListener('mouseenter', toggleHover)
navButton.addEventListener('mouseleave', toggleHover)
body.addEventListener('wheel', toggleNavbar)


function toggleMenu() {
    if (!showMenu) {
        navButton.classList.toggle('close')
        for (let link of navLinks) {
            link.setAttribute('style', 'visibility: visible')
        }
        showMenu = true;
        setTimeout(() => {
            for (let line of navLines) {
                line.classList.toggle('close')
                line.classList.add('invert')
                for (let link of navLinks) {
                    link.classList.toggle('showLinks')
                }
            }
        }, 350)
        // navButton.setAttribute('style', 'margin-right: 15px')
        body.setAttribute('style', 'overflow-y: hidden')
    } else {
        navButton.classList.toggle('close')
        for (let link of navLinks) {
            link.setAttribute('style', 'visibility: visible')
            link.classList.toggle('showLinks')
        }
        showMenu = false;
        for (let line of navLines) {
            line.classList.toggle('close')
            line.classList.remove('invert')
        }
        body.setAttribute('style', 'overflow-y: scroll')
    }
    navButton.classList.toggle('invert')
    for (let slider of sliders) {
        slider.classList.toggle('show')
    }
    navButton.classList.toggle('small-screen')
}

function toggleHover() {
    for (let line of navLines) {
        line.classList.toggle('over')
    }
}

function toggleNavbar() {
    if (body.scrollTop > 1) {
        navButton.classList.add('scrolled')
        navbar.style.opacity = 0
        setTimeout(() => {
            navbar.style.visibility = 'hidden'
        }, 500)
    } else {
        navButton.classList.remove('scrolled')
        navbar.style.visibility = 'visible'
        navbar.style.opacity = 1
    }
}