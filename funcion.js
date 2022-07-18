/* función que me aplica el estilo a la opción seleccionada en el menú y quita previamente seleccionado */
function seleccionar(link){
    let opciones = document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    
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