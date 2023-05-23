// hero swiper slider

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    loop:true,
    speed:2000,
    // autoplay: {
    //     delay: 4000,
    //   },
   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // navbar toggle
  let menuIcon = document.querySelector('.menu .fa-bars');
  let menuList = document.querySelector('.menu .menus');

  menuIcon.addEventListener("click",function(){
    menuList.classList.toggle("toggle");
  });