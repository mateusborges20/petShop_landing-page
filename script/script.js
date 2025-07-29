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
const linksInternos01 = document.querySelectorAll('.js-menu a[href^= "#"]');

function handleClick() {
  if (nav.classList.contains("opened")) {
    nav.classList.remove("opened");
    meuOpener.querySelector(".close-icon").style.display = "none";
    meuOpener.querySelector(".hamburguer-icon").style.display = "flex";
  }
}

linksInternos01.forEach((link) => {
  link.addEventListener("click", handleClick);
});

//scroll suave
const linksInternos = document.querySelectorAll('.js-menu a[href^= "#"]');

function scrollSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  if (section) {
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight || 100; // pega a altura real do header

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const offsetTop = sectionTop - headerHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

linksInternos.forEach((link) => {
  link.addEventListener("click", scrollSection);
});

