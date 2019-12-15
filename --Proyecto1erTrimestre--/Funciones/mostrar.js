function mostrarOcultar(id){

    let elementoTop = document.getElementById(id);
    if(!elementoTop) {
        return true;
    }

    if (elementoTop.style.display == "none") {
        elementoTop.style.display = "block";

    } else {
    elementoTop.style.display = "none";

    }

    return true;
}