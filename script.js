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
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const picture = document.getElementById('picture');
    const about = document.getElementById('about');
    const projects = document.querySelectorAll('.project-card');

    // Picture & About
    if (scrolled > 200){
        picture.classList.add('slideRight');
        about.classList.add('slideLeft');
    } else {
        picture.classList.remove('slideRight');
        about.classList.remove('slideLeft');
    }

    // Projects
    if (scrolled > 500) {
        projects.forEach((project, index) => {
            setTimeout(() => project.classList.add('slideUp'), index * 100);
        });
    } else {
        projects.forEach(project => project.classList.remove('slideUp'));
    }
});


// TYPING ANIMATION

let text = "Turning Ideas into Interactive Web Experiences. Always Building. Always Learning."
const speed = 40
let index = 0
const type = document.getElementById('typed')

function typeWriter(){
    if (index < text.length){
        type.innerHTML += text.charAt(index)
        index++
        setTimeout(typeWriter, speed)
    }
}
window.onload = typeWriter;


