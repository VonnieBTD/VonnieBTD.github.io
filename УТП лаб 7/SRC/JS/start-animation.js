var el = $('.line')

$(window).scroll(function(){
    if ( $(this).scrollTop() > el.offset().top - 600){
        el.addClass('animated-line');
    }
    else{ if ( $(this).scrollTop() < el.offset().top - 900){
        el.removeClass('animated-line');
    }}
});


  $( "#garten").click(function(){
      
      $("#transit").addClass('services-transit-container-clicked-garten');
      $("#garten").removeClass('services-garten-container-clicked-home');
      $("#garten-description-text-container").removeClass('garten-description-text-container-hidden');

  });

  $("#transit").click(function(){
      
      $("#transit").removeClass('services-transit-container-clicked-garten');
      $("#transit").removeClass('services-transit-container-clicked-home');
      $("#garten").removeClass('services-garten-container-clicked-home');
      $("#garten-description-text-container").addClass('garten-description-text-container-hidden');
      $("#transit-description-text-container").removeClass('garten-description-text-container-hidden');
  });

  $("#home").click(function(){
      
      $("#garten").addClass('services-garten-container-clicked-home');
      $("#transit").addClass('services-transit-container-clicked-home');
      $("#garten-description-text-container").addClass('garten-description-text-container-hidden');
      $("#transit-description-text-container").addClass('garten-description-text-container-hidden');
  });