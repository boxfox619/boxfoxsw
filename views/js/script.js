function include(url){
  document.write('<script src="'+url+'"></script>');
  return false ;
}

/* Superfish menu
========================================================*/
include('./js/superfish.js');
include('./js/jquery.mobilemenu.js');


$('.smoothscroll').on('click', function (e) {

	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});
