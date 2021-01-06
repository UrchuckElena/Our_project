"use strict";

$(document).ready(function () {
  // hamburger 
  $(".header__hamburger").click(function () {
    $(".header__hamburger").toggleClass("is-active");
    $(".mobile-menu, .menu-shadow").toggleClass("opened");
  });
  $(".menu-shadow").click(function () {
    $(".header__hamburger").removeClass("is-active");
    $(".mobile-menu, .menu-shadow").removeClass("opened");
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  }); // favorites

  $('.like').on('click', function () {
    $(this).toggleClass('clicked');
  }); // tabs

  $(".menu__link").click(function () {
    if (!$(this).hasClass("menu__link--active")) {
      $(".menu__link").removeClass('menu__link--active');
      $(this).addClass("menu__link--active");
      $(".showcase__products").hide();
      $('#tab-' + $(this).data("id")).show();
    }
  });
  /* slider */

  var slider = $('#slider_list').lightSlider({
    item: 4,
    slideMove: 4,
    slideMargin: 20,
    speed: 2000,
    controls: false,
    responsive: [{
      breakpoint: 1250,
      settings: {
        item: 3,
        slideMove: 3
      }
    }, {
      breakpoint: 900,
      settings: {
        item: 2,
        slideMove: 2
      }
    }, {
      breakpoint: 650,
      settings: {
        item: 1,
        slideMove: 1
      }
    }]
  });
  $('#previous').on('click', function () {
    slider.goToPrevSlide();
  });
  $('#next').on('click', function () {
    slider.goToNextSlide();
  });
});