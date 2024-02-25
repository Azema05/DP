
new Rellax('.rellax');

$(window).scroll(function (event) {
    if ($(this).scrollTop() > 700) {
        $(".header1").slideDown();
        return false;
    } else {
        $(".header1").slideUp();
    }
});


// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     mousewheel: true,
//     keyboard: true,
// });
var hiddenElement2 = document.getElementById("anchor-link-2");
var btn2 = document.querySelector(".btn-project");

function handleButtonClick2() {
    hiddenElement2.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn2.addEventListener("click", handleButtonClick2);


var hiddenElement = document.getElementById("anchor-link");
var btn = document.querySelector(".anchor");

function handleButtonClick() {
    hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn.addEventListener("click", handleButtonClick);


