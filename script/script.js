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
