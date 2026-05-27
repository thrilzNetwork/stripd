document.addEventListener('DOMContentLoaded', function() {
  // Staggered card animations
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card, i) => {
    card.style.animationDelay = `${i * 80}ms`;
    card.classList.add('animate-in');
  });

  // Fade in hero content
  const hero = document.querySelector('.hero-content');
  if (hero) {
    setTimeout(() => {
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }, 100);
  }

  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.reveal, [data-reveal]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Stagger children reveal
  const staggerContainers = document.querySelectorAll('.stagger-children');

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  staggerContainers.forEach(el => staggerObserver.observe(el));

  // Magnetic button effect
  const magneticBtns = document.querySelectorAll('.magnetic');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // Parallax effect on scroll
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        parallaxElements.forEach(el => {
          const speed = el.dataset.parallax || 0.5;
          const rect = el.getBoundingClientRect();
          const scrolled = window.scrollY;
          const rate = scrolled * speed;

          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.style.transform = `translateY(${rate}px)`;
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector('.header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // Image lazy loading with fade
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';

        img.onload = () => {
          img.style.opacity = '1';
        };

        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
});
