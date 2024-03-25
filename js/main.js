$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});



var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30
});
// Go to the next item
$('.slider-btn--right').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slider-btn--left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})