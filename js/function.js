/* to check if sticky-top nav activated */
var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 500) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}
/* end */


/* trusted by leading brands carousel */
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide-one");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 4000); 
}

carousel2();

function carousel2() {
    var i;
    var x = document.getElementsByClassName("slide-two");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel2, 4000); 
}

// var assetSlide = 0;
// assetCarousel();

// function assetCarousel() {
//     var istart;
//     var y = document.getElementsByClassName("assetImage");
//     for (istart = 0; istart < y.length; istart++) {
//         y[istart].style.display = "none"; 
//     }
//     assetSlide++;
//     if (assetSlide > y.length) {assetSlide = 1} 
//     y[assetSlide-1].style.display = "block"; 
//     setTimeout(assetCarousel, 4000); 
// }
/* end */


/* asset display */
function display(n) {
    displayAuto(assetIndex = n);
    console.log("clicked");
}
let assetIndex = 1;
displayAuto(assetIndex);

function displayAuto(n) {
    let i;
    let asset = document.getElementsByClassName("asset");
    if (n > asset.length) {assetIndex = 1}
    if (n < 1) {assetIndex = asset.length}
    for (i = 0; i < asset.length; i++) {
      asset[i].style.display = "none";
    }
    asset[assetIndex-1].style.display = "block";
}