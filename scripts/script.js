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
  const children = burgerMenu.querySelectorAll('.bar');
  const navItems = document.querySelector('.nav-items');
  const navChildren = navItems.querySelectorAll('li');
  // navLinks.style.display = "none";

  navLinks.style.transform = "translateY(-100vh)";
  
  burgerMenu.addEventListener('click', function() {
    console.log("test");
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.transform = "translateY(0vh)"
        children.forEach(child => {
            child.classList.add('bg-zinc-700');
        });
    } else {
        navLinks.style.transform = "translateY(-100vh)";
        children.forEach(child => {
            child.classList.remove('bg-zinc-700');
        });
    }
  });


  navChildren.forEach(child => {
    child.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navLinks.style.transform = "translateY(-100vh)";
        children.forEach(child => {
            child.classList.remove('bg-zinc-700');
        });
    })
  })

  

  