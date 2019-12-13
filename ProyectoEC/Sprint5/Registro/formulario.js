

document.addEventListener("DOMContentLoaded", function () {

    let inputProfesion = document.getElementById("profesion");
    inputProfesion.addEventListener("click", validarProfesion);

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup", validarNombre);

    let inputApellidos = document.getElementById("apellidos");
    inputApellidos.addEventListener("keyup", validarApellidos);

    let inputEdad = document.getElementById("edad");
    inputEdad.addEventListener("keyup", validarEdad);

    let inputTerminos = document.getElementById("terminos");
    inputTerminos.addEventListener("click", validarTerminos);

    let registro = document.getElementById("registro");
    registro.addEventListener("submit", validarFormulario);
})

function validarNombre(event) {
    let esCorrecto = true;
    let inputNombre = document.getElementById("nombre");
    let valor = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    inputNombre.classList.remove("inputErroneo");
    inputNombre.classList.remove("inputCorrecto");


    //Comprobamos que usa solo letras
    if (!/^[a-z A-ZñÑáéíóúÁÉÍÓÚ]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Solo deben usarse caracteres";
        listaErrores.appendChild(divError);
    }

    if (valor.length < 5) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Debe contener al menos 5 caracteres";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        inputNombre.classList.add("inputCorrecto");
    } else {
        inputNombre.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarApellidos(event) {
    let esCorrecto = true;
    let inputApellidos = document.getElementById("apellidos");
    let valor = inputApellidos.value.trim();
    let listaErrores = document.getElementById("erroresApellidos");
    let inputNombre = document.getElementById("nombre");
    let valorNombre = inputNombre.value.trim();
    listaErrores.innerHTML = "";
    inputApellidos.classList.remove("inputErroneo");
    inputApellidos.classList.remove("inputCorrecto");


    //Comprobamos que usa solo letras
    if (!/^[a-z A-Z]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Solo deben usarse caracteres";
        listaErrores.appendChild(divError);
    }

    if (valor.length < 5) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Debe contener al menos 5 caracteres";
        listaErrores.appendChild(divError);
    }
    //Comprobamos que el apellido no sea igual al nombre
    if (valor === valorNombre) {

        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Su nombre y apellidos no pueden coincidir";
        listaErrores.appendChild(divError);

    }

    if (esCorrecto) {
        inputApellidos.classList.add("inputCorrecto");
    } else {
        inputApellidos.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarEdad(event) {
    let esCorrecto = true;
    let inputEdad = document.getElementById("edad");
    let valor = inputEdad.value.trim();
    let listaErrores = document.getElementById("erroresEdad");
    listaErrores.innerHTML = "";
    inputEdad.classList.remove("inputErroneo");
    inputEdad.classList.remove("inputCorrecto");


    //Comprobamos que usa solo letras
    if (valor < 18) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tiene que ser mayor de edad";
        listaErrores.appendChild(divError);
    }

    //La edad solo puede contener números
    if (!/^[0-9]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Solo deben usarse números";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        inputEdad.classList.add("inputCorrecto");
    } else {
        inputEdad.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarProfesion(event) {
    let esCorrecto = true;
    let inputProfesion = document.getElementById("profesion");
    let valor = inputProfesion.value.trim();
    let listaErrores = document.getElementById("erroresProfesion");
    listaErrores.innerHTML = "";
    inputProfesion.classList.remove("inputErroneo");
    inputProfesion.classList.remove("inputCorrecto");

    if (valor === "ninguna") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Por favor, seleccione una profesión";
        listaErrores.appendChild(divError);
    }
    if (esCorrecto) {
        inputProfesion.classList.add("inputCorrecto");
    } else {
        inputProfesion.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarTerminos() {

    let esCorrecto = true;
    let inputTerminos = document.getElementById("terminos");
    let listaErrores = document.getElementById("erroresTerminos");
    listaErrores.innerHTML = "";
    inputTerminos.classList.remove("inputErroneo");
    inputTerminos.classList.remove("inputCorrecto");

    if (!inputTerminos.checked) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Debe aceptar los Términos y Condiciones";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        inputTerminos.classList.add("inputCorrecto");
    } else {
        inputTerminos.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarFormulario(event) {
    event.preventDefault();

    let esFormularioCorrecto = false;
    let esCorrectoNombre = validarNombre();
    let esCorrectoApellidos = validarApellidos();
    let esCorrectoEdad = validarEdad();
    let esCorrectoProfesion = validarProfesion();
    let esCorrectoTerminos = validarTerminos();
    if (esCorrectoNombre &&
        esCorrectoApellidos &&
        esCorrectoEdad &&
        esCorrectoProfesion &&
        esCorrectoTerminos) {
        esFormularioCorrecto = true;
    }

    if (esFormularioCorrecto) {
        //let registro = event.target;
       // registro.submit();

        let usuario = {};
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        let profesion = document.getElementById("profesion").value;
        let edad = document.getElementById("edad").value.trim();
        let terminos = document.getElementById("terminos").value.trim();
        usuario.nombre = nombre;
        usuario.apellidos = apellidos;
        usuario.edad = edad;
        usuario.profesion = profesion;
        usuario.terminos = terminos;

        listaUsuarios.push(usuario);


        alert("Usuario registrado con éxito");
        registro.reset();


        let divNombre = document.getElementById("nombre");
        divNombre.innerHTML = usuario.nombre;

        let divApellidos = document.getElementById("apellidos");
        divApellidos.innerHTML = usuario.apellidos;

        let divEdad = document.getElementById("edad");
        divEdad.innerHTML = usuario.edad;

        let divProfesion = document.getElementById("profesion");
        divProfesion.innerHTML = usuario.profesion;

        let divTerminos = document.getElementById("terminos");
        divTerminos.innerHTML = usuario.terminos;
    } else {
        alert("HAY ERRORES EN EL FORMULARIO");
    }
}