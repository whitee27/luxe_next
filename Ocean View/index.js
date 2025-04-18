document.querySelectorAll('.mobile-overlay__link').forEach(link => {
    link.addEventListener('click', () => document.getElementById('mobileOverlay').close());
  });

  function moveForm() {
    const formContainer = document.querySelector('.hero__header-form');
    const headerContainer = document.querySelector('.hero__header');

    if (window.innerWidth <= 768) {
      headerContainer.appendChild(formContainer);
    } else {
        const textContainer = document.querySelector('.hero__header-text');
        headerContainer.insertBefore(formContainer, textContainer.nextSibling);
    }
}

window.addEventListener('load', moveForm);
window.addEventListener('resize', moveForm);