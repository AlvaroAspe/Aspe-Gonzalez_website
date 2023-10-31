
function callback(entries){
   
entries.forEach (entry =>{
    const image = entry.target.querySelector('video');
    image.classList.toggle('unset',entry.isIntersecting);
});
   

}

//opciones para el observador-------------------------------------------
const options = {
    root: null,
    rootMargin:'-20px',
    threshold: 0.1
}
//Declaramos el observador y el elemento a observar--------------------
const observer = new IntersectionObserver(callback, options);
const element = document.querySelectorAll('.project');
//Loop para que el elemnto a observar sea cada uno de los poryectos----
element.forEach((element) => {
observer.observe(element);
})

function navegacionScroll() {
    var elementoNavegacion = document.querySelector("#cabecera");
    var navegacionAltura = elementoNavegacion.clientHeight;
    var elementoReferencia = document.querySelector(".portfolio");
    var botonera = document.querySelector("#botonera");
    var alturaBotonera = botonera.getBoundingClientRect().bottom;
  
    function revisarPosicion() {
      var posicionY = elementoReferencia.getBoundingClientRect().top;
      
      if (posicionY - alturaBotonera < 0) {
        botonera.classList.add("botonera_scroll");
      } else {
        botonera.classList.remove("botonera_scroll");
      }

      if (posicionY - navegacionAltura < 0) {
        elementoNavegacion.classList.add("scroll");
      } else {
        elementoNavegacion.classList.remove("scroll");
      }
    }
  
    window.addEventListener("scroll", revisarPosicion);
  }
  navegacionScroll();
  