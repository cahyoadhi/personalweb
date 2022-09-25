// JQUERY
$(document).ready(function(){
// Smooth Scrolling
$(".scrolling").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
    });
    } // End if
});

// Navbar + button go to top
var aboveHeight = $('section').outerHeight();
height = aboveHeight - 10
heightTwo = aboveHeight*2-10

$(window).scroll(function(){
    if ($(window).scrollTop() > height){
        $('#navbar').css('top','0');
    } 
    else {
        $('#navbar').css('top','-4rem');
    }
    if ($(window).scrollTop() > heightTwo){
        $('#gotop').css('display','block');
    } 
    else {
        $('#gotop').css('display','none');
    }
});

});



ScrollReveal({
    reset: true,
    distance: '60px',
    duration:2500,
    delay:400
  });

  var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null,
    duration: 7000,
};
  
  ScrollReveal().reveal('.wrapper,  #typewrite, .intro, .skills, .gallery ', {delay:200, slideUp});
  ScrollReveal().reveal('.icon-sosial a, .skills .image-wrapper', {delay:200, origin:'bottom',interval:400});
  ScrollReveal().reveal('.form-container', {delay:2100, origin:'right',  opacity: 0,});
  ScrollReveal().reveal('.location', {delay:2100, origin:'left'});
  ScrollReveal().reveal('.text-wrapper, .underline', {delay:200, origin:'bottom'});
  
