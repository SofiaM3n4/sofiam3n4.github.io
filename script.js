
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2 style="color: #e56b6f" >Estudiante de Fronted Jr | Analista en ciberseguridad Jr.</h2>')
    .pauseFor(2500)
    .deleteAll()
    .start();