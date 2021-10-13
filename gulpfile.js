const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');


//Funcion que compila SASS
function css( ) {
    return src('src/scss/app.scss')
    .pipe( sass({
        outputStyle: 'expanded'
    }))
    .pipe( dest('./build/css') )

}

function minificarcss() {
    return src('src/scss/app.scss')
    .pipe( sass({
        outputStyle: 'compressed'
    }))
    .pipe( dest('./build/css') )
}

function javascript(){
    return src('src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(dest('./build/js'));
}


function imagenes() {
    return src('src/img/**/*')
    .pipe( imagemin() )
    .pipe( dest('./build/img'))
    .pipe( notify({ message: 'Imagen minificada'}) );
}

function versionWebp(){
    return src('src/img/**/*')
    .pipe(webp() )
    .pipe(dest('./build/img'))
    .pipe( notify({message: 'Version Webp lista'}));

}

function watchArchivos() {
    watch('src/scss/**/*.scss', css); // * = la carpeta actual     ** = todos los archivos con esa extension
    watch('src/js/**/*.js', javascript); 
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css,javascript, imagenes, versionWebp, watchArchivos);









/*ejemplo
const { series, parallel } = require('gulp');

function css( done ) {
console.log('compilando SASS');

  done();
}

function javascript ( done) {
    console.log('compilando javascript');

    done();
}

function minificarHTML ( done ) {
    console.log('Minificando...');

    done();
}

exports.css = css;
exports.javascript = javascript;
//exports.tareas = series( css, javascript, minificarHTML);
exports.tareas = parallel ( css, javascript, minificarHTML);
*/
