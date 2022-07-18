/* función que me aplica el estilo a la opción seleccionada en el menú y quita previamente seleccionado */
function seleccionar(link){
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    
    // hacemos desaparecer el menú una vez se ha seleccionado una opción en el modo responsive
    let x = document.getElementById("nav");
    x.className = "";
}

/* función que muestra el menú responsive */
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

/* detectar el scrolling para aplicar la animación de las barras de habilidad */
window.onscroll = function(){
    efectoHabilidades()
}

/* función que aplica la animación de la barra de habilidades */
function efectoHabilidades(){
    let skills = document.getElementById("skill");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progeso1");
        document.getElementById("js").classList.add("barra-progeso2");
        document.getElementById("bd").classList.add("barra-progeso3");
        document.getElementById("php").classList.add("barra-progeso4");
    }
}