$(function() {

  // HOME PAGE
  function incContrast (jumbotronx) {
    // var id=jumbotronx.id;
    document.getElementById(""+jumbotronx.id+"").style.filter = "contrast(120%)";
    var id2=document.getElementById(""+jumbotronx.id+"").getElementsByTagName('div')[0].id;
    document.getElementById(""+id2+"").style.fontSize = "4vw";
    document.getElementById(""+id2+"").style.color = "white";
  }
  function decContrast (jumbotronx) {
    document.getElementById(""+jumbotronx.id+"").style.filter = "contrast(100%)";
    var id2=document.getElementById(""+jumbotronx.id+"").getElementsByTagName('div')[0].id;
    document.getElementById(""+id2+"").style.fontSize = "3.75vw";
    document.getElementById(""+id2+"").style.color = "#FBFBFB";
  }
  window.$incContrast = incContrast;
  window.$decContrast = decContrast;



  // TURKEY PAGE
  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

window.$plusSlides=plusSlides;
//window.$currentSlide=currentSlide;

});