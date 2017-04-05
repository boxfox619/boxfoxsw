/*----------------------------------------------------*/
/*	Sticky Navigation
------------------------------------------------------*/
 $(window).on('scroll', function() {

  var y = $(window).scrollTop(),
      topBar = $('header');
      topBarContent = $('header .row');
  var offsetY = $('#intro').height();

   if (y > offsetY) {
      topBarContent.css('opacity',1);
      topBar.css('opacity',1);
   }
    else {
      topBarContent.css('opacity',0);
      topBar.css('opacity',0);
    }

});


/*-----------------------------------------------------*/
  /* Mobile Menu
 ------------------------------------------------------ */
 var toggleButton = $('.menu-toggle'),
     nav = $('.main-navigation');

 toggleButton.on('click', function(event){
  event.preventDefault();

  toggleButton.toggleClass('is-clicked');
  nav.slideToggle();
});

  if (toggleButton.is(':visible')) nav.addClass('mobile');

  $(window).resize(function() {
  if (toggleButton.is(':visible')) nav.addClass('mobile');
    else nav.removeClass('mobile');
  });

  $('#main-nav-wrap li a').on("click", function() {

  if (nav.hasClass('mobile')) {
    toggleButton.toggleClass('is-clicked');
    nav.fadeOut();
  }
});

/*-----------------------------------------------------*/
  /* Header Menu To top header copy
 ------------------------------------------------------ */
$( document ).ready(function() {
    $('#main_menu').children().clone().appendTo('#header_menu');
});
