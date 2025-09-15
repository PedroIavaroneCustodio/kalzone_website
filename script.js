document.addEventListener('DOMContentLoaded', () => {
  // Scroll-in
  const animated = document.querySelectorAll('.animate-on-scroll');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  animated.forEach(el => io.observe(el));

  // Carrossel do HERO
  const slides = document.querySelectorAll('.banner-carousel .slide');
  if (slides.length > 0) {
    let i = 0;
    setInterval(() => {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 5000);
  }

  // Mock da busca
  const searchInput = document.querySelector('.search-bar input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value;
      if (q.length > 2) {
        console.log('Buscando por:', q);
      }
    });
  }
});
