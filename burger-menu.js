const openMenuBtn = document.querySelector('.menu-btn');
const clsModalBtn = document.querySelector('.close-menu-btn');
const mobMenu = document.querySelector('.mobile-menu');
const mobMenuContainer = document.querySelector('#mobMenuContainer');
const seeMore = document.querySelector('#see-more');
const moreMobile = document.querySelectorAll('.more-mobile');
const seeMoreArr = Array.from(moreMobile);
const menuItems = document.querySelectorAll('.menu-items');
const menuItemsArr = Array.from(menuItems);

// open modal reusable function
function openModal(element) {
  element.classList.add('display-flex');
  mobMenuContainer.classList.add('menu-on');
}
// close modal reusable function
function clsModal(element) {
  element.classList.remove('display-flex');
  mobMenuContainer.classList.remove('menu-on');
}

// add "display-block" to mobile menu to show modal
// on menu button click
openMenuBtn.addEventListener('click', () => {
  openModal(mobMenu);
});

// remove "display-block" from mobile menu to hide modal
// on "x" button click / back to "display none"
clsModalBtn.addEventListener('click', () => {
  clsModal(mobMenu);
});
// click outside of mobile menu -> back to "display none"
window.addEventListener('click', (event) => {
  if (event.target === mobMenuContainer || event.target === clsModalBtn) {
    clsModal(mobMenu);
  } else {
    for (let i = 0; i < menuItemsArr.length; i += 1) {
      if (event.target === menuItemsArr[i]) {
        clsModal(mobMenu);
      }
    }
  }
});

// add a white transparent background to nav bar MOBILE
window.onscroll = function mobNavTransparency() {
  if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
    openMenuBtn.classList.add('colored');
    openMenuBtn.classList.remove('transparent');
  } else {
    openMenuBtn.classList.add('transparent');
    openMenuBtn.classList.remove('colored');
  }
};

// show 4 more cards on MOBILE version of HOME page
seeMore.addEventListener('click', () => {
  seeMoreArr.forEach((child) => {
    child.classList.toggle('more-mobile');
  });
  if (seeMore.innerHTML === 'more <i class="fa-solid fa-angle-down"></i>') {
    seeMore.innerHTML = 'less <i class="fa-solid fa-angle-up"></i>';
  } else {
    seeMore.innerHTML = 'more <i class="fa-solid fa-angle-down"></i>';
  }
});
