let listaUsuarios = [];

document.addEventListener("DOMContentLoaded",function(){

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup",validarNombre);

    let inputApellidos = document.getElementById("apellidos");
    inputApellidos.addEventListener("keyup",validarApellidos);

    let inputGmail = document.getElementById("gmail");
    inputGmail.addEventListener("keyup",validarGmail);

    let inputEdad = document.getElementById("edad");
    inputEdad.addEventListener("keyup",validarEdad);

    let inputProfesion = document.getElementById("profesion");
    inputProfesion.addEventListener("change",validarProfesion);

    let inputCheckbox = document.getElementById("cookies");
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
    if(!/^[a-z A-Z]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: Solo se permiten letras";
        listaErrores.appendChild(divError);
    }

    if(valor.length < 3){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: Tu nombre debe de tener al menos 3 letras";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputNombre.classList.add("inputCorrecto");
    }else{
        inputNombre.classList.add("inputErroneo");
    }

    return esCorrecto;

}

//Apellidos
function validarApellidos(){
    let esCorrecto = true;
    let inputApellidos = document.getElementById("apellidos");
    let valor = inputApellidos.value.trim();
    let inputNombre = document.getElementById("nombre");
    let valorNombre = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresApellidos");
    listaErrores.innerHTML = "";
    inputApellidos.classList.remove("inputErroneo");
    inputApellidos.classList.remove("inputCorrecto");

    if(!/^[a-z A-Z]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: Solo se permiten letras";
        listaErrores.appendChild(divError);
    }

    if(valor.length < 3){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: Tus apellidos deben de tener al menos 3 letras";
        listaErrores.appendChild(divError);
    }

    if(valor==valorNombre){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: Tu apellido no puede ser igual que tu nombre";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputApellidos.classList.add("inputCorrecto");
    }else{
        inputApellidos.classList.add("inputErroneo");
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

    if (valor.toLocaleLowerCase().includes('manuel') ||
        valor.toLocaleLowerCase().includes('alba') ||
        valor.toLocaleLowerCase().includes('hornillo')) {
            esCorrecto = false;
            let divError = document.createElement("div");
            divError.innerHTML = "MAH dice: No puede contener las palabras Manuel, Alba u Hornillo";
            listaErrores.appendChild(divError);
    }

    if (!valor.match(/^[a-zA-Z0-9]+/g)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: Tu Gmail debe empezar por una letra o número";
        listaErrores.appendChild(divError);
    }

    if (!valor.endsWith("mah.com")){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: tu gmail debe terminar con mah.com";
        listaErrores.appendChild(divError);
    }

    if (!valor.includes("@")){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: tu gmail debe tener un \"@\"";
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
        divError.innerHTML = "MAH dice: Solo numeros";
        listaErrores.appendChild(divError);
    }

    if(valor < 18){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: Tiene que ser mayor de 18";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputEdad.classList.add("inputCorrecto");
    }else{
        inputEdad.classList.add("inputErroneo");
    }

    return esCorrecto;

}

//Profesion
function validarProfesion(){
    let esCorrecto = true;
    let inputProfesion = document.getElementById("profesion");
    let select = document.getElementById("profesion");
    let listaErrores = document.getElementById("erroresProfesion");
    listaErrores.innerHTML = "";
    inputProfesion.classList.remove("inputErroneo");
    inputProfesion.classList.remove("inputCorrecto");

   
    if (select.value === "") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: No puedes seleccionar NINGUNO como profesion";
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
    let inputCheckbox = document.getElementById("cookies");
    let check = document.getElementById("cookies");
    let listaErrores = document.getElementById("erroresCookies");
    listaErrores.innerHTML = "";
    inputCheckbox.classList.remove("inputErroneo");
    inputCheckbox.classList.remove("inputCorrecto");

   
    if (!check.checked) {

        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "MAH dice: Acepta las cookies!!";
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
    let esCorrectoNombre = validarNombre();
    let esCorrectoApellidos = validarApellidos();
    let esCorrectoEdad = validarEdad();
    let esCorrectoProfesion = validarProfesion();
    let esCorrectoCheckbox = validarCheckbox();
    
    if (esCorrectoNombre && esCorrectoApellidos && esCorrectoProfesion && esCorrectoEdad 
        && esCorrectoCheckbox) {
        esFormularioCorrecto = true;
    }

    if (esFormularioCorrecto) {
      
        let lista = {};
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        let profesion = document.getElementById("profesion").value;
        let edad = document.getElementById("edad").value.trim();

        lista.nombre = nombre;
        lista.apellidos = apellidos;
        lista.edad = edad;
        lista.profesion = profesion;
        listaUsuarios.push(lista)

        alert("MAH dice: El usuario se registro correctamente!");
        console.log(listaUsuarios);
  
    } else {
        alert("MAH dice: Tienes errores en el formulario!");
    }
    
}
