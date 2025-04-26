// NAVBAR

const toggleButton = document.querySelector('.toggle-button')
const navBarLinks = document.querySelector('.navbar-links')

toggleButton.addEventListener('click', () =>{
    navBarLinks.classList.toggle('active')
})


// Year
const year = document.getElementById('year')

const newYear = new Date();
let yearForSpan = newYear.getFullYear()
year.innerHTML = yearForSpan


// scroll animations
window.addEventListener('scroll', () =>{
    const scrolled = window.scrollY
    const picture = document.getElementById('picture')
    const about = document.getElementById('about')

    if (scrolled > 200){
        picture.classList.add('slideRight')
        about.classList.add('slideLeft')
    }
    else{
        picture.classList.remove('slideRight')
        about.classList.remove('slideLeft')
    }
})

// TYPING ANIMATION

let text = "Front-end focused, Back-end curious, Always building, Always Learning."
const speed = 40
let index = 0
const type = document.getElementById('typed')

function typeWriter(){
    if (index < text.length){
        typed.innerHTML += text.charAt(index)
        index++
        setTimeout(typeWriter, speed)
    }
}
window.onload = typeWriter;