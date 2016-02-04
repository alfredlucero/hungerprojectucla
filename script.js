$(document).ready(function() {
  // FOUNDATION JS
  $(document).foundation();
  
  // NEWS BUTTON TOGGLES
  $('#article-button-1').on('click', function() {
  	$('.article-1').slideToggle();
  });
  $('#article-button-2').on('click', function() {
  	$('.article-2').slideToggle();
  });
  $('#article-button-3').on('click', function() {
  	$('.article-3').slideToggle();
  });
  $('#article-button-4').on('click', function() {
  	$('.article-4').slideToggle();
  });
  $('#article-button-5').on('click', function() {
  	$('.article-5').slideToggle();
  });
});
