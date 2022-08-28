/* to check if sticky nav activated */
const el = document.querySelector("nav")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);

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


function currentSlide(n) {
    showSlides(assetIndex = n);
    console.log("clicked");
}
let assetIndex = 1;
showSlides(assetIndex);

function showSlides(n) {
    let i;
    let asset = document.getElementsByClassName("asset");
    if (n > asset.length) {assetIndex = 1}
    if (n < 1) {assetIndex = asset.length}
    for (i = 0; i < asset.length; i++) {
      asset[i].style.display = "none";
    }
    asset[assetIndex-1].style.display = "block";
}