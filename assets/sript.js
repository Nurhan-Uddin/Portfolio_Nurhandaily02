// ==========================
// NAVIGATION MENU BUTTONS
// ==========================
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

const activePage = (idx = 0) => {
  const header = document.querySelector('header');
  const barBox = document.querySelector('.bars-box');

  // Header animation
  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);

  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[idx].classList.add('active');

  barBox.classList.remove('active');
  setTimeout(() => {
    barBox.classList.add('active');
  }, 1100);

  sections.forEach(section => section.classList.remove('active'));
  setTimeout(() => {
    sections[idx].classList.add('active');
  }, 1100);

  // Close mobile menu if open
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Navigation link click
navLinks.forEach((link, idx) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // prevent jump
    if (!link.classList.contains('active')) {
      activePage(idx);
    }
  });
});

// Logo click → go to first section
logoLink.addEventListener('click', (e) => {
  e.preventDefault();
  activePage(0);
});

// ==========================
// RESUME TAB BUTTONS
// ==========================
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    resumeBtns.forEach(b => b.classList.remove('active'));
    resumeDetails.forEach(d => d.classList.remove('active'));

    btn.classList.add('active');
    resumeDetails[idx].classList.add('active');
  });
});

// ==========================
// CURSOR POINTER EFFECT
// ==========================
const cursorAnimation = document.querySelector(".cursor");
const cursors = document.querySelectorAll(".cursor");

document.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if(cursorAnimation) {
    cursorAnimation.style.top = y + "px";
    cursorAnimation.style.left = x + "px";
  }

  cursors.forEach(cursor => {
    cursor.classList.add("active");
    setTimeout(() => cursor.classList.remove("active"), 1000);
  });

  if(cursorAnimation) {
    const cursorClone = cursorAnimation.cloneNode(true);
    document.body.appendChild(cursorClone);
    setTimeout(() => cursorClone.remove(), 1000);
  }
});

// Cursor dot & outline
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  if(cursorDot) {
    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;
  }

  if(cursorOutline) {
    cursorOutline.animate(
      { left: `${x}px`, top: `${y}px` },
      { duration: 300, fill: "forwards" }
    );
  }
});

// ==========================
// PORTFOLIO ARROW CLICK BUTTONS
// ==========================
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
  const portfolioDetails = document.querySelectorAll('.portfolio-detail');

  if(imgSlide) imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  portfolioDetails.forEach(detail => detail.classList.remove('active'));
  if(portfolioDetails[index]) portfolioDetails[index].classList.add('active');

  // Arrow disable logic
  if(arrowLeft) arrowLeft.classList.toggle('disabled', index === 0);
  if(arrowRight) arrowRight.classList.toggle('disabled', index === portfolioDetails.length - 1);
};

// Right arrow
if(arrowRight) {
  arrowRight.addEventListener('click', () => {
    const total = document.querySelectorAll('.portfolio-detail').length;
    if(index < total - 1) index++;
    activePortfolio();
  });
}

// Left arrow
if(arrowLeft) {
  arrowLeft.addEventListener('click', () => {
    if(index > 0) index--;
    activePortfolio();
  });
}

// Initialize portfolio
activePortfolio();

// ==========================
// SWIPER JS FOR TESTIMONIALS
// ==========================
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true, // fixed typo

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
