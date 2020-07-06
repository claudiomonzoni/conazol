// nav
const menuIco = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#mainNav");
const abierto = false;

let abrirMenuFull = () => {
  this.abierto = !this.abierto; mainNav.classList.remove("menuFullAbierto");mainNav.classList.remove("desanimaMenu");
  menuIco.classList.toggle("is-active");

  this.abierto
 ? mainNav.classList.toggle("menuFullAbierto")
: mainNav.classList.toggle("desanimaMenu");
};

menuIco.addEventListener("click", abrirMenuFull);



//carrusel

function cambio(){
  console.log(this.currentSlide)
}
const carrusel = new Siema({
  selector: "#hero",
  easing: 'ease-out',
  perPage: 1,
  loop: true,
  draggable: true,
  onChange: cambio,
});
