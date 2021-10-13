document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija();

});

function navegacionFija() {

    const barra = document.querySelector('.header');

    //Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
       if(entries[0].isIntersecting) {
          barra.classList.remove('fijo');
       }else {
           barra.classList.add('fijo');
       }
    });

    //Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}




function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function( enlace ) {
        enlace.addEventListener('click', function(evento) {
            evento.preventDefault();

            const seccion = document.querySelector(evento.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });



        });
    });

}
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;


        //Anadir la funcion de mostrarImagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(evento) {

    const id = parseInt(evento.target.dataset.imagenId );
    //console.log(id);


    //Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/GRANDE/${id}.webp`;

    //console.log(imagen);
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cuando se da click, cerrar imagen
    overlay.onclick = function() {
        overlay.remove();
    }

    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Cuando se presiona se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
    }

    overlay.appendChild(cerrarImagen);

    //mostrar en HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');

}