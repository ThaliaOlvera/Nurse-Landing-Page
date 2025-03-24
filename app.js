const togleMenu = document.querySelector(".hamburgerMenu");
const infoMenu = document.querySelector(".list_container");

togleMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  togleMenu.classList.add("list_container");
  console.log("MenuAbierto");
});

window.addEventListener("click", (e) => {
  if (!togleMenu.contains(e.target) && !togleMenu.contains(e.target)) {
    togleMenu.classList.remove("list_container");

    console.log("Cerrado");
  }
});
