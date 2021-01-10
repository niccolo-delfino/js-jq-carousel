$(document).ready(function() {
  $('.next i.fas').click(slideRight);
  $('.prev i.fas').click(slideLeft);
  $('.nav i').click(slideDot);

});

function slideRight() {
  var immagineAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');

  immagineAttiva.removeClass('active');
  pallinoAttivo.removeClass('active');

  if (immagineAttiva.hasClass('last')) {
    $('.images img.first').addClass('active');
  }else {
    immagineAttiva.next().addClass('active');
  }

  if (pallinoAttivo.hasClass('last')) {
    $('.nav i.first').addClass('active');
  }else {
    pallinoAttivo.next().addClass('active');
  }
}

function slideLeft() {
  var immagineAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');

  immagineAttiva.removeClass('active');
  pallinoAttivo.removeClass('active');

  if (immagineAttiva.hasClass('first')) {
    $('.images img.last').addClass('active');
  }else {
    immagineAttiva.prev().addClass('active');
  }

  if (pallinoAttivo.hasClass('first')) {
    $('.nav i.last').addClass('active');
  }else {
    pallinoAttivo.prev().addClass('active');
  }
}

function slideDot() {
  $('.nav i.active').removeClass('active');
  $('.images img.active').removeClass('active');
  $(this).addClass('active');
  $('img').eq($(this).index()).addClass('active');
}
