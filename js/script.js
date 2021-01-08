$(document).ready(function() {
  $('.next i.fas').click(slideRight);
  $('.prev i.fas').click(slideLeft);
});

function slideRight() {
  var immagineAttiva = $('.images img.active');

  immagineAttiva.removeClass('active');

  if (immagineAttiva.hasClass('last')) {
    $('.images img.first').addClass('active');
  }else {
    immagineAttiva.next().addClass('active');
  }
}

function slideLeft() {
  var immagineAttiva = $('.images img.active');

  immagineAttiva.removeClass('active');

  if (immagineAttiva.hasClass('first')) {
    $('.images img.last').addClass('active');
  }else {
    immagineAttiva.prev().addClass('active');
  }
}
