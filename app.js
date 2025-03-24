const openMenu = document.querySelector(".hamburgerMenu");
const nav = document.querySelector(".list_container");

openMenu.addEventListener("click", () => {
  nav.classList.add("visible");
  console.log("MenuAbierto");
});

window.addEventListener("click", (e) => {
  if (!openMenu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("visible");
    console.log("Menú cerrado");
  }
});
