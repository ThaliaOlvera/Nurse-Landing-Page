const openMenu = document.querySelector(".hamburgerMenu");
const nav = document.querySelector(".list_container");
const closeMenu = document.querySelector(".closeMenu");
const btn = document.querySelectorAll(".toggle-btn");
const cards = document.querySelectorAll(".info-cards-more");

openMenu.addEventListener("click", () => {
  nav.classList.add("visible");
  closeMenu.classList.add("visible");
  openMenu.classList.replace("hamburgerMenu", "inactive");
});

window.addEventListener("click", (e) => {
  if (!openMenu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("visible");
    openMenu.classList.replace("inactive", "hamburgerMenu");
  }
});

function addVisibleOnToggle() {
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const info = button.parentElement.querySelector(".info-cards-more");
      if (info) {
        info.classList.toggle("visible");
      }
    });
  });
}

window.addEventListener("click", (event) => {
  document.querySelectorAll(".info-cards-more.visible").forEach((info) => {
    if (!info.contains(event.target)) {
      info.classList.remove("visible");
    }
  });
});

addVisibleOnToggle();
