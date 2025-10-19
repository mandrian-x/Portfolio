// script.js - small helpers for nav + contact form + animations

document.addEventListener('DOMContentLoaded', function () {
  initNavToggle();
  markActiveNav();
  // Simple micro-animation: slightly delay reveal of hero elements
  const hero = document.querySelector('.hero-inner');
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(8px)';
    setTimeout(()=> {
      hero.style.transition = 'all 420ms cubic-bezier(.22,.9,.35,1)';
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 160);
  }
});

// Mobile nav toggle
function initNavToggle(){
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.closest('.nav');
      if (nav) nav.classList.toggle('open');
    });
  });
}

// Mark link active based on URL
function markActiveNav(){
  const links = document.querySelectorAll('.nav-btn');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === current) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}

// Contact form handling: local echo (no backend) — instructs user how to connect a backend
window.handleContact = function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msg = document.getElementById('formMsg');

  if(!name || !email || !message){
    msg.textContent = 'Please fill in all fields.';
    return;
  }

  // Simple validation
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    msg.textContent = 'Please enter a valid email.';
    return;
  }

  // Fake "send" action: in production, replace with fetch() to your backend or form service
  msg.textContent = 'Sending message...';
  setTimeout(()=> {
    msg.textContent = 'Thank You for your message, ' + name + '! We will get back to you soon.';
    document.getElementById('contactForm').reset();
  }, 900);
};
