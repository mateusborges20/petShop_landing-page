//menu

let meuOpener = document.querySelector(".menu-opener");
let nav = document.querySelector("header nav");

//adicionar o evento de click ao clicar no menu hamburguer

meuOpener.addEventListener("click", () => {
  if (nav.classList.contains("opened")) {
    nav.classList.remove("opened");
    meuOpener.querySelector(".close-icon").style.display = "none";
    meuOpener.querySelector(".hamburguer-icon").style.display = "flex";
  } else {
    nav.classList.add("opened");
    meuOpener.querySelector(".close-icon").style.display = "flex";
    meuOpener.querySelector(".hamburguer-icon").style.display = "none";
  }
});

//scroll suave
const linksInternos = document.querySelectorAll('.js-menu a[href^= "#"]');

function scrollSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");

  const section = document.querySelector(href);

  //verificação se a section existe
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollSection);
});
