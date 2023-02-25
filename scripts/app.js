const navBtn = document.querySelector(".nav__btn");
const mobileMenu = document.querySelector(".mobile-menu");

navOpen = false;
navBtn.addEventListener("click", () => {
  if (navOpen) {
    navBtn.classList.remove("nav__btn--open");
    navOpen = false;
    mobileMenu.classList.remove("mobile-menu--open");
  } else {
    navBtn.classList.add("nav__btn--open");
    navOpen = true;
    mobileMenu.classList.add("mobile-menu--open");
  }
});

const menuLink = document.querySelectorAll(".menu__link");
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener("click", () => {
    for (let j = 0; j < menuLink.length; j++) {
      menuLink[j].classList.remove("menu__link--active");
    }
    menuLink[i].classList.add("menu__link--active");
  });
}
const like = document.querySelectorAll(".place__like");
const likeIcon = document.querySelectorAll(".place__like-icon");
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", () => {
    like[i].firstElementChild.classList.toggle("place__like-icon--fill");
  });
}
