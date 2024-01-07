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

function handleMenu() {
  return {
    open_menu: false,
    go_next: false,
    slider_tab: false,
    tooltip: false,
    step: 100,
    handleOpen() {
      this.go_next = true;
      setTimeout(() => {
        this.open_menu = true;
      }, 1000);
    },
    handleClose() {
      this.tooltip = true
      document.querySelector('.progressbar').style.width = `${this.step}%`
      let progress = setInterval(() => {
        this.step -= 1
        document.querySelector('.progressbar').style.width = `${this.step}%`
        if (this.step == 0) {
          this.tooltip = false
          this.open_menu = false
          this.go_next = false
          this.step = 100
          clearInterval(progress)
        }
      }, 20);
    },
    cancelMenu() {
      this.open_menu = false
      this.go_next = false
    },
    ground() {
      this.slider_tab = true;
    },
    air() {
      this.slider_tab = false;
    },
  }
}