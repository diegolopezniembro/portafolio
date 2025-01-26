window.addEventListener("scroll", () => {
  // Obtener todas las secciones y los enlaces de la barra lateral
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll("aside a");

  let currentSectionId = "";

  // Iterar sobre todas las secciones
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Verificar si la sección está visible en el viewport
    if (window.scrollY + window.innerHeight / 4 >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  // Eliminar la clase activa de todos los enlaces
  links.forEach((link) => {
    link.classList.remove("translate-x-3", "font-extrabold"); // Estilos predeterminados
  });

  // Marcar el enlace correspondiente con la clase activa
  if (currentSectionId) {
    const activeLink = document.querySelector(`aside a[href="#${currentSectionId}"]`);
    if (activeLink) {
      activeLink.classList.add("translate-x-3", "font-extrabold", "text-pC4", "duration-100"); // Clases para el enlace activo
    }
  }
});
