$(document).ready(function(){
    //$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
    // $('meta[http-equiv=refresh]').remove();
     $('.slider').slick({
       autoplay:true,
       autoplaySpeed:5000,
       pauseOnHover:true,
       prevArrow:$('.arrow-left'),
       nextArrow:$('.arrow-right'),
       initialSlide:2
     });

     $('.slider').on('afterChange', (event, slick, currentSlide) => {
       $('.slider-nav').children().removeClass('slider-nav_elem__active');
       $('.slider-nav').children().eq(currentSlide).addClass('slider-nav_elem__active');
     });
     console.log(window.innerWidth);
     const sliderInit = (nameClass,slidesToShow) => {
         $(nameClass).slick({
           autoplay:true,
           autoplaySpeed:5000,
           pauseOnHover:true,
           slidesToShow: slidesToShow,
           slidesToScroll: slidesToShow,
           prevArrow:$('.slider2_arrow-left'),
           nextArrow:$('.slider2_arrow-right')
         });
     };
    /*
        if(window.innerWidth < 400) {
            sliderInit('.slider2', 1);
        }else if(window.innerWidth < 700) {
            sliderInit('.slider2', 2);
        }else if(window.innerWidth < 1100){
            sliderInit('.slider2', 3);
        }else {
            sliderInit('.slider2', 4);
        }
     */
});
$('.slider-nav_elem1').click(() => $('.slider').slick('slickGoTo', 0));
$('.slider-nav_elem2').click(() => $('.slider').slick('slickGoTo', 1));
$('.slider-nav_elem3').click(() => $('.slider').slick('slickGoTo', 2));
$('.slider-nav_elem4').click(() => $('.slider').slick('slickGoTo', 3));
