let listaUsuarios = [];

document.addEventListener("DOMContentLoaded",function(){

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup",validarNombre);

    let inputGmail = document.getElementById("gmail");
    inputGmail.addEventListener("keyup",validarGmail);

    let inputEdad = document.getElementById("edad");
    inputEdad.addEventListener("keyup",validarEdad);

    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", validarFormulario);
})


function validarNombre(){
    let esCorrecto = true;
    let inputNombre = document.getElementById("nombre");
    let valor = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    inputNombre.classList.remove("inputErroneo");
    inputNombre.classList.remove("inputCorrecto");


    //Nombre
    if(!/^[a-z A-Z]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Solo se permiten letras";
        listaErrores.appendChild(divError);
    }

    if(valor.length < 3){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "u nombre debe de tener al menos 3 letras";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputNombre.classList.add("inputCorrecto");
    }else{
        inputNombre.classList.add("inputErroneo");
    }

    return esCorrecto;

}

// Contraseña
function esValidaPassword() {
  
  	let esCorrecto = true;
    let inputPass = document.getElementById("pass");
    let valor = inputPass.value.trim();
    let listaErrores = document.getElementById("erroresPass");
    listaErrores.innerHTML = "";
    inputPass.classList.remove("inputErroneo");
    inputPass.classList.remove("inputCorrecto");

    if (!/(.*[a-zA-Z0-9]+.*){6,}/.test(valor)) { // 6 caracteres 
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tu password debe de tener minimo 6 caracteres";
        listaErrores.appendChild(divError);
    }
/*
    if (!valor.includes(/(.*[A-Z]+.*){1,}/)){ // 1 mayuscula
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tu password debe tener una mayuscula";
        listaErrores.appendChild(divError);
    }

    if (!valor.includes(/(.*[\!\?\-\$\_]+.*){1,}/)){ // 1 caracter especial
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tu password debe tener un caracter especial";
        listaErrores.appendChild(divError);
    }*/

    if (esCorrecto){
        inputPass.classList.add("inputCorrecto");
    }else{
        inputPass.classList.add("inputErroneo");
    }

    return esCorrecto;
    
}

//Gmail

function validarGmail(){
    let esCorrecto = true;
    let inputGmail = document.getElementById("gmail");
    let valor = inputGmail.value.trim();
    let listaErrores = document.getElementById("erroresGmail");
    listaErrores.innerHTML = "";
    inputGmail.classList.remove("inputErroneo");
    inputGmail.classList.remove("inputCorrecto");


    if (!valor.match(/^[a-zA-Z0-9]+/g)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tu Gmail debe empezar por una letra o número";
        listaErrores.appendChild(divError);
    }

    if (!(valor.endsWith(".com") || valor.endsWith(".es"))){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tu gmail debe terminar con .com o .es";
        listaErrores.appendChild(divError);
    }

    if (!valor.includes("@")){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tu gmail debe tener un \"@\"";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto){
        inputGmail.classList.add("inputCorrecto");
    }else{
        inputGmail.classList.add("inputErroneo");
    }

    return esCorrecto;
    
}

//Edad
function validarEdad(){
    let esCorrecto = true;
    let inputEdad = document.getElementById("edad");
    let valor = inputEdad.value.trim();
    let listaErrores = document.getElementById("erroresEdad");
    listaErrores.innerHTML = "";
    inputEdad.classList.remove("inputErroneo");
    inputEdad.classList.remove("inputCorrecto");

  
    if(!/^[0-9]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Solo numeros";
        listaErrores.appendChild(divError);
    }

    if(valor < 18){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tiene que ser mayor de 18";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputEdad.classList.add("inputCorrecto");
    }else{
        inputEdad.classList.add("inputErroneo");
    }

    return esCorrecto;

}



//Formulario
function validarFormulario(event) {
    event.preventDefault();

    let esFormularioCorrecto = false;
    let esCorrectoNombre = validarNombre();
    let esCorrectoGmail = validarGmail();
    let esCorrectoPass = validarPass();
    let esCorrectoEdad = validarEdad();
    
    if (esCorrectoNombre && esCorrectoEdad && esCorrectoGmail) {
        esFormularioCorrecto = true;
    }

    if (esFormularioCorrecto) {
      
        let lista = {};
        let nombre = document.getElementById("nombre").value.trim();
        let gmail = document.getElementById("gmail").value.trim();
        let pass = document.getElementById("pass").value.trim();
        let edad = document.getElementById("edad").value.trim();

        lista.nombre = nombre;
      	lista.gmail = gmail;
        lista.edad = edad;
        listaUsuarios.push(lista)

        alert("El usuario se registro correctamente!");
        console.log(listaUsuarios);
  
    } else {
        alert("Hay errores en el formulario!");
    }
    
}
