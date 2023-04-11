feather.replace();
// scroll to about us using down button 
const aboutUsSection = document.querySelector('.about-us');
const downBtn = document.getElementById('down-btn');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

// adding a click event listener to my function
downBtn.addEventListener('click', scrollToAboutUs);
//my function
function scrollToAboutUs() {
  aboutUsSection.scrollIntoView(true);
}

// <<<<=====SLIDE SHOW====>>>>>>

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//////////////////// HAMBURGER MENU ///////////////
const menuToggle = document.querySelector('.ham-btn');
const siteNav = document.querySelector('.primary-navigation');
const navigationLinks = document.querySelectorAll('.nav-link');

// event listener on ham button that toggles menu
menuToggle.addEventListener('click', () => {
  isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMenu() : openMenu();
})

// closing menu once a link has been clicked 
navigationLinks.forEach(link => link.addEventListener('click', closeMenu));

function openMenu() {
  menuToggle.setAttribute('aria-expanded', 'true');
  siteNav.setAttribute('data-state', 'opened');
}

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  siteNav.setAttribute('data-state', 'closed');
}

// detecting scroll so that menu is closed 
userHasScrolled = false
window.onscroll = () => {
  userHasScrolled = true;
  if (userHasScrolled) {
    closeMenu();
  }
}

//on click load animations
const postButton = document.querySelector('.post-link-1');

postButton.addEventListener('click', function slideIntoView() {
  postButton.classList.add('button');
  console.log('clicked!');
})