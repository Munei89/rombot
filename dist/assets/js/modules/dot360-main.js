$(document).ready(function () {



  //
  // if (location.protocol != 'https:')
  //   {
  //    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  //   }
  // Sticky nav


  var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isSignUpFormValid = true;

  if ($(window).width() < 960) {
    // alert('Less than 960');
    // $('nav').addClass('sticky-scroll');
    // $('nav').addClass('background-light-grey');
    $(window).scroll(function () {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {

        // $('nav').addClass('sticky-scroll');
        $('nav').addClass('background-light-grey');
        $('[data-main-logo]').removeClass('icon--logo-light').addClass('icon--logo-color');
        // $('.candidate-scroll').addClass('fixed-div');
      } else {
        // $('nav').removeClass('sticky-scroll');
        $('nav').removeClass('background-light-grey');
        $('[data-main-logo]').removeClass('icon--logo-color').addClass('icon--logo-light');
        // $('.candidate-scroll').removeClass('fixed-div');

        // $('nav').addClass('navbar-fixed-top');
      }//if-else
    });//win func.

  }
  else {
    $(window).scroll(function () {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {

        // $('.menu-links').addClass('nav-links');
        $('nav').addClass('sticky-scroll');
        $('.candidate-scroll').addClass('fixed-div');

        $('[data-main-logo]').removeClass('icon--logo-light').addClass('icon--logo-color');
        $('[data-main-logo]').removeClass('icon--logo-lg').addClass('icon--logo-md');

      } else {
        // $('.menu-links').removeClass('nav-links');
        $('nav').removeClass('sticky-scroll');
        $('[data-main-logo]').removeClass('icon--logo-md').addClass('icon--logo-lg');
        $('[data-main-logo]').removeClass('icon--logo-color').addClass('icon--logo-light');
        $('.candidate-scroll').removeClass('fixed-div');


        // $('nav').addClass('navbar-fixed-top');
      }//if-else
    });//win func.
  }
  // Login and register
  $("[data-login]").click(function () {
    $(".overlay").addClass('overlay-open');
    $(".login").fadeIn();

  });
  $("[data-register]").click(function () {
    $(".overlay").addClass('overlay-open');
    $("[data-sign-up]").fadeIn();
  });
  $("[data-next]").click(function () {
    $(".overlay").addClass('overlay-open');
    $("[data--final-sign-up]").fadeIn();
  });

  $(".overlay-close").click(function () {
    $(".overlay").removeClass('overlay-open');
    $("[data--final-sign-up]").fadeOut();
    $("[data-sign-up]").fadeOut();
  });
  $("[data-original-index]").on("click", function () {
    var accountTarget = $(this).text();
    console.log(accountTarget);
    console.log('clicked');
    $("[data-'" + accountTarget + "']").toggleClass('hidden');
  });

  $('select').on('change', function (e) {
    var accountTarget = this.value;
    console.log(accountTarget);
    $(this).addClass('text-black');
    $("[data-Individual]").addClass('hidden');
    $("[data-Company]").addClass('hidden');
    $("[data-" + accountTarget + "]").toggleClass('hidden');
    // console.log(this.value,
    //             this.options[this.selectedIndex].value,
    //             $(this).find("option:selected").val());
  });


  $('.trust-us-slick').slick({
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
    
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

  $('.detail-page-slick').slick({
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
    
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });
  

  $('.dasboard-mobile-slick').slick({
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
          autoplay: false,
          arrows: false,

    
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          dots: false ,   
          autoplay: false,
          arrows: false,

        }
      }
    ]
  });
  $('.analytics-costs').slick({
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false,
          autoplay: true,
          arrows: false,
          infinite: true,
    
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          dots: false ,   
          autoplay: true,
          arrows: false,
          infinite: true,
        }
      }
    ]
  });

  

  $('.analytics-mobile-slick').slick({
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:true,
          arrows: true,
    
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        }
      }
    ]
  });

  $('.menu-slick').slick({
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots:false,
          arrows: false,
    
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
    ]
  });

  // payment-methods-images
  $('.payment-methods-slick').slick({
    infinite: true,
    centerMode: true,
    // centerPadding: '60px',
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          centerMode: true,
          centerPadding: '40px',
    
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // payment-methods-images
  $(".home-carousel").swipe({

    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');

    },
    allowPageScroll: "vertical"

  });
  $(".landing-btns div").hover(function () {
    var goto = Number($(this).attr('data-slide-to'));
    $("#carousel-landing-page").carousel(goto);
  });
  // $("div").slice(0, 10).show(); // select the first ten
  $("[data-show-more]").click(function (e) { // click event for load more
    e.preventDefault();
    console.log($(this).parent());
    $('.text-overlay').toggleClass('hidden');
    if ($(this).hasClass('data-open-content')) {
      $(this).prev("[data-more-content]").slideUp();
      $(this).html("<h4>Tell me more <span><i class='fa fa-plus' aria-hidden='true'></i></span></h4>");
      $(this).removeClass('data-open-content');
      $(this).find('.fa-minus').toggleClass('fa-plus');

    } else {
      $(this).prev("[data-more-content]").slideDown();
      $(this).html("<h4>Show Less <span><i class='fa fa-plus' aria-hidden='true'></i></span></h4>");
      $(this).addClass('data-open-content');
      $(this).find('.fa-plus').toggleClass('fa-minus');
    }
  });
  $('[data-more-comments]').click(function () {  
    if($('.comments--wrap').hasClass('is-open')){
      $(this).html(' View more');
    }else {
      $(this).html(' View less');
    }
    // $('[data-icon-plus]').toggleClass('fa-minus');
    $('.comments--wrap').toggleClass('is-open');
    
  });
  $('[button-user]').click(function () {
    $('.cont').toggleClass('s--signup');
  });
  $('[tab-sign-up]').click(function () {
    console.log();
    $('.cont').addClass('height115');
    $(this).parent().parent().parent().addClass('slide-right');
    $('.sign-up').addClass('center-slide');


  });
  $('[tab-sign-in]').click(function () {
    $(this).parent().parent().parent().removeClass('center-slide');
    $('.sign-in').removeClass('slide-right');
  });
  $('[data-sign-up-next]').click(function () {
    var emailVal = $('[data-signup-email]').val();
    var emailVal2 = $('[data-signup-email-confirm]').val();
    var emailCheck = emailValid.test(emailVal);
    var emailCheck2 = emailValid.test(emailVal2);
    $("[data-user-sign-up] input").each(function () {
      if ($.trim($(this).val()).length == 0) {
        $(this).next('.input-has-error').addClass('show-error');
        isSignUpFormValid = false;
        // $(this).focus();
      }
      else {
        isSignUpFormValid = true;
        $(this).next('.input-has-error').addClass('hide-error').removeClass('show-error');
        nextForm();
      }
    });

    if (!isSignUpFormValid) {

    } else if (emailVal != emailVal2) {
      $('[data-signup-email-confirm]').next('.input-has-error').addClass('show-error');
    } else {
      $('[data-signup-email-confirm]').next('.input-has-error').addClass('hide-error').removeClass('show-error');
      nextForm();
    }
    // console.log($(this).first('.sign-up-2'));
  });
  $('.id-upload-btn').click(function(){
     $('#id-upload').trigger('click'); 
  });
  $('.doc-upload-poa').click(function(e) {
    // console.log($(this).find(':input'));
    e.preventDefault();
      $('#proof-of-address').trigger('click');
  });
  $('.doc-upload-id').click(function(e) {
    // console.log($(this).find(':input'));
    e.preventDefault();
      $('#id-copy').trigger('click');
  });

  function nextForm() {
    $('[data-sign-up-next]').parent('.sign-up-1').addClass('slide-signup-right');
    $('[data-sign-up-next]').parent().next('.sign-up-2').addClass('slide-signup-right');
  }
  // $("[data-signup-email]").change(validate).keyup(validate);
  // $("[data-signup-email-confirm]").change(validate).keyup(validate);

  function validate() {
    var emailVal = $('[data-signup-email]').val();
    var emailVal2 = $('[data-signup-email-confirm]').val();
    var emailCheck = emailValid.test(emailVal);
    var emailCheck2 = emailValid.test(emailVal2);
    // var this = $(this);

    if (!emailCheck) {
      $(this).next('.input-has-error').addClass('show-error');
    }
    else {
      $(this).next('.input-has-error').addClass('hide-error').removeClass('show-error');

    }
    if (emailVal2 != emailVal) {
      $('[data-signup-email-confirm]').next('.input-has-error').addClass('show-error');
    } else {
      $(this).next('.input-has-error').addClass('hide-error').removeClass('show-error');
    }
  }
  var currentQty = 1;
  $(".fa-caret-up").one("click", function() {
    $('.qty-counter').text(currentQty++)
  });
  $(".fa-caret-down").one("click", function() {
  var findIput =  $(this).parent().prev().find('.find-input > [data-payu-price]').val();
    // var checkQty = findIput.first('[data-payu-price]').val();
  console.log(findIput);
    // $('.qty-counter').text(currentQty--)
  });


  // $('.second.circle').circleProgress({
  //    value: 1.0
  //  }).on('circle-animation-progress', function(event, progress) {
  //    $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
  //  });

  //strong PE (call after everything else to ensure no script-stopping errors have occurred)
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 3000);
  $('html').addClass('js-ready');

  var d = new Date();
  var n = d.getHours();
  if (n > 19 || n < 6) {
    // If time is after 7PM or before 6AM, apply night theme to ‘body’
    $('body').removeClass('day');
    $('body').addClass('night');
  } else {
    // Else use ‘day’ theme
    $('body').removeClass('night');
    $('body').addClass('day');
  }

  $('.poa-nominate').click(function(){
      $('[data-card="poa-nominated"]').toggleClass('hidden-fade');
  });
  $('[data-subscribe-submit]').click(function (e) {
    var newsletterName = $('[data-subscribe-name]').val();
    // var emailCheck = '';
    console.log(newsletterName);
      e.preventDefault();
    if(newsletterName == '' ){
      $('[data-subscribe-form]').addClass('ahashakeheartache');
    }else {
      $('[data-subscribe-name]').addClass('subscribe-close');
      $('[data-subscribe-name]').addClass('hidden');
      $('[data-subscribe-email]').removeClass('hidden');
      $('[data-subscribe-submit]').addClass('slide-left-btn');
    }
  });
  $('[data-subscribe-form]').on('click' ,'.slide-left-btn', function (e) {
    // alert('clicked');
    e.preventDefault();
    var newsletterVal = $('[data-subscribe-email]').val();
    var emailCheck = emailValid.test(newsletterVal);
    if(emailCheck == '' && newsletterName == '' ){
      $('[data-subscribe-form]').addClass('ahashakeheartache');
    }else {
      $('[data-subscribe-submit]').addClass('slide-right-btn');
      $('[data-subscribe-email]').delay(1000).addClass('hidden');
      $('[data-subscribe-submit]').delay(1000).addClass('hidden');
      $('[data-subscribe-success]').fadeIn();
    }
  });

  $('[data-subscribe-form]').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
    $('[data-subscribe-form]').delay(200).removeClass('ahashakeheartache');
  });

  // Pricing Plan counter
  var incrementPlus;
  var incrementMinus;

  var buttonPlus = $(".fa-caret-up");
  var buttonMinus = $(".fa-caret-down");
  var new_total = 0;
  var incrementPlus = buttonPlus.click(function () {
    var currentTotal = 0;
    var $n = $(this)
      .parent("[input-controls]")
      .parent("[input-number]")
      .find(".qty");
    $n.val(Number($n.val()) + 1);
    var currentPrice = $(this)
      .parent("[input-controls]")
      .parent("[input-number]")
      .find(".qty").attr('data-payu-price');
    console.log(currentPrice);
    var sub_total = currentPrice * $n.val();
    new_total += sub_total;
    console.log(new_total);
    // $('[data-sub-total]').empty();
    $('[data-sub-total]').text('R ' + new_total.toFixed(2) + ' excl VAT');
    return new_total;
  });

  var incrementMinus = buttonMinus.click(function () {
    var $n = $(this)
      .parent("[input-controls]")
      .parent("[input-number]")
      .find(".qty");
    var currentPrice = $(this)
      .parent("[input-controls]")
      .parent("[input-number]")
      .find(".qty").attr('data-payu-price');
      var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount - 1);
      var sub_total = currentPrice * amount;
      new_total -= sub_total;
      $('[data-sub-total]').text('R ' + new_total.toFixed(2) + ' excl VAT');     
    }
  });
  // $(".fa-user-circle").click(function () {

  //   // Set the effect type
  //   var effect = 'slide';

  //   // Set the options for the effect type chosen
  //   var options = { direction: 'right' };

  //   // Set the duration (default: 400 milliseconds)
  //   var duration = 500;

    
  //   $('#logged-in-panel').addClass('active')
  // });
$('.fa-user-circle').click(function(e){
    e.stopPropagation();
    $('#logged-in-panel').toggleClass('hidden');
});
$('#logged-in-panel').click(function(e){
    e.stopPropagation();
});
$('body,html').click(function(e){
       $('#logged-in-panel').addClass('hidden');
});

  var url = document.location.toString();
  if (url.match('#')) {
    $('.about-us-pills a[href="#' + url.split('#')[1] + '"]').tab('show');
  }

  //Change hash for page-reload
  $('.about-us-pills a[href="#' + url.split('#')[1] + '"]').on('shown', function (e) {
    window.location.hash = e.target.hash;
  });
  $('.about-us-pills a[href="#pay-as-you-use"]').click(function () {
    if ($('[data-pay-as-you-use]').hasClass('hidden')) {
      $('[data-pay-as-you-use]').toggleClass('hidden');
    } else {
      $('[data-pay-as-you-use]').toggleClass('hidden');
    }
    $('[data-account-360]').addClass('hidden');
    $('[data-contract]').addClass('hidden');
  });
  $('.about-us-pills a[href="#account-360"]').click(function () {
    if ($('[data-account-360]').hasClass('hidden')) {
      $('[data-account-360]').toggleClass('hidden');
    }
    $('[data-pay-as-you-use]').addClass('hidden');
    $('[data-contract]').addClass('hidden');
  });
  $('.about-us-pills a[href="#contract"]').click(function () {
    if ($('[data-contract]').hasClass('hidden')) {
      $('[data-contract]').toggleClass('hidden');
    }
    $('[data-pay-as-you-use]').addClass('hidden');
    $('[data-account-360]').addClass('hidden');
  });
  $('[data-run-checkbox]').click(function (e) {
    var dataID = $(this).attr('data-run-checkbox');
    var scrollToDiv = $('[data-card="' + dataID + '"]').offset().top;
    $('[data-card="' + dataID + '"]').toggleClass('hidden-fade');
  });
  $('body').on("click","[data-close-card]", function(){
    var closeId = $(this).attr('data-close-card');
    $('[data-card="' + closeId + '"]').toggleClass('hidden-fade');
    $('['+closeId+']').toggleClass('hidden-fade');
    $('[data-run-checkbox="' + closeId + '"]').prop('checked', false);
  });
  $('.datepicker').datetimepicker({
    format: 'MM/DD/YYYY',
    icons: {
      time: "fa fa-clock-o",
      date: "fa fa-calendar",
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down",
      previous: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      today: 'fa fa-screenshot',
      clear: 'fa fa-trash',
      close: 'fa fa-remove',
      inline: true
    }
  });
  $('[data-check-user]').click(function () {
    var subTableTarget = $(this).attr('data-check-user');
    $("[" + subTableTarget + "]").toggleClass('hidden');
    $("[data-sub-" + subTableTarget + "]").toggleClass('hidden');
    // $(this).toggleClass('fa-minus');
  });
  $('[data-close-check]').on('click', function () {
    var parentTarget = $(this).attr('data-close-check');
    $("[" + parentTarget + "]").toggleClass('hidden');
    $("[data-sub-" + parentTarget + "]").toggleClass('hidden');
  });

  $('[data-consent-label]').click(function () {
    $(this).addClass('consent-active');
  });
  var wordCount = 0;
  wordsArray = ["Risk Management", "Background Screening"];
  setInterval(function () {
    wordCount++;
    $(".alertnate-text").fadeOut(400, function () {
      var currentWord = wordsArray[wordCount % wordsArray.length];
      if(currentWord === 'Risk Management') {
        $('[data-alertnate-text]').attr('href','risk-management-packages.html');
      }else {
        $('[data-alertnate-text]').attr('href','background-screening.html');
      }
      $(this).text(wordsArray[wordCount % wordsArray.length]).fadeIn(400);
    });
  }, 3000);

  $('.close').click(function () {
    $('#logged-in-panel').toggle();
  });
  $('.text-vertical-slider').slick({
    dots: false,
    vertical: true,
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    verticalSwiping: false,
  });
  $('.comments-heading').click(function () {
    $('.comments-content').toggleClass('hidden');
    $('[data-comments-arrow ]').toggleClass('icon-Dots_Add');
    $('[data-comments-arrow ]').toggleClass('icon-Dots_Remove');
  });

  $('.attachments-heading').on('click', function () {
    if(!$('.academic-qual-content').hasClass('hidden')) {
      $('.academic-qual-content').toggleClass('hidden')
    }
    $('.attachments-content').toggleClass('hidden');
    $('[data-comments-expand]').toggleClass('icon-Dots_Add');
    $('[data-comments-expand]').toggleClass('icon-Dots_Remove');
    if ($(window).width() > 960) { 
      if ( $('.candidate-info-top').hasClass('height280')){
        $( '.candidate-info-top' ).removeClass('height280');
      }else {
          $( '.candidate-info-top' ).addClass('height280');
      }
    }
  });
  $('.academic-qual-heading').on('click', function () {
    if(!$('.attachments-content').hasClass('hidden')) {
      $('.attachments-content').toggleClass('hidden')
    }
    $('.academic-qual-content').toggleClass('hidden');
    $('[data-qual-expand]').toggleClass('icon-Dots_Add');
    $('[data-qual-expand]').toggleClass('icon-Dots_Remove');
  });
  var $AcademicCheckboxes = $('.academic-qualifications-content input[type="checkbox"]');
  var $IdentityCheckboxes = $('.identity-checks-content input[type="checkbox"]');
  var $CreditCheckboxes = $('.credit-checks-content input[type="checkbox"]');
  var $CriminalCheckboxes = $('.criminal-checks-content input[type="checkbox"]');
  var $EmploymentCheckboxes = $('.employment-checks-content input[type="checkbox"]');
  var $EnatisCheckboxes = $('.enatis-checks-content input[type="checkbox"]');

  var $Totalcheckboxes=$('.content input[type="checkbox"]');
        
  $AcademicCheckboxes.change(function(){
      var countCheckedCheckboxes = $AcademicCheckboxes.filter(':checked').length;
      if(countCheckedCheckboxes > 0) {
        $('[data-academic-checks-count]').removeClass('hidden')
        $('[data-academic-checks-count]').text(countCheckedCheckboxes)
      }else {
        $('[data-academic-checks-count]').removeClass('hidden')
        $('[data-academic-checks-count]').text('')

      }
  });
  $IdentityCheckboxes.change(function(){
    var countCheckedCheckboxes = $IdentityCheckboxes.filter(':checked').length;
    if(countCheckedCheckboxes > 0) {
      $('[data-identity-checks-count]').removeClass('hidden')
      $('[data-identity-checks-count]').text(countCheckedCheckboxes)
    }else {
      $('[data-identity-checks-count]').removeClass('hidden')
      $('[data-identity-checks-count]').text('')

    }
});
$CreditCheckboxes.change(function(){
  var countCheckedCheckboxes = $CreditCheckboxes.filter(':checked').length;
  if(countCheckedCheckboxes > 0) {
    $('[data-credit-checks-count]').removeClass('hidden')
    $('[data-credit-checks-count]').text(countCheckedCheckboxes)
  }else {
    $('[data-credit-checks-count]').removeClass('hidden')
    $('[data-credit-checks-count]').text('')

  }
});
$CriminalCheckboxes.change(function(){
  var countCheckedCheckboxes = $CriminalCheckboxes.filter(':checked').length;
  if(countCheckedCheckboxes > 0) {
    $('[data-criminal-checks-count]').removeClass('hidden')
    $('[data-criminal-checks-count]').text(countCheckedCheckboxes)
  }else {
    $('[data-criminal-checks-count]').removeClass('hidden')
    $('[data-criminal-checks-count]').text('')

  }
});
$EmploymentCheckboxes.change(function(){
  var countCheckedCheckboxes = $EmploymentCheckboxes.filter(':checked').length;
  if(countCheckedCheckboxes > 0) {
    $('[data-emp-checks-count]').removeClass('hidden')
    $('[data-emp-checks-count]').text(countCheckedCheckboxes)
  }else {
    $('[data-emp-checks-count]').removeClass('hidden')
    $('[data-emp-checks-count]').text('')

  }
});
$EnatisCheckboxes.change(function(){
  var countCheckedCheckboxes = $EnatisCheckboxes.filter(':checked').length;
  if(countCheckedCheckboxes > 0) {
    $('[data-enatis-checks-count]').removeClass('hidden')
    $('[data-enatis-checks-count]').text(countCheckedCheckboxes)
  }else {
    $('[data-enatis-checks-count]').removeClass('hidden')
    $('[data-enatis-checks-count]').text('')

  }
});
  $('.check-heading').click(function(){
    $(this).next(".content").slideToggle();
    $(this).closest(".required-checks-selection").siblings().find('.content').slideUp();
        
    $Totalcheckboxes.change(function(){
        var countCheckedCheckboxes = $Totalcheckboxes.filter(':checked').length;

        if(countCheckedCheckboxes > 0) {
          $('.checkout-top').removeClass('hidden')
          $('.checkout-top').text(countCheckedCheckboxes)
        }else {
          $('.checkout-top').removeClass('hidden')
          $('.checkout-top').text('')
        }
        // $('.checkout-top').text(countCheckedCheckboxes);
        console.log(countCheckedCheckboxes)
    });
  });
