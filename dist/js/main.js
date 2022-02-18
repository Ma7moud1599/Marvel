$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  $(".color-mode").click(function () {
    $("body").toggleClass("dark-mode");
  });
});

let options = {
  strings: ["UI Specialist", "Marvel Sann", "Web Designer"],
  typeSpeed: 80,
  fadeOut: true,
  loop: true,
  showCursor: false,
};

let typed = new Typed(".element", options);

let myElement = document.getElementById("navbar");

let headroom = new Headroom(myElement);

headroom.init();
