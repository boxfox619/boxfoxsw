function include(url){
  document.write('<script src="'+url+'"></script>');
  return false ;
}

/* Superfish menu
========================================================*/
include('./js/superfish.js');
include('./js/jquery.mobilemenu.js');


/* DEVICE.JS AND SMOOTH SCROLLIG
========================================================*/
include('./js/jquery.mousewheel.min.js');
include('./js/jquery.simplr.smoothscroll.min.js');

$(function () { 
  if ($('html').hasClass('desktop')) {
      $.srSmoothscroll({
        step:150,
        speed:800
      });
  }   
});
