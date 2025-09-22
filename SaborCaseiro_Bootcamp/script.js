// Menu Hambúrguer - Dispositivos Móveis
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
});

// Desativa ao Clicar
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    menu.classList.remove("active");
  });
});
