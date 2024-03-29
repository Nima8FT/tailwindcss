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

function handleMobile() {
  return {
    open_menu: false,
    menu_tab: 0,
    submenu_tab: 0,
    handleOpenMenu() {
      this.open_menu = true;
      document.body.classList.add('scroll_fixed');
    },
    handleCloseMenu() {
      this.open_menu = false;
      document.body.classList.remove('scroll_fixed');
    }
  }
}

function handleDirection() {
  return {
    makeRtl() {
      document.querySelector('.handle-direction').classList.add('rtl');
      document.documentElement.dir = 'rtl';
      localStorage.setItem('dir', 'rtl');
    },
    makeLtr() {
      document.querySelector('.handle-direction').classList.remove('rtl');
      document.documentElement.dir = 'ltr';
      localStorage.setItem('dir', 'ltr');
    }
  }
}

function darkMode() {
  return {
    makeDark() {
      localStorage.setItem('theme', 'dark');
      document.querySelector('.handle-darkmode').classList.add('darkmode');
      document.documentElement.classList.add('dark');
    },
    makeLight() {
      localStorage.setItem('theme', 'light');
      document.querySelector('.handle-darkmode').classList.remove('darkmode');
      document.documentElement.classList.remove('dark');
    }
  }
}

window.onload = () => {
  document.documentElement.dir = localStorage.getItem('dir');
  if (localStorage.getItem('dir') == 'rtl') {
    document.querySelector('.handle-direction').classList.add('rtl');
  }
  if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('.handle-darkmode').classList.add('darkmode');
    document.documentElement.classList.add('dark');
  }
}