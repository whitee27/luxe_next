document.querySelectorAll('.mobile-overlay__link').forEach(link => {
    link.addEventListener('click', () => document.getElementById('mobileOverlay').close());
  });