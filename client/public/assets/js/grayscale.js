(function ($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  // $('.js-scroll-trigger').click(function() {
  //   $('html, body').animate({ scrollTop: 0 }, 1000);
  // });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100,
  });

  // Collapse Navbar
  $(document).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  });

  
})(jQuery); // End of use strict
