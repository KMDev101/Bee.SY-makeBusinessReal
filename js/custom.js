// script.js

// CountDown
$(document).ready(function () {

  $('.count').counterUp({
    delay: 10,
    time: 2000
  });



  // hero Slider
  $(".hero-container").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      998: {
        items: 1
      }
    }
  });
  // review Slider
  $(".review-container").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      998: {
        items: 3
      }
    }
  });
  /*====================================
      SlickNav
    ======================================*/
  $('.navbar-nav').slicknav({
    label: '',
    duration: 1000,
    easingOpen: "easeOutBounce" //available with jQuery UI
  });


});