
console.log("Your index.js file is loaded correctly!");
// Show active menu when scrolling
const menu = document.querySelector('#desktop-menu');
const menuLinks = document.querySelector('.nav__menu');

// Display  Menu
const desktopMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  
  menu.addEventListener('click', desktopMenu);
  
  // Show active menu when scrolling
  const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const aboutMenu = document.querySelector('#about-page');
    const projectsMenu = document.querySelector('#projects-page');
    const resumeMenu = document.querySelector('#resume-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
  }
  
  