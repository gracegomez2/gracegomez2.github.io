// G2 - Greys Gomez | Interacciones esenciales y accesibles

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const yearEl = document.getElementById('current-year');

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Estado visual del encabezado al desplazarse
if (header) {
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Navegacion movil accesible
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Formulario estatico compatible con GitHub Pages (abre cliente de correo o confirma recepcion)
if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const data = new FormData(contactForm);
    const nombre = String(data.get('nombre') || '').trim();
    const correo = String(data.get('correo') || '').trim();
    const area = String(data.get('area') || '').trim();
    const mensaje = String(data.get('mensaje') || '').trim();

    const targetEmail = contactForm.dataset.email || 'greysgr5@gmail.com';
    const subject = encodeURIComponent(`[G2] Consulta sobre ${area} - ${nombre}`);
    const body = encodeURIComponent(
      `Hola Greys Gomez,\n\nNombre: ${nombre}\nCorreo: ${correo}\nArea de interes: ${area}\n\nMensaje:\n${mensaje}\n`
    );

    formStatus.textContent =
      'Solicitud preparada. Se abrira tu aplicacion de correo para enviar el mensaje directamente.';
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    contactForm.reset();
  });
}
