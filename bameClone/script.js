document.addEventListener("DOMContentLoaded", function() {
  // Initialize the first Swiper
  const swiper1 = new Swiper('.swiper1', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      autoplay: {
          delay: 1000,
          disableOnInteraction: true,
      },
      pagination: {
          el: '.swiper-pagination',
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      scrollbar: {
          el: '.swiper-scrollbar',
      },
      on: {
          init: function() {
              console.log("Swiper initialized");
          },
      },
  });
  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    on: {
        init: function() {
            console.log("Swiper initialized");
        },
    },
});
const swiper3 = new Swiper('.swiper3', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
      delay: 1000,
      disableOnInteraction: true,
  },
  pagination: {
      el: '.swiper-pagination',
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  scrollbar: {
      el: '.swiper-scrollbar',
  },
  on: {
      init: function() {
          console.log("Swiper initialized");
      },
  },
});
const swiper4 = new Swiper('.swiper4', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
      delay: 1000,
      disableOnInteraction: true,
  },
  pagination: {
      el: '.swiper-pagination',
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  scrollbar: {
      el: '.swiper-scrollbar',
  },
  on: {
      init: function() {
          console.log("Swiper initialized");
      },
  },
});

  // Add event listeners for buttons
  document.getElementById('goToSlide1').addEventListener('click', function () {
      console.log('Go to Slide 1');
      swiper1.slideToLoop(0);
      swiper2.slideToLoop(0);
      swiper3.slideToLoop(0);
      swiper4.slideToLoop(0);
  });

  document.getElementById('goToSlide2').addEventListener('click', function () {
      console.log('Go to Slide 2');
      swiper1.slideToLoop(1);
      swiper2.slideToLoop(1);
      swiper3.slideToLoop(1);
      swiper4.slideToLoop(1);
  });

  // Initialize the second Swiper
  const swiper5 = new Swiper('.swiper5', {
      direction: 'horizontal',
      spaceBetween: 10,
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: true,
      },
      breakpoints: {
          600: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          991: {
              slidesPerView: 2,
              spaceBetween: 20
          },
          1280: {
              slidesPerView: 3,
              spaceBetween: 20
          }
      }
  });
});


  document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    let slideIndex = 0;
    let intervalId;
  
    function showSlides() {
      slideIndex++;
      if (slideIndex >= slider.children.length) {
        slideIndex = 0;
      }
      const slideWidth = slider.children[0].clientWidth;
      slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    }
  
    function startSlider() {
      intervalId = setInterval(showSlides, 3000);
    }
  
    function stopSlider() {
      clearInterval(intervalId);
    }
  
    startSlider(); // Start slider initially
  });
  
