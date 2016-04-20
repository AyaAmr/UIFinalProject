$(document).ready(function(){
  $('.home-slider').slick({
    dots: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
  });

  $('.clients-qoutes div:not(:first-child)').hide(); //Hide All qoutes except the first one

  $('.clients-logos div:not(:first-child) > .active').hide(); //Hide the second logo version except for 1st element

  $('.clients-logos div:first-child > .normal').hide(); //Hide the normal logo version for the first slide


  /* Get number of logos slides exist*/
  var logosNum = $('.clients-logos').children().length;

  $(".clients-logos").append( "<div class='logos-bullets'></div>" );

  for (var i = 0; i < logosNum; i++) {
    if(i==0) {
      $('.logos-bullets').append( "<button class='bullet-active'></button>" ); //set the first dot to active by default
    }else{
      $('.logos-bullets').append( "<button></button>" );
    }
  }



  /* On client logo click show client's qoute */
  $( ".logos-bullets button" ).click(function() {
    var childNum = $(this).index() + 1;
    handleClientsLogosSlider (childNum);
  });

  $( ".clients-logos div" ).click(function() {
    var childNum = $(this).index() + 1;
    handleClientsLogosSlider (childNum);

  });

});

function handleClientsLogosSlider (childNum) {
  if( childNum <= 3) { //A silly if condition to hande the cases where child element doesn't exist, this should be more dynamic

    $('.clients-logos div > .active').hide(); //Hide all other active logos ( normalize )
    $('.clients-logos div > .normal').show(); //Show All original logos ( normalize )
    $('.clients-logos div:nth-child('+childNum+') > .normal').hide(); //Hide original logo of the clicked element
    $('.clients-logos div:nth-child('+childNum+') > .active').show(); //Show the current clicked as active
    $('.clients-qoutes div').hide();
    $('.clients-qoutes div:nth-child('+childNum+')').show();
    $('.clients-qoutes div:nth-child('+childNum+') div').show(); //To show author div
    $('.logos-bullets button').removeClass('bullet-active'); //remove active class from all buttons if exists
    $('.logos-bullets button:nth-child('+childNum+')').addClass('bullet-active'); //Add active class to currently clicked child
  }
}



