var imgs = document.getElementsByClassName("item-img");

var arrayImgs = [];
var item = document.querySelector(".lightbox-item");
var container = document.querySelector(".lightbox-container");
var next = document.getElementById("next ");
var back = document.getElementById("back ");

var wclose = document.getElementById("wClose");


var currentIndex = 0;

for (var i = 0; i < imgs.length; i++) {

    arrayImgs.push(imgs[i]);

    imgs[i].addEventListener("click", function(e) {


        //add class show to elemrnt container from css
        container.classList.add("show");

        //get image src from target of image wich clicked on
        var imgSrc = e.target.src;

        item.style.backgroundImage = "url(" + imgSrc + ")";

        // varible has index of current img by its src
        currentIndex = arrayImgs.indexOf(e.target);

    })
}

// wclose.addEventListener("click", function() {
//     container.classList.remove("show");
// })

next.addEventListener("click", function() {

    nextStep();
})

back.addEventListener("click", function() {
    backStep();

})

function nextStep() { //next image when press on next item

    currentIndex++;

    if (currentIndex == arrayImgs.length) {

        currentIndex = 0;
    }

    item.style.backgroundImage = "url(" + arrayImgs[currentIndex].src + ")";
}

function backStep() { //previous image when press on back item

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = arrayImgs.length - 1;
    }

    item.style.backgroundImage = "url(" + arrayImgs[currentIndex].src + ")";
}


document.addEventListener("keydown", function(event) {
    //to take action by press on keyboard

    if (event.keyCode == 27) {
        container.classList.remove("show");

    } else if (event.keyCode == 39) {
        nextStep();
    } else if (event.keyCode == 37) {
        backStep();
    }

})