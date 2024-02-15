// Get DOM Elements
const menuToggle = document.querySelector('.menu-toggle')
const menuToggleIcon = document.querySelector('.menu-toggle i')
const dropDownMenu = document.querySelector('.dropdown-menu')

// Operations of DOM Elements
menuToggle.onclick = function () {
    // Toggles (add / removes class of 'open' to dropdown menu)
    dropDownMenu.classList.toggle('open')

    // Toggles Dropdown Menu Symbol from menu / X mark
    const isOpen = dropDownMenu.classList.contains('open')
    menuToggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}