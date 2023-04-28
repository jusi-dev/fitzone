import Glide from './glide.esm.js'

new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 4000,
    animationDuration: 600
}).mount()

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');
  // navLinks.style.display = "none";

  navLinks.style.transform = "translateY(-100vh)";
  
  burgerMenu.addEventListener('click', function() {
    console.log("test");
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.transform = "translateY(0vh)"
    } else {
        navLinks.style.transform = "translateY(-100vh)";
    }
  });

  

  