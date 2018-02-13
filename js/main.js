$('.slider').on('afterChange', (event, slick, currentSlide) => {
  console.log(currentSlide);
})
$('.slider-nav').children()[currentSlide].addClass('slider-nav_elem__active');
