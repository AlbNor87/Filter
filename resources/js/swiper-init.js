//Mobile Swiper with 3D effect
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

//Desktop Swiper without 3D effect
var swiperDesktop = new Swiper('.swiper-container.desktop', {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
});