//   $('body').on('click',function(event){
//     if($('#logged-in-panel').hasClass('active')){
//       $('#logged-in-panel').addClass('hidden');
//       $('#logged-in-panel').removeClass('active');
//     }
// });
  $('[data-upload]').click(function() {
    var fileName = $(this).val();
    console.log(fileName);
    var fileType = fileName.substr(fileName.lastIndexOf('.')).toLowerCase();
  })
  var candidateCount = 1;
  $('body').on("click","[data-append-check]", function(){
    // $(this).fadeOut();
    candidateCount++;
    console.log(candidateCount);
    $('<div data-applicant-'+candidateCount+' class="academic-check"><div class="spacer-md"></div><div class="dotted-line"></div><h3 class="font18">Academic Check <span><i class="fa fa-plus" data-append-check></i></span><span class="float-r"><i class="fa fa-times" data-close-card="data-applicant-'+candidateCount+'"></i></span></h3></div><form action="" name="academic-check" class="academic-check" id="applicant'+candidateCount+'" data-applicant-'+candidateCount+'> <div class="col-md-6"> <div class="form-group"> <input type="text" class="form-control" id="" placeholder="First Name(As on Certificate)"> <p class="help-block">Help text here.</p></div><div class="form-group"> <input type="text" class="form-control" id="" placeholder="Name of institution"> <p class="help-block">Help text here.</p></div><div class="form-group"> <input type="text" class="form-control" id="" placeholder="Qualification Country"> <p class="help-block">Help text here.</p></div><div class="form-group"> <select class="selectpicker" data-style="btn btn-lg btn-default btn-round select-btn--form dashboard" title="Single Select" data-size="7"> <option disabled selected>Check key</option> <option value="2">Lorem</option> <option value="3">Lorem</option> </select> </div><div class="form-group"> <select class="selectpicker" data-style="btn btn-lg btn-default btn-round select-btn--form dashboard" title="Single Select" data-size="7"> <option disabled selected>Doctype Code</option> <option value="2">Lorem</option> <option value="3">Lorem</option> </select> </div><div class="form-group"> <input type="text" class="form-control" id="" placeholder="Studentt Number"> <p class="help-block">Help text here.</p></div></div><div class="col-md-6"> <div class="form-group"> <input type="text" class="form-control" id="" placeholder="Last Name(As on Certificate)"> <p class="help-block">Help text here.</p></div><div class="xs-spacer"></div><div class="form-group"> <select class="selectpicker" data-style="btn btn-lg btn-default btn-round select-btn--form dashboard" title="Single Select" data-size="7"> <option disabled selected>Qualification Type</option> <option value="2">Lorem</option> <option value="3">Lorem</option> </select> </div><div class="form-group"> <input type="text" class="form-control datepicker" value="Qualification Year" placeholder="Qualification Year"/> </div><div class="form-group"> <select class="selectpicker" data-style="btn btn-lg btn-default btn-round select-btn--form dashboard" title="Single Select" data-size="7"> <option disabled selected>Province</option> <option value="2">Lorem</option> <option value="3">Lorem</option> </select> </div><div class="form-group"> <input type="text" class="form-control" id="" placeholder="Cerficate Number"> <p class="help-block">Help text here.</p></div><div class="form-group form-file-upload"> <input type="file" id="academic-check" multiple=""> <div class="input-group text-meduim field-meduim"> <i class="icon icon--xxs icon--paperclip-solid grey"></i> <input type="text" readonly="" class="form-control text-align-center form-attachment" placeholder="Attachment"> </div></div></div></form>').insertAfter('[data-applicant-1]');
    $('.selectpicker').selectpicker('refresh');
  });
  
  // show password toggle
  $('[data-toggle-password]').click(function () {
    var currentFormTarget = $(this).attr('data-toggle-password');
    if ($('#' + currentFormTarget + '').attr("type") == "password") {
      $('#' + currentFormTarget + '').attr("type", "text");
      $('[data-toggle-password="' + currentFormTarget + '"]').text('Hide');
    } else {
      $('#' + currentFormTarget + '').attr("type", "password");
      $('[data-toggle-password="' + currentFormTarget + '"]').text('Show');
    }
  });
  $('.sign-in-btns a').click(function(){
    $('.sign-in-btns a').removeClass("active");
    $('.sign-up-text div').addClass('hidden');
    var textToShow = $(this).attr('href');
    console.log(textToShow);
    $(textToShow+'-text').removeClass('hidden')
    $(this).addClass("active");
  });
  $('a[data-toggle="tab"]').on('s`hown.bs.ta`b', function (e) {    
  	var target = $(this).attr('href');  
  	  
    $(target).css('right','-'+$(window).width()+'px');   
    var left = $(target).offset().right;
    $(target).css({left:left}).animate({"right":"0px"}, "10");
})
$('.nav-pricing a').click(function(){
  $('.nav-pricing a').removeClass("active");
  $(this).addClass("active");
  if($(this).hasClass('annually')) {
    $('.save20').removeClass('hidden')
  }else {
    $('.save20').addClass('hidden')
  }
});
$('.close-current-account').click(function(){
$(this).parent().toggleClass('in');
  // $(targetDiv).removeClass('active');
})
$('.accountabilty-item').click(function(){
  var targetDiv = $(this).attr('data-target');
    if($('.accountabilty-list > div').hasClass('in')) {
      $('.accountabilty-list > div').removeClass('in');
    }
})

$('.accounts-pricing a').click(function(){
  $('.accounts-pricing a').removeClass("active");
  $(this).addClass("active");
});
$('[data-account-type]').click(function(){
  var accType = $(this).attr('data-account-type');
  $('[data-price-type]').addClass('hidden')
  $('[data-price-type="'+accType+'"]').removeClass('hidden');
});
// $('.form-control').on('keyup', function() {
//   $(this).addClass('has-warning');
// });
$('input').bind('input propertychange', function() {

  validationType = $(this).attr('type');
  validEmail = new RegExp('/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i');
  $(this).parent().removeClass("has-warning has-error has-success");
  switch (validationType) {
    case "text":
        if($(this).val().length < 3 || $(this).val() === '') {
          $(this).parent().addClass('has-warning');
        }
      break;
    case "email":
      if(!validEmail.test($(this).val()) || $(this).val() === '') {
        $(this).parent().addClass('has-error');
      }
    break;
  
    default:
      break;
  }
});

var currentCanditateProgress = $('[data-candidate-progress]').attr('data-candidate-progress');
console.log(currentCanditateProgress);
var $progressWrap = $('[data-candidate-progress='+currentCanditateProgress+']');
var $progressCounter = 0;
var $progressBar = $('[data-progress="'+currentCanditateProgress+'"]');
var $alert = $('[data-progress-status="'+currentCanditateProgress+'"]');

// var myVar=setInterval(function(){myTimer()},1);
// function myTimer() {
// if($progressCounter < 100){
//   $progressCounter += 0.10;
//   $(".current-percentage").text(Math.round($progressCounter) +"%");
//   $progressWrap.addClass('success')
//   $progressBar.addClass('progress-line-success');
//   $('.progress-line-success').css('width', $progressCounter + "%");
  
  
 
  

//   // setTimeout(function() {
//   //   $progressWrap.css('display', 'none');
//   //   $alert.css('display', 'block');
//   //   clearInterval(myVar)
//   // }, 2000)
//   // code to do when loading
//   }
  
//   else if($progressCounter > 99){  
//       // code to do after loading
//   $progressCounter = 0;

  
//   }
// }
// setTimeout(function() {
//     $progressBar.css('width', '0%');
//     setTimeout(function() {
//         $progressBar.css('width', '30%');
//         $progressBar.addClass('progress-line-success');
//         setTimeout(function() {
//             $progressBar.css('width', '100%');
//             setTimeout(function() {
//                 $progressWrap.css('display', 'none');
//                 $alert.css('display', 'block');
//             }, 500); // WAIT 5 milliseconds
//         }, 2000); // WAIT 2 seconds
//     }, 1000); // WAIT 1 seconds
// }, 200); // WAIT 1 second
$(".,,").click(function(){
  var curInputs = $(".checkout-form").find(".data-checkout-input");
  isValid = true;


  $(".form-group").removeClass("has-error");
  for(var i=0; i<curInputs.length; i++){
      if (!curInputs[i].validity.valid){
          isValid = false;
          $(curInputs[i]).closest(".form-group").addClass("has-error");
      }
  }
  
  if (isValid) {
    $('#thankYouModal').modal('show');
  }
});
$(".view-checks-btn").click(function(){
  $('#thankYouModal').modal('hide');
  // $('#processChecks').modal('show');
});
$('#thankYouModal').on('hidden.bs.modal', function () {
  // Load up a new modal...
  $('#processChecks').modal('show')
})
//Dropdown with checkboxes not to close
$('.dropdown-menu-checkbox').click(function(e) {
  e.stopPropagation();
});
$('#printReport').click(function(){
  $('.printingArea').printThis({
    importCSS: true

  });
});
$('[data-checkout]').click(function(){
  var checkoutType = $(this).attr('data-checkout');
  $('[data-form]').addClass('hidden')
  $('[data-form]').removeClass('in')
  $('[data-form="'+checkoutType+'"]').addClass('in');
  $('[data-form="'+checkoutType+'"]').removeClass('hidden');
  $('[data-checkout]').removeClass("active");
  $(this).addClass("active");
});
});
// toggleFab();

//Fab click
$('#prime').click(function() {
  toggleFab();
});

//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('is-active');
  $('#prime').toggleClass('is-float');
  $('.fab').toggleClass('is-visible');
  
}

// Ripple effect
var target, ink, d, x, y;
$(".fab").click(function(e) {
  target = $(this);
  //create .ink element if it doesn't exist
  if (target.find(".ink").length == 0)
    target.prepend("<span class='ink'></span>");

  ink = target.find(".ink");
  //incase of quick double clicks stop the previous animation
  ink.removeClass("animate");

  //set size of .ink
  if (!ink.height() && !ink.width()) {
    //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
    d = Math.max(target.outerWidth(), target.outerHeight());
    ink.css({
      height: d,
      width: d
    });
  }

  //get click coordinates
  //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
  x = e.pageX - target.offset().left - ink.width() / 2;
  y = e.pageY - target.offset().top - ink.height() / 2;

  //set the position and add class .animate
  ink.css({
    top: y + 'px',
    left: x + 'px'
  }).addClass("animate");
});



