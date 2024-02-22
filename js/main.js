const swiper9 = new Swiper(".swiper8", {
  spaceBetween: 20,
  slidesPerView: 2.5,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2.5,
    },
    834: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    374: {
      slidesPerView: 1,
    },
  },
});

const filterMenuVis = document.querySelectorAll(".filter__menu-visible1");
const filterMenu2 = document.querySelectorAll(".filter__menu-list2");
const filterMenuArrow = document.querySelectorAll(".filter__menu-arrow1");
const filterMenuText = document.querySelectorAll(".filter__menu-text1");

const filterMenuVis2 = document.querySelectorAll(".filter__menu-visible2");
const filterMenu3 = document.querySelectorAll(".filter__menu-list3");

const filterMenuArrow2 = document.querySelectorAll(".filter__menu-arrow2");

const filterMenuVis3 = document.querySelectorAll(".filter__menu-visible3");
const filterMenu4 = document.querySelectorAll(".filter__menu-list4");
const filterMenuArrow3 = document.querySelectorAll(".filter__menu-arrow3");

for (let i = 0; i < filterMenuVis.length; i++) {
  filterMenuVis[i].addEventListener("click", () => {
    filterMenu2[i].classList.toggle("active");
    filterMenuArrow[i].classList.toggle("active");
    filterMenuText[i].classList.toggle("active");
  });
}
for (let i = 0; i < filterMenuVis2.length; i++) {
  filterMenuVis2[i].addEventListener("click", () => {
    filterMenu3[i].classList.toggle("active");
   
    filterMenuArrow2[i].classList.toggle("active");
  });
}
for (let i = 0; i < filterMenuVis2.length; i++) {
  filterMenuVis3[i].addEventListener("click", () => {
    filterMenu4[i].classList.toggle("active");

    filterMenuArrow3[i].classList.toggle("active");
  });
}

const burgerMenuOpen = document.querySelectorAll('.burger__menu-text');

const burgerMenuElem = document.querySelector('.burger__menu-v');
const burgerMenuArrow1 = document.querySelectorAll('.burger__menu-item--icon');


for(let i = 0; i< burgerMenuOpen.length; i++){
  burgerMenuOpen[2]?.addEventListener('click', ()=>{
    burgerMenuOpen[2].classList.toggle('active')
    burgerMenuElem.classList.toggle('active')
    burgerMenuArrow1[1].classList.toggle('active')
  })
}

const burgerMenuVis = document.querySelectorAll(".burger__menu-visible1");
const burgerMenu2 = document.querySelectorAll(".burger__menu-list2");
const burgerMenuArrow = document.querySelectorAll(".burger__menu-item--icon.add1");
const burgerMenuText = document.querySelectorAll(".burger__menu-text1");

const burgerMenuVis2 = document.querySelectorAll(".burger__menu-visible2");
const burgerMenu3 = document.querySelectorAll(".burger__menu-list3");

const burgerMenuArrow2 = document.querySelectorAll(".burger__menu-item--icon.add2");

const burgerMenuVis3 = document.querySelectorAll(".burger__menu-visible3");
const burgerMenu4 = document.querySelectorAll(".burger__menu-list4");
const burgerMenuArrow3 = document.querySelectorAll(".burger__menu-item--icon.add3");

for (let i = 0; i < burgerMenuVis.length; i++) {
  burgerMenuVis[i].addEventListener("click", () => {
    burgerMenu2[i].classList.toggle("active");
    burgerMenuArrow[i].classList.toggle("active");
    burgerMenuText[i].classList.toggle("active");
  });
}
for (let i = 0; i < burgerMenuVis2.length; i++) {
  burgerMenuVis2[i].addEventListener("click", () => {
    burgerMenu3[i].classList.toggle("active");
   
    burgerMenuArrow2[i].classList.toggle("active");
  });
}
// for (let i = 0; i < burgerMenuVis2.length; i++) {
//   burgerMenuVis3[i].addEventListener("click", () => {
//     burgerMenu4[i].classList.toggle("active");

//     burgerMenuArrow3[i].classList.toggle("active");
//   });
// }

const catalogMenu = document.querySelectorAll(".catalog__filter-item");
const catalogMenuList = document.querySelectorAll(".catalog__filter-list");

if (catalogMenu) {
  for (let i = 0; i < catalogMenu.length - 1; i++) {
    catalogMenu[i].addEventListener("click", () => {
      catalogMenuList[i].classList.toggle("active");
    });
  }
}

// const swiper = new Swiper('.mySwiper', {
document.addEventListener("DOMContentLoaded", function () {
  var mainSwiper = new Swiper(".main-swiper", {
    // Add your main swiper options here
    direction: "horizontal",
    loop: true,
  });

  // Initialize Controlled Swiper
  var controlledSwiper = new Swiper(".controlled-swiper", {
    // Add your controlled swiper options here
    direction: "horizontal",
    loop: true,
    controller: {
      control: mainSwiper, // Reference to the main swiper instance
    },
  });
});
var swiper7 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper8 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper7,
  },
});

/*/ 
console.log(swiper8.activeIndex)

document.querySelector('.header.header__fone').style.backgroundImg = url('../iamg')
/*/

const like = document.querySelectorAll('.news__like');
const dislike = document.querySelectorAll('.news__likeRed');

for(let i = 0; i < like.length; i++){

  like[i]?.addEventListener('click', ()=>{
    like[i].classList.add('disactive');
    dislike[i].classList.add('active')
  })
  dislike[i]?.addEventListener('click', ()=>{
    like[i].classList.remove('disactive');
    dislike[i].classList.remove('active')
  })
}


const swiper5 = new Swiper(".swiper5", {
  slidesPerView: 1,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 1500,
  },
  spaceBetween: 20,
});
const swiper = new Swiper(".swiper1", {
  autoplay: {
    delay: 1500,
  },
  spaceBetween: 20,

  breakpoints: {
    1024: {
      slidesPerView: 5.2,
    },
    834: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    374: {
      slidesPerView: 1.5,
    },
  },
});

const swiper1 = new Swiper(".swiper2", {
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swiper2 = new Swiper(".swiper3", {
  spaceBetween: 20,
  slidesPerView: 1.25,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper3 = new Swiper(".swiper4", {
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const burgerMenu = document.querySelectorAll(".mobile__menu-item");

if (burgerMenu) {
  burgerMenu[burgerMenu.length - 1]?.addEventListener("click", () => {
    document.querySelector(".burger__menu").classList.toggle("active");
  });
}

const closeBurgerMenu = document.querySelector(".burger__menu-close");

if (closeBurgerMenu) {
  closeBurgerMenu.addEventListener("click", () => {
    document.querySelector(".burger__menu").classList.remove("active");
  });
}

const drop = document.querySelectorAll(".s-form-nav__dropdown-item");
drop.forEach((el) => {
  el.addEventListener("click", (evt) => {
    evt.target.classList.toggle("active");
  });
});

const filterBurger = document.querySelector(".filter__icon.mobile");

if (filterBurger) {
  filterBurger.addEventListener("click", () => {
    document.querySelector(".filter__menu").classList.toggle("active");
  });
}

const gradeArrowL = document.querySelector(".grade__arrow.left");
const gradeArrowR = document.querySelector(".grade__arrow.right");

if (gradeArrowL) {
  gradeArrowR.addEventListener("click", () => {
    swiper9.slideNext();
  });
  gradeArrowL.addEventListener("click", () => {
    swiper9.slidePrev();
  });
}
// $(".hover").mouseleave(
//   function () {
//     $(this).removeClass("hover");
//   }
//   );

const searchInput = document.querySelector(".search__inp");

if(searchInput){

  searchInput.addEventListener("input", () => {
    if (searchInput.value.length > 0) {
      document.querySelector(".search__inp-list").classList.add("active");
    }
    console.log(searchInput.value);
  });
  searchInput.addEventListener("click", () => {
    if (searchInput.value.length > 0) {
      document.querySelector(".search__inp-list").classList.add("active");
    }
    console.log(searchInput.value);
  });
  searchInput.addEventListener("blur", () => {
    document.querySelector(".search__inp-list").classList.remove("active");
  });
}


var mainSwiper = new Swiper(".main-swiper", {
  // Add your main swiper options here
  // For example, direction: 'horizontal'
});

// Initialize Controlled Swiper
var controlledSwiper = new Swiper(".controlled-swiper", {
  // Add your controlled swiper options here
  // For example, direction: 'horizontal',
  // Also, set the controller option to link the swipers
  controller: {
    control: mainSwiper, // Reference to the main swiper instance
  },
});
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Main Swiper
  var mainSwiper = new Swiper(".main-swiper", {
    // Add your main swiper options here
    direction: "horizontal",
    loop: true, // Example option - you can customize it based on your needs
  });

  // Initialize Controlled Swiper
  var controlledSwiper = new Swiper(".controlled-swiper", {
    // Add your controlled swiper options here
    direction: "horizontal",
    loop: true, // Example option - you can customize it based on your needs
    controller: {
      control: mainSwiper, // Reference to the main swiper instance
    },
  });
});

document
  .querySelector(".consultation__btn")
  ?.addEventListener("click", function () {
    document.querySelector(".consultation__popup").classList.add("show-modal");
  });
document
  .querySelector(".consultation__close")
  ?.addEventListener("click", function () {
    document
      .querySelector(".consultation__popup")
      .classList.remove("show-modal");
  });
document.querySelector(".popup__")?.addEventListener("click", function () {
  document.querySelector(".consultation__popup1").classList.add("show-modal");
});
document
  .querySelector(".consultation__popup-btn")
  ?.addEventListener("click", function () {
    document
      .querySelector(".consultation__popup1 ")
      .classList.remove("show-modal");
  });
document
  .querySelector(".consultation__close1")
  ?.addEventListener("click", function () {
    document
      .querySelector(".consultation__popup1")
      .classList.remove("show-modal");
  });
document
  .querySelector(".subscribe__pop")
  ?.addEventListener("click", function () {
    document.querySelector(".consultation__popup2").classList.add("show-modal");
  });
document
  .querySelector(".consultation__close2")
  ?.addEventListener("click", function () {
    document
      .querySelector(".consultation__popup2")
      .classList.remove("show-modal");
  });
