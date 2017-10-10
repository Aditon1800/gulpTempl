$(document).ready(function(){

   $('a[data-target^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;

       $('html, body').animate( { scrollTop: destination }, 1000);

     return false;
   });

  // Кибер Ягодкин

  // (function(){

  //     if( $(window).width() > 768 ) {
  //       $(window).scroll(function() {
  //         $('.header__nav').removeClass('header__nav--open');
  //         $('.header__toggle').removeClass('header__toggle--open');
  //           $("section.author").each(function() {
  //               var imagePos = $(this).offset().top;

  //               var topOfWindow = $(window).scrollTop();
  //               if (imagePos < topOfWindow + 400 && $(window).width() > 799) {
  //                   $(this).addClass("animate");
  //               }
  //           });
  //       });
  //     }

  // }());

  // Открытие и закрытие меню (через гамбургер)
  (function() {
    var $btnOpen = $('.header__toggle'),
    // var $btnClose = $('.btn-nav_close');
         $menu = $('.header__nav');

    if ( $btnOpen ) {
        // Появление меню
        $btnOpen.on('click', function() {
            $(this).toggleClass('header__toggle--open');
            $menu.toggleClass('header__nav--open');
        });
    };
  }());

  // $('.my-flipster').flipster({
  //     style: 'flat',
  //     spacing: -0.25,
  //     loop: true,
  //     scrollwheel: false,
  //     buttons: true,
  //     nav: true
  // });

  $('.slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<span data-role="none" class="arrow-left animate" aria-label="Previous" tabindex="0" role="button"></span>',
    nextArrow: '<span data-role="none" class="arrow-right animate" aria-label="Next" tabindex="0" role="button"></span>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          }
        },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          }
        }
    ]
  });

  // $('.part-2 .slide-block').slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   prevArrow: '<span data-role="none" class="arrow-left animate" aria-label="Previous" tabindex="0" role="button"></span>',
  //   nextArrow: '<span data-role="none" class="arrow-right animate" aria-label="Next" tabindex="0" role="button"></span>',
  //   responsive: [
  //     {
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 4,
  //       }
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 3,
  //         }
  //       },
  //     {
  //       breakpoint: 680,
  //       settings: {
  //         slidesToShow: 2,
  //         }
  //       },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         }
  //       }
  //   ]
  // });

  // Табы для переключений преимуществ
  // (function() {

  //   var vacInfo = $('.adg-tabs__desc');
  //   var elemAdgTabs = $('.adg-tabs__item');

  //   elemAdgTabs.each(function() {

  //     $(this).on('click', function() {
        
  //       $(this).addClass('adg-tabs__item_active')
  //              .siblings()
  //              .removeClass('adg-tabs__item_active');

  //       var indexElem = $(this).data('index');

  //       vacInfo.eq(indexElem).addClass('adg-tabs__desc_active')
  //                            .siblings()
  //                            .removeClass('adg-tabs__desc_active');
  //     });
  //   });
  // }());

  // Модальные окна
  (function() {

    //- Main modal

    $('.js-getModal').each(function(index, elem) {
      var title = $(this).data('title'),
            dataAction = $(this).data('action');
      $(elem).on('click', function() {
        $('#overlay').fadeIn(400, 
          function(){ 
            $('.js-modal') 
              .css('display', 'block')
              .animate({opacity: 1}, 200);
        });
        $('.modal__form form').attr('action', dataAction);
        $('.modal__form .js-modalTitle').html(title);
        return false;
      });
    });


    //- Открытие модального окна "Бесплатный урок"
    $('.feedback .js-btn-form').click( function(event){
      event.preventDefault();
      $('#overlay').fadeIn(400, 
        function(){ 
          $('.modal-lesson') 
            .css('display', 'block')
            .animate({opacity: 1}, 400);
      });
    });

    //- Зaкрытие мoдaльнoгo oкнa
    $('#overlay').click( function(){

        $('.modal-lesson')
        .animate({opacity: 0}, 200,
          function(){ 
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
          }
        );

        $('.js-modal')
        .animate({opacity: 0}, 200,
          function(){ 
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
          }
        );
    });

    $('.m-student__close').click( function(){
        $('.modal-lesson')
        .animate({opacity: 0}, 200,
          function(){ 
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
          }
        );
    });

    $('.js-modal-close').click( function(){
        $('.js-modal')
        .animate({opacity: 0}, 200,
          function(){ 
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
          }
        );
    });

  }());

  // Scroll top
  (function() {
    $('.top_btn').click(function() {
      $('body, html').animate({
          scrollTop: 0
      }, 500);
    });

     $(window).scroll(function() {
      var top = $(this).scrollTop();
      var elem = $('.top_btn');

      if (top > 700)
          elem.css({
              "transform": "translate(-5px)",
              "opacity": ".8"
          });
      else
          elem.css({
              "transform": "translate(30px)",
              "opacity": "0"
          });
      });
  }());

  // Links animation

  $('.recommend__item').each(function(index, elem) {
      var elemChild = $(elem).find('a');
      $(elem).hover(function() {
        elemChild.css({
          transform: 'rotateY(-360deg)'
        });
      }, function() {
        elemChild.css({
          transform: 'rotateY(0deg)'
        });
      });
  });
});