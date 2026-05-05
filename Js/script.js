// ========================
//  Navbar scroll effect
// ========================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(255, 255, 255, 0.97)';
    navbar.style.boxShadow = '0 4px 30px rgba(255, 255, 255, 0.97)';
  } else {
    navbar.style.background = 'rgba(241, 241, 247, 0.62)';
    navbar.style.boxShadow = 'none';
  }
});
// ========================
//  Scroll reveal animación
// ========================
const revealEls = document.querySelectorAll('.card, .contact-card, .stat, .nosotros-content, .electric-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});

// ========================
//  Smooth scroll nav links
// ========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ========================
//  WhatsApp flotante: 
//  ocultar al inicio y
//  mostrar al bajar
// ========================
const waFloat = document.getElementById('waFloat');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    waFloat.style.opacity = '1';
    waFloat.style.pointerEvents = 'auto';
  } else {
    waFloat.style.opacity = '0';
    waFloat.style.pointerEvents = 'none';
  }
});

// Estado inicial invisible
waFloat.style.opacity = '0';
waFloat.style.transition = 'opacity 0.3s ease';
waFloat.style.pointerEvents = 'none';
