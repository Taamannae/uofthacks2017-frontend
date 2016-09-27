$(document).ready(function(){



   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#001d34');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
    }


    $('#about').click(function() {
    $('html,body').animate({
        scrollTop: $("#slide-0").offset().top - 40},
        'slow');

});

$('#attend').click(function() {
$('html,body').animate({
    scrollTop: $("#slide-2").offset().top - 40},
    'slow');

});

$('#sponsor').click(function() {
$('html,body').animate({
    scrollTop: $("#slide-3").offset().top - 40},
    'slow');

});

$('#faq').click(function() {
$('html,body').animate({
    scrollTop: $("#slide-4").offset().top - 40},
    'slow');

});
});
