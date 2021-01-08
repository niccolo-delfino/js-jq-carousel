$(document).ready(function() {
  $('.next i.fas').click(slideRight);
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
