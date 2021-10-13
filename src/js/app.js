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