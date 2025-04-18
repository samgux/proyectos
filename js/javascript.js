function expandirMenu() {
    const menuMovil = document.querySelector(".menu-movil");
    const menuInactivo = document.querySelector(".menu-inactivo");
    const menuActivo = document.querySelector(".menu-activo");
  
    // Alternar la clase "activo" en el menú móvil
    menuMovil.classList.toggle("activo");
  
    // Cambiar la visibilidad de los iconos
    const isMenuVisible = menuMovil.classList.contains("activo");
    menuInactivo.style.display = isMenuVisible ? "none" : "flex";
    menuActivo.style.display = isMenuVisible ? "flex" : "none";
  }
  
  // Cerrar el menú al hacer clic en un enlace
  document.querySelectorAll(".menu-movil a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      const menuMovil = document.querySelector(".menu-movil");
      const menuInactivo = document.querySelector(".menu-inactivo");
      const menuActivo = document.querySelector(".menu-activo");
  
      // Remover la clase "activo" para cerrar el menú
      menuMovil.classList.remove("activo");
  
      // Restaurar la visibilidad de los íconos
      menuInactivo.style.display = "flex";
      menuActivo.style.display = "none";
    });
  });