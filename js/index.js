$(document).ready(function () {
  $('.fruits-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">&#60;</button>',
    nextArrow: '<button type="button" class="slick-next">&#62;</button>',
  });
});