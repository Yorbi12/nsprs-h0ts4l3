$('.flexslider').flexslider({
  touch: true,
  slideshow: false,
  controlNav: true,
  slideshowSpeed: 7000,
  animationSpeed: 600,
  initDelay: 0,
  start: function(slider) { // Fires when the slider loads the first slide
    var slide_count = slider.count - 1;

    $(slider)
    .find('img.lazy:eq(0)')
    .each(function() {
      var src = $(this).attr('data-src');
      $(this).attr('src', src).removeAttr('data-src');
    });
  },
  before: function(slider) { // Fires asynchronously with each slider animation
    var slides     = slider.slides,
    index      = slider.animatingTo,
    $slide     = $(slides[index]),
    $img       = $slide.find('img[data-src]'),
    current    = index,
    nxt_slide  = current + 1,
    prev_slide = current - 1;

    $slide
    .parent()
    .find('img.lazy:eq(' + current + '), img.lazy:eq(' + prev_slide + '), img.lazy:eq(' + nxt_slide + ')')
    .each(function() {
      var src = $(this).attr('data-src');
      $(this).attr('src', src).removeAttr('data-src');
    });
  }
});
/** **/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("img-thumb");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
};

/** MINI D WHITE**/
function currentDiv13(n) {
  showDivs13(slideIndex = n);
}

function showDivs13(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-13");
  var dots = document.getElementsByClassName("demo-13");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

/** MINI D BLACK**/

function currentDiv14(n) {
  showDivs14(slideIndex = n);
}

function showDivs14(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-14");
  var dots = document.getElementsByClassName("demo-14");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}
/** MINI C GREY**/

function currentDiv15(n) {
  showDivs15(slideIndex = n);
}

function showDivs15(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-15");
  var dots = document.getElementsByClassName("demo-15");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

/** PACK MINI D WHITE**/

function currentDiv16(n) {
  showDivs16(slideIndex = n);
}

function showDivs16(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-16");
  var dots = document.getElementsByClassName("demo-16");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

/** PACK MINI C GREY**/

function currentDiv17(n) {
  showDivs17(slideIndex = n);
}

function showDivs17(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-17");
  var dots = document.getElementsByClassName("demo-17");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

/** PACK MINI C GREY**/

function currentDiv18(n) {
  showDivs18(slideIndex = n);
}

function showDivs18(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-18");
  var dots = document.getElementsByClassName("demo-18");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

/** PACK MINI C GREY**/

function currentDiv19(n) {
  showDivs19(slideIndex = n);
}

function showDivs19(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-19");
  var dots = document.getElementsByClassName("demo-19");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

/** PACK MINI C GREY**/

function currentDiv20(n) {
  showDivs20(slideIndex = n);
}

function showDivs20(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-20");
  var dots = document.getElementsByClassName("demo-20");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}



/** **/
tippy('.toolti', {
  theme: 'white',
  arrow: false,
  arrowType: 'round',
  duration: 500,
});

/** **/
$('.modal').on("hidden.bs.modal", function (e) {
    if ($('.modal:visible').length) {
        $('body').addClass('modal-open');
    }
});
/** **/
$('.maquinas-a').owlCarousel({
      items:1,
      loop:true,
      center:true,
      margin:20,
      URLhashListener:true,
      mouseDrag:true,
      // autoplay:true,
      // autoplayTimeout:5000,
      autoplayHoverPause:false,
      animateIn: 'fadeIn',
      rewind:true,
      animateOut: 'fadeOut',
      dots:false,
      nav:true
  });
