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

// array of images that I want to go through
const images = [
  "images/img_avatar.png",
  "images/img_avatar2.png"
]

let currentImage = null;

const currentImageElement = document.getElementById('active-image');
const leftBtnElement = document.getElementById('left-btn');
const rightBtnElement = document.getElementById('right-btn');

const setActiveImage = (targetImage) => {
  currentImage = targetImage;
  currentImageElement.setAttribute('src', targetImage);
}

setActiveImage(images[0]);

leftBtnElement.addEventListener('click', () => {
  let currentIndex = images.indexOf(currentImage);
  if (currentIndex - 1 < 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  setActiveImage(images[currentIndex]);
})

rightBtnElement.addEventListener('click', () => {
  let currentIndex = images.indexOf(currentImage);
  if (currentIndex + 1 === images.length) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  setActiveImage(images[currentIndex]);
})

// Hamberger button

const menuToggle = document.querySelector('.ham-btn');
const siteNav = document.querySelector('.primary-navigation');

menuToggle.addEventListener('click', () => {
  isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMenu() : openMenu();
})

function openMenu() {
  menuToggle.setAttribute('aria-expanded', 'true');
  siteNav.setAttribute('data-state', 'opened');
}

function openMenu() {
  menuToggle.setAttribute('aria-expanded', 'flase');
  siteNav.setAttribute('data-state', 'closing');

  menuToggle.addEventListener('click', () => {
    siteNav.setAttribute('data-state', 'closed');
  })
}