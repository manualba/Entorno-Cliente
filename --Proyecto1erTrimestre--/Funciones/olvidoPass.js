let listaUsuarios = [];

document.addEventListener("DOMContentLoaded",function(){

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup",validarNombre);

    let inputGmail = document.getElementById("gmail");
    inputGmail.addEventListener("keyup",validarGmail);

    let inputPass = document.getElementById("pass");
    inputPass.addEventListener("keyup",validarPass);

    let inputRePass = document.getElementById("repass");
    inputRePass.addEventListener("keyup",validarRePass);

    let inputPregunta = document.getElementById("pregunta");
    inputPregunta.addEventListener("change",validarPregunta);

    let inputCheckbox = document.getElementById("robot");
    inputCheckbox.addEventListener("click",validarCheckbox);

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
    if(!/^[a-z A-Z0-9]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Solo se permiten letras y numeros";
        listaErrores.appendChild(divError);
    }

    if(valor.length < 1){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Debes de escribir algo!!";
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

// Re-Contraseña
function validarRePass() {
  
  let esCorrecto = true;
  let inputRePass = document.getElementById("repass");
  let valor = inputRePass.value.trim();
  let inputPass = document.getElementById("pass");
  let valorPass = inputPass.value.trim();
  let listaErrores = document.getElementById("erroresRePass");
  listaErrores.innerHTML = "";
  inputRePass.classList.remove("inputErroneo");
  inputRePass.classList.remove("inputCorrecto");

  if(!(valor==valorPass)){
    esCorrecto = false;
    let divError = document.createElement("div");
    divError.innerHTML = "Las contraseñas no coinciden!!";
    listaErrores.appendChild(divError);
    }

    if(valor.length < 1){
        esCorrecto = false;
        let divError = document.createElement("div");
        listaErrores.appendChild(divError);
    }

  if (esCorrecto){
      inputRePass.classList.add("inputCorrecto");
  }else{
      inputRePass.classList.add("inputErroneo");
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


//Pregunta
function validarPregunta(){
    let esCorrecto = true;
    let inputProfesion = document.getElementById("pregunta");
    let select = document.getElementById("pregunta");
    let listaErrores = document.getElementById("erroresPregunta");
    listaErrores.innerHTML = "";
    inputProfesion.classList.remove("inputErroneo");
    inputProfesion.classList.remove("inputCorrecto");

   
    if (select.value === "") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Selecciona una respuesta valida!!";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputProfesion.classList.add("inputCorrecto");
    }else{
        inputProfesion.classList.add("inputErroneo");
    }

    return esCorrecto;

}


//Checkbox
function validarCheckbox(){
    let esCorrecto = true;
    let inputCheckbox = document.getElementById("robot");
    let check = document.getElementById("robot");
    let listaErrores = document.getElementById("erroresRobot");
    listaErrores.innerHTML = "";
    inputCheckbox.classList.remove("inputErroneo");
    inputCheckbox.classList.remove("inputCorrecto");

   
    if (!check.checked) {

        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Eres un robot???";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputCheckbox.classList.add("inputCorrecto");
    }else{
        inputCheckbox.classList.add("inputErroneo");
    }

    return esCorrecto;

}


//Formulario
function validarFormulario(event) {
    event.preventDefault();

    let esFormularioCorrecto = false;
    let esCorrectoGmail = validarGmail();
    let esCorrectoPass = validarPass();
    let esCorrectoRePass = validarRePass();
    let esCorrectoPregunta = validarPregunta();
    let esCorrectoNombre = validarNombre();
    let esCorrectoCheckbox = validarCheckbox();

    
    if (esCorrectoNombre &&  esCorrectoGmail && esCorrectoPass 
        && esCorrectoRePass && esCorrectoPregunta && esCorrectoCheckbox
        ) {
        esFormularioCorrecto = true;
    }

    if (esFormularioCorrecto) {
      
        let lista = {};
        let gmail = document.getElementById("gmail").value.trim();
        let pass = document.getElementById("pass").value.trim();
        let repass = document.getElementById("repass").value.trim();
        let pregunta = document.getElementById("pregunta").value.trim();
        let nombre = document.getElementById("nombre").value.trim();
        let robot = document.getElementById("robot").value.trim();

        lista.gmail = gmail;
        lista.pass = pass;
        lista.repass = repass;
        lista.pregunta = pregunta;
        lista.nombre = nombre;
        lista.robot = robot;
        listaUsuarios.push(lista)

        alert("El usuario se ha modificado correctamente!");
        console.log(listaUsuarios);
  
    } else {
        alert("Hay errores en el formulario!");
    }
    
}