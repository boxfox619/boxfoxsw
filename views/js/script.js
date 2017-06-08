function include(url){
  document.write('<script src="'+url+'"></script>');
  return false ;
}

/* Superfish menu
========================================================*/

    $(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
