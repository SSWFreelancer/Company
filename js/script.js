$(document).ready(function (event) {
   $('.header__burger').click(function (event) {
     $('.header, .header__burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
   });
   $('.header__close').click(function (event) {
      $('.header, .header__burger, .menu').removeClass('active');
      $('body').removeClass('lock');
   }); 
   $('.menu__item').click(function (event) {
      $('.header, .header__burger, .menu').removeClass('active');
      $('body').removeClass('lock');
   }); 
   $('.type__slider').slick({
      arrows: true,
      dots: false,
      autoplay:true,
      infinite:true,
      swipe:true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1101,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 751,
          settings: {
            slidesToShow:1,
          }
        },        
      ] 

   });
   $('.type__partners').slick({
      arrows: true,
      dots: false,
      autoplay:true,
      infinite:true,
      swipe:true,
      slidesToShow: 7,
      responsive: [
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 4,
          }
        },

        {
          breakpoint: 638,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 468,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
          }
        },

      ] 

   });
   $('.works__slider').slick({
      arrows: true,
      dots: false,
      fade:true,
      autoplay:false,
      infinite:true,
      swipe:true,
      slidesToShow: 1,
   });
   $('.news__slider').slick({
      arrows: true,
      dots: false,
      autoplay:true,
      infinite:true,
      swipe:true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 895,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 611,
          settings: {
            slidesToShow:1,
          }
        },        
      ] 


   });
    $('.news-company__btn').click(function (event) {
      event.preventDefault();
      $(this).hide();
       $('.news__card').removeClass('hide');
   });
   $('.news-company__cards').slick({
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },
        {
          breakpoint: 1201,
          settings: {
            arrows: true,
            dots: false,
            autoplay:true,
            infinite:true,
            swipe:true,
            slidesToShow: 3,          
          }
        },
        {
          breakpoint: 895,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 611,
          settings: {
            slidesToShow:1,
          }
        }, 

      ]      
   });   

   
});    
(function (){
   $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
        if(scroll>10){
            $('.header').addClass('scroll');
        }else{
            $('.header').removeClass('scroll');
        }
    });      
})();  



