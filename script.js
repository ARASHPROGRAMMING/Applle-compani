const mainNav = document.getElementById('mainNav')

document.addEventListener('scroll', function (){
    if (document.documentElement.scrollTop > 0 ){
        mainNav.classList.add('bg-black')
        mainNav.classList.add('txt-white')
    } else {
        mainNav.classList.remove('bg-black')
        mainNav.classList.remove('txt-white')
    }
})







var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});






let subMenu=document.querySelector(".submenu");
let flag=true;
function show(){
    if (flag==true){
        subMenu.style.transition="all 0.5s linear";
        subMenu.style.opacity="1";
        flag=false
    }
    else {
        subMenu.style.transition="all 0.5s linear";
        subMenu.style.opacity="0";
        flag=true;
    }
}