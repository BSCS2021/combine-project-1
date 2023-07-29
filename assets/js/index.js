
  let currentSlideIndex = 0;
  const slideCount = document.querySelectorAll('.slide').length;

 
  function startCarouselAutoplay() {
    const carousel = document.querySelector('.carousel');
    carousel.classList.add('play');
  }

 
  function stopCarouselAutoplay() {
    const carousel = document.querySelector('.carousel');
    carousel.classList.remove('play');
  }
 
  function moveNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slideCount;
    const carousel = document.querySelector('.carousel');
    carousel.style.setProperty('--currentSlideIndex', currentSlideIndex);
    stopCarouselAutoplay();
    setTimeout(() => {
      startCarouselAutoplay();
    }, 3000);
  }  
  function initCarouselObserver() {
    const carousel = document.querySelector('.carousel');
    const options = {
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCarouselAutoplay();
         
        } else {
          stopCarouselAutoplay();
        }
      });
    }, options);

    observer.observe(carousel);
  }

  document.addEventListener('DOMContentLoaded', initCarouselObserver);



