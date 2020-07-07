//get menu height
const menuheight = document.querySelector("#mainNav").offsetHeight;
document.querySelector("#hero").style.marginTop = `${menuheight}px`;

//only phones
var x = window.matchMedia("(max-width: 479px)");
esCell(x); // Call listener function at run time
x.addListener(esCell); // Attach listener function on state changes

// nav

function esCell(x) {
  if (x.matches) {
    // If media query matches
    const menuIco = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector("#mainNav");
    const anchor = document.querySelector(".anchor");
    const abierto = false;

    let abrirMenuFull = () => {
      this.abierto = !this.abierto;
      mainNav.classList.remove("menuFullAbierto");
      mainNav.classList.remove("desanimaMenu");
      menuIco.classList.toggle("is-active");

      this.abierto
        ? mainNav.classList.toggle("menuFullAbierto")
        : mainNav.classList.toggle("desanimaMenu");
    };

    menuIco.addEventListener("click", abrirMenuFull);
    anchor.addEventListener("click", abrirMenuFull);
  } else {
    return;
  }
}
//change active class on scroll
const links = document.querySelectorAll("#anchor a");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

// smooth the scroll

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

//carrusel

function cambio() {
  console.log(this.currentSlide);
}
const carrusel = new Siema({
  selector: "#hero",
  easing: "ease-out",
  perPage: 1,
  loop: true,
  draggable: true,
  onChange: cambio,
});

// arrow
const arrow = document.getElementById("arrow");
const ui = document.getElementById("ui");

const open = true;

arrow.addEventListener("click", (e) => {
  console.log("hola");
  e.preventDefault();
  ui.classList.remove("openUi");
  ui.classList.remove("closeUi");
  if (this.open) {
    ui.classList.add("closeUi");
    arrow.innerHTML = "&rsaquo;";
  } else {
    ui.classList.add("openUi");
    arrow.innerHTML = "&lsaquo;";
  }

  this.open = !this.open;
});

//scroll e
new WOW().init();
