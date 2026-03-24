const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    // animação do logo
    menuToggle.innerHTML = '<img src="imagens/logo.jpg" alt="Logo" style="height:24px;">';
    setTimeout(() => {
      menuToggle.textContent = "☰";
    }, 600); // volta ao ☰ após 0.6s

    // abre/fecha menu
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
}

// fecha ao clicar fora
document.addEventListener("click", (event) => {
  const isClickInside =
    navLinks.contains(event.target) ||
    mobileMenu.contains(event.target) ||
    menuToggle.contains(event.target);

  if (!isClickInside) {
    navLinks.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});