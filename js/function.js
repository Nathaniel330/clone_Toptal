// let images = ["./", "photoFromInternet2", "photoFromInternet3"];

// let index = 0;
// const imgElement = document.querySelector('#image-one');

// function change() {
//    imgElement.src = images[index];
//    index > 1 ? index = 0 : index++;
// }

// window.onload = function () {
//     setInterval(change, 5000);
// };

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