const toggleButton = document.querySelector('.toggle-button')
const navBarLinks = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', () =>{
    navBarLinks.classList.toggle('active')
})