$(document).ready(function ($) {
  $('.our-team__item').on('click', function () {
    $('.modal, .team-form').addClass('active');
  });

  $('.certificates__slide img').on('click', function () {
    $('.modal, .certificates-form').addClass('active');
  });

  $('.modal .close').on('click', function () {
    $('.modal, .team-form, .certificates-form').removeClass('active');
  });

  $('#sort').on('click', function () {
    $(this).siblings('.custom-select').toggleClass('active');
  });

  $('#sort').on('change', function () {
    $(this).siblings('.custom-select').find('span').html($(this).val());
  });


  $('.feedback__checkbox').on('click', function () {
    $(this).find('.feedback__check').toggleClass('active');
  });






  var swiper = new Swiper(".reviews__slider, .certificates__slider", {
    slidesPerView: 3,
    spaceBetween: 3,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var projectSwiper = new Swiper(".project__slider", {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})