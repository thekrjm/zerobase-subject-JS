// do something!

const navigationElement = document.querySelector('nav')

function handleToggleIconClick() {
    const toggleIcon = document.querySelector('i.toggle')
    toggleIcon.addEventListener('click', (ev) => {
        navigationElement
        const isActive = navigationElement.classList.contains('active')
        toggleNav(!isActive)
    })
}

function toggleNav(isActive) {
    navigationElement
    localStorage.setItem('isNavOpen', isActive);
    if (isActive) {
        navigationElement.classList.add('active')
    } else {
        navigationElement.classList.remove('active')
    }
}

document.addEventListener('DOMContentLoaded', (ev) => {
    setTimeout(() => {
        document.body.classList.remove('preload')
    }, 1000)
    document.body.style.visibility = "visible"
    const isNavOpen = localStorage.getItem('isNavOpen');
    if (isNavOpen === 'true') {
        toggleNav(true)
    }
    handleToggleIconClick()
})
