// ***NAVIGATION MENU BUTTONS
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const activePage = () => {

  const header = document.querySelector('header');
  const barBox = document.querySelector('.bars-box');

  header.classList.remove('active');
 setTimeout (() => {
  header.classList.add('active');
 } ,1100);

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

 barBox.classList.remove('active');
 setTimeout (() => {
  barBox.classList.add('active');
 } ,1100);

 sections.forEach(section => {
    section.classList.remove('active');
  });

  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}

navLinks.forEach((link , idx) => {
  link.addEventListener('click', () => {
    if(!link.classList.contains('active')){
      activePage();
      link.classList.add('active');

      setTimeout(() => {
        sections[idx].classList.add('active');
      }, 1100);

    }
  });
});

logoLink.addEventListener('click', () => {
  if(!navLinks[0].classList.contains('active')){
    activePage();
    navLinks[0].classList.add('active');

      setTimeout(() => {
        sections[0].classList.add('active');
      }, 1100);

  }
});

// ***RESUME TAC BUTTONS
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

<<<<<<< HEAD

// CURSOR POINTOR EFFECT
const cursorAnimation = document.querySelector(".cursor");
      const cursors = document.querySelectorAll(".cursor");

      document.addEventListener("click", (e) => {
        let x = e.clientX;
        let y = e.clientY;

        cursorAnimation.style.top = y + "px";
        cursorAnimation.style.left = x + "px";

        cursors.forEach((cursor) => {
          cursor.classList.add("active");

          function removeCursorActive() {
            cursor.classList.remove("active");
          }
          setTimeout(removeCursorActive, 1000);
        });

        let cursorClone = cursorAnimation.cloneNode(true);
        document.querySelector("body").appendChild(cursorClone);

        setTimeout(() => {
          cursorClone.remove();
        }, 1000);
      });

    // *** CURSOR POINTOR CLICK EFFECT
      const cursorDot = document.querySelector(".cursor-dot");
      const cursorOutline = document.querySelector(".cursor-outline");

      window.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursorDot.style.left = `${x}px`;
        cursorDot.style.top = `${y}px`;

        cursorOutline.animate(
          { left: `${x}px`, top: `${y}px` },
          { duration: 300, fill: "forwards" }
        );
      });


    //   **** PORTFOLIO ARROW CLICK BUTTONS 
  const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail =>  {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
};

// RIGHT BUTTON
arrowRight.addEventListener('click', () => {
    if(index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }else{
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

// LEFT BUTTON
arrowLeft.addEventListener('click', () => {
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});

// ***SWIPER JS FOR TESTIMONIALS
=======
>>>>>>> a5364a9d87c6ccc2f02f7873c9ce6e895f329cad
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

<<<<<<< HEAD
});

=======
});
>>>>>>> a5364a9d87c6ccc2f02f7873c9ce6e895f329cad
