const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    coverFlowEffect:{
        rotate: 50,
        stretch: 0,
        depth: 100, 
        modifier: 1,
        slideShadows: false
    },
    direction: 'horizontal',
    loop: true,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
});