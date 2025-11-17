const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
btn.addEventListener('click',() => {

const resumeDetails = document.querySelectorAll('.resume-detail');    

resumeBtns.forEach(btn => {
btn.classList.remove('active');
});
btn.classList.add('active');

resumeDetails.forEach(detail => {
    detail.classList.remove('active');
});
resumeDetails[idx].classList.add('active');
});
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabcursor:true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  /* Responsive */
breakpoints: {
  0: {
    slidesPerView: 1
  },
  768: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 3
  }
}

});