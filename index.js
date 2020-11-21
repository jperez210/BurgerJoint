const toggleButton=document.getElementsByClassName('toggle-button')[0]
const navLinks=document.getElementsByClassName('nav-links')[0]


toggleButton.addEventListener('click', () =>{
    navLinks.classList.toggle('active')
})


function reserve() {
    alert("The reserve feature is coming soon!");
}

document.getElementById('reserveMessage').onclick = reserve;