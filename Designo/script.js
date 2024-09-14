const slider = document.querySelector('.slider');
console.log(slider);
const left = document.querySelector('.left');
const right = document.querySelector('.right');
var index=0;
left.addEventListener('click', function(){
    if(index>0) index--;
    else index=1;
    console.log(index);
    slider.style.transform='translate('+ index*-50 +'%)';
});

right.addEventListener('click', function(){
    if(index<1) index++;
    else index=0;
    console.log(index);
    slider.style.transform='translate('+ index*-50 +'%)';
});


const shop_slider = document.querySelector('.slider-shop');
const left2 = document.querySelector('.shop-left');
const right2 = document.querySelector('.shop-right');
var index=0;
left2.addEventListener('click', function(){
    if(index>0) index--;
    else index=3;
    console.log(index);
    shop_slider.style.transform='translate('+ index*-25 +'%)';
});

right2.addEventListener('click', function(){
    if(index<3) index++;
    else index=0;
    console.log(index);
    shop_slider.style.transform='translate('+ index*-25 +'%)';
});



var lastScrollTop = 10;
var navbar = document.querySelector("nav");

window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset||document.documentElement.scrollTop;
    if(scrollTop < lastScrollTop)
        {
            navbar.classList.remove("black");
        }
    else
        {
            navbar.classList.add("black");
        }
});

// var slide1      = document.getElementById("first");
// var boxAfter = window.getComputedStyle(slide1, "::before");

// const obs1 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if(entry.isIntersecting){
//             // var before = window.getComputedStyle(entry, "::before");
//             entry.target.style.animation = "slide 1s";
//         }
//     });
// });

// obs1.observe(boxAfter);