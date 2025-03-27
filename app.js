const openMenu = document.querySelector(".hamburgerMenu");
const nav = document.querySelector(".list_container");
const closeMenu = document.querySelector(".closeMenu");
const btn = document.getElementById("btn-veins");
const info = document.querySelector(".info-cards-more");

openMenu.addEventListener("click", () => {
  nav.classList.add("visible");
  closeMenu.classList.add("visible");
  openMenu.classList.replace("hamburgerMenu", "inactive");
});

window.addEventListener("click", (e) => {
  if (
    !openMenu.contains(e.target) &&
    !nav.contains(e.target) &&
    !closeMenu.contains(e.target)
  ) {
    nav.classList.remove("visible");
    openMenu.classList.replace("inactive", "hamburgerMenu");
  }
});

function toggleCards(button, info) {
  button.addEventListener("click", () => {
    info.classList.add("visible");
  });
}

toggleCards(btn, info);
