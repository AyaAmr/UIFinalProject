$(document).ready(function(){
  $('.home-slider').slick({
    dots: true
  });

  $('.clients-qoutes div:not(:first-child)').hide(); //Hide All qoutes except the first one

  $('.clients-logos div:not(:first-child) > .active').hide(); //Hide the second logo version except for 1st element

  $('.clients-logos div:first-child > .normal').hide(); //Hide the normal logo version for the first slide


  /* Get number of logos slides exist*/
  var logosNum = $('.clients-logos').children().length;

  $(".clients-logos").append( "<div class='logos-bullets'></div>" );

  for (var i = 0; i < logosNum; i++) {
    if(i==0) {
      $('.logos-bullets').append( "<button class='active'></button>" );
    }else{
      $('.logos-bullets').append( "<button></button>" );
    }
  }



  /* On client logo click show client's qoute */
  $( ".clients-logos div" ).click(function() {
    var childNum = $(this).index() + 1;
    $('.clients-logos div > .active').hide(); //Hide all other active logos ( normalize )
    $('.clients-logos div > .normal').show(); //Show All original logos ( normalize )
    $('.clients-logos div:nth-child('+childNum+') > .normal').hide(); //Hide original logo of the clicked element
    $('.clients-logos div:nth-child('+childNum+') > .active').show(); //Show the current clicked as active
    $('.clients-qoutes div').hide();
    $('.clients-qoutes div:nth-child('+childNum+')').show();
    $('.clients-qoutes div:nth-child('+childNum+') div').show(); //To show author div
  });

});



