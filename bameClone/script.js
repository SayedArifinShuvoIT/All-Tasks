document.addEventListener("DOMContentLoaded", function() {
    let swiper; // Declare swiper variable

    // Initialize Swiper
    swiper = new Swiper('.swiper', {
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
                // Call updateActiveButton after swiper is initialized
                updateActiveButton();
            },
            slideChange: function() {
                updateActiveButton();
            },
        },
    });

    var slideButtons = document.querySelectorAll('.custom-slide-button');
    slideButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var slideIndex = parseInt(button.getAttribute('data-slide-index'));
            swiper.slideTo(slideIndex); // Navigate to corresponding slide
        });
    });

    function updateActiveButton() {
        // Ensure swiper is defined before accessing its properties
        if (swiper && swiper.realIndex !== undefined) {
            var activeIndex = swiper.realIndex; // Use realIndex instead of activeIndex
            slideButtons.forEach(function(button, index) {
                if (index === activeIndex) {
                    button.classList.add('slider_active');
                } else {
                    button.classList.remove('slider_active');
                }
            });
        }
    }
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
  