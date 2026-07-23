// Menú móvil (a completar cuando agregues el menú desplegable)
const menuBtn = document.querySelector('.header__menu-btn');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    console.log('Menú clickeado — aquí abres/cierras el menú móvil');
  });
}

// Cambiar estilo del header al hacer scroll (ejemplo simple)
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});