let listaUsuarios = [];

document.addEventListener("DOMContentLoaded",function(){

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup",validarNombre);

    let inputGmail = document.getElementById("gmail");
    inputGmail.addEventListener("keyup",validarGmail);

    let inputPass = document.getElementById("pass");
    inputPass.addEventListener("keyup",validarPass);

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
        divError.innerHTML = "Tu nombre debe de tener al menos 3 letras";
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
function validarPass() {
  
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

    if (!/(.*[A-Z]+.*){1,}/.test(valor)){ // 1 mayuscula
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tu password debe tener una mayuscula";
        listaErrores.appendChild(divError);
    }

    if (!/(.*[\!\?\-\$\_]+.*){1,}/.test(valor)){ // 1 caracter especial
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tu password debe tener un caracter especial";
        listaErrores.appendChild(divError);
    }

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




//Formulario
function validarFormulario(event) {
    event.preventDefault();

    let esFormularioCorrecto = false;
    let esCorrectoNombre = validarNombre();
    let esCorrectoGmail = validarGmail();
    let esCorrectoPass = validarPass();

    
    if (esCorrectoNombre &&  esCorrectoGmail && esCorrectoPass) {
        esFormularioCorrecto = true;

        return document.getElementById("ver").classList.remove("inactivo");

    }

    if (esFormularioCorrecto) {
      
        let lista = {};
        let nombre = document.getElementById("nombre").value.trim();
        let gmail = document.getElementById("gmail").value.trim();
        let pass = document.getElementById("pass").value.trim();

        lista.nombre = nombre;
        lista.gmail = gmail;
        lista.pass = pass;
        listaUsuarios.push(lista)

        alert("El usuario se registro correctamente!");
        console.log(listaUsuarios);
  
    } else {
        alert("Hay errores en el formulario!");
    }
    
}