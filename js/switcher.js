jQuery(document).ready(function($) {
  $('.preset-list li a').on('click', function(event) {
    event.preventDefault();
    var color = $(this).data('color'), url = 'css/presets/' + color + '.css';
    logoSrc = 'images/presets/' + color + '/video-icon.png';
    $('.video-icon .tr-icon').attr('src', logoSrc);
    $('#preset').attr('href', url);
  });
  $('.style-chooser .toggler').on('click', function(event) {
    event.preventDefault();
    $(this).closest('.style-chooser').toggleClass('opened');
  });
});