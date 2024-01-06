var myswiper = new Swiper(".myswiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var places = new Swiper(".places", {
  slidesPerView: "auto",
  spaceBetween: 16,
  brakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});