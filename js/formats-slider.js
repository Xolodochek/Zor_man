const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        }
      },
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button',
      bulletClassActive: 'pagination__button--active',
    },
  
    navigation: {
      nextEl: '.carousel-bytton-next',
      prevEl: '.carousel-bytton-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });