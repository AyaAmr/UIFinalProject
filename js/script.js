$(document).ready(function(){
  $('.home-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
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

  /* Add slider to Blog post */
  $('.blog-gallery-post').slick({
    dots: false,
    arrows: true,
  });

  //Truncate pagination list

  var numberOfPages = $('.paginate ul').children().length;
  while(numberOfPages > 5) {
    $('.paginate li:nth-child(5)').replaceWith( "." );
    numberOfPages = $('.paginate ul').children().length;
  }

  ///////END of truncation//////////

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

/* When the user fills the comment-form in blog_post.html, the form inputs
*   are validated through client side HTML5 validations, and then the user
*   comment is appended to the list of comments. This should be re-implemented using
*   ajax and with serverside validations.
*/
$(document).on('click', '.comment-form button[type="submit"]', function(ev){

  var $form = $('.comment-form form')
  if ($form[0].checkValidity()) {
    // if the form passed HTML5 validity test
    ev.preventDefault();

    var $name = $('.comment-form form input#name').val();
    var $comment = $('.comment-form form textarea#comment').val();

    var $newComment = "<div class='comment'><div class='comment__author-image'><img src='images/team-member.png' alt=''></div><!-- /.comment__commenter-image --><div><p><span class='comment__author-name'>" +
      $name +
      "</span><span class='comment__date'>03 Dec 2015</span><span class='comment__reply-option';><a href=''>Reply</a></span></p><p class='comment__content'>" +
      $comment +
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p></div></div><!-- /.comment -->";

    // append the new comment after the last comment that is present in the .comments-container
    $('.comments-container .comment').last().after($newComment);

    // reset the form fields
    ($form).find('input, textarea').val('');
  }

});
