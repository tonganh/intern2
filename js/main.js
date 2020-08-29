jQuery(function($) {
  'use strict';
  mobileDropdown();
  function mobileDropdown() {
    if ($('.tr-menu').length) {
      $('.tr-menu .tr-dropdown').append(function() {
        return '<i class="fa fa-angle-down icon" aria-hidden="true"></i>';
      });
      $('.tr-menu .tr-dropdown .icon').on('click', function() {
        $(this).parent('li').children('ul').slideToggle();
      });
    }
  }
  var $content = $('.tr-menu');
  $('.tr-toggle-menu').on('click', function() {
    $content.addClass('menu-open');
  });
  $('.close-menu').on('click', function() {
    $content.removeClass('menu-open');
  });
  $('.tr-page-nav').onePageNav({});
  function menuHide() {
    var windowWidth = $(window).width();
    if (windowWidth < 1000) {
      $('.tr-nav li a').on('click', function() {
        $('.menu-open').removeClass('menu-open');
      });
    }
  }
  menuHide();
  $('.tr-achievement h3, .percent span').counterUp({delay: 10, time: 1000});
  $('.skill-progress')
      .on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
          $.each($('div.progress-bar'), function() {
            $(this).css('width', $(this).attr('aria-valuenow') + '%');
          });
        }
      });
  $('.tr-masonry-content')
      .masonry({itemSelector: '.tr-masonry', columnWidth: 0});
  $('#portfolio-item').cubeportfolio({
    filters: '#portfolio-menu',
    loadMore: '#portfolio-menu',
    animationType: 'flipBottom',
    loadMoreAction: 'click',
    loadMore: '#js-loadMore-agency',
    gapHorizontal: 0,
    gapVertical: 30,
    cols: 3,
    mediaQueries: [
      {width: 992, cols: 3}, {width: 768, cols: 3}, {width: 480, cols: 2},
      {width: 0, cols: 1}
    ],
  });
  $('.water-background').ripples({
    resolution: 256,
    perturbance: 0.04,
  });
  $('.tr-sticky').theiaStickySidebar({additionalMarginTop: 0});
  $('#menu').sidr();
});