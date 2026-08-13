document.addEventListener('DOMContentLoaded', () => {
  const menuButtons = document.querySelectorAll('.hamburger, .ham-menu');

  menuButtons.forEach((button) => {
    const nav = button.closest('.top-bar')?.querySelector('.nav_container');

    if (!nav) return;

    button.addEventListener('click', () => {
      const isOpen = button.classList.toggle('active');
      nav.classList.toggle('open', isOpen);
      button.setAttribute('aria-expanded', String(isOpen));
    });

    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        button.classList.remove('active');
        nav.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      });
    });
  });
});
