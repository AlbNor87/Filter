// var mySwiper = new Swiper ('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     pagination: {
//     el: '.swiper-pagination',
//     dynamicBullets: true,
//     },

//     // Navigation arrows
//     navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
// //   scrollbar: {
// //     el: '.swiper-scrollbar',
// //   },
// })

var swiperMobile = new Swiper('.swiper-container.mobile', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
});

var swiperDesktop = new Swiper('.swiper-container.desktop', {
    // effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows : true,
    // },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
});
