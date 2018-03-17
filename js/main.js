$(document).ready(function(){
     $('.slider').slick({
       autoplay:true,
       autoplaySpeed:5000,
       pauseOnHover:true,
       prevArrow:$('.arrow-left'),
       nextArrow:$('.arrow-right')
     });

     $('.slider').on('afterChange', (event, slick, currentSlide) => {
       $('.slider-nav').children().removeClass('slider-nav_elem__active');
       $('.slider-nav').children().eq(currentSlide).addClass('slider-nav_elem__active');
     });
     
     $('.slider2').slick({
       autoplay:true,
       autoplaySpeed:5000,
       pauseOnHover:true,
       slidesToShow: 4,
       slidesToScroll: 4,
       prevArrow:$('.slider2_arrow-left'),
       nextArrow:$('.slider2_arrow-right')
     });
});
$('.slider-nav_elem1').click(() => $('.slider').slick('slickGoTo', 0));
$('.slider-nav_elem2').click(() => $('.slider').slick('slickGoTo', 1));
$('.slider-nav_elem3').click(() => $('.slider').slick('slickGoTo', 2));
$('.slider-nav_elem4').click(() => $('.slider').slick('slickGoTo', 3));
