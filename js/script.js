$(document).ready(function() {
  $('.next i.fas').click(slideRight);
});

function slideRight() {
  var immagineAttiva = $('.images img.active');

  immagineAttiva.removeClass('active');
  immagineAttiva.next().addClass('active');
}
