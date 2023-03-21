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

// <<<<=====About us buttons====>>>>>>

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

// const setActiveImage = (targetImage) => {
//   currentImage = targetImage;
//   currentImageElement.setAttribute('src', targetImage);
// }

// setActiveImage(images[0]);

// leftBtnElement.addEventListener('click', () => {
//   let currentIndex = images.indexOf(currentImage);
//   if (currentIndex - 1 < 0) {
//     currentIndex = images.length - 1;
//   } else {
//     currentIndex--;
//   }
//   setActiveImage(images[currentIndex]);
// })

// rightBtnElement.addEventListener('click', () => {
//   let currentIndex = images.indexOf(currentImage);
//   if (currentIndex + 1 === images.length) {
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }
//   setActiveImage(images[currentIndex]);
// })


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
