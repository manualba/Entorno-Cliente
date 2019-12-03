let listaUsuarios = [];

//Usuario
$(() => $("#nombre").keyup(() => { 
    let esCorrecto = true;
    let inputNombre = document.getElementById("nombre");
    let valor = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    inputNombre.classList.remove("inputErroneo");
    inputNombre.classList.remove("inputCorrecto");

    if(!/^[a-zA-Z0-9]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Solo se permiten caracteres normales y sin espacios";
        listaErrores.appendChild(divError);
    }

    if(valor.length < 4){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tu usuario debe de tener al menos 4 caracteres";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputNombre.classList.add("inputCorrecto");
    }else{
        inputNombre.classList.add("inputErroneo");
    }

    return esCorrecto;
}));

//Password
$(() => $("#pass").keyup(() => { 
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

}));

//Email
$(() => $("#email").keyup(() => { 
    let esCorrecto = true;
    let inputEmail = document.getElementById("email");
    let valor = inputEmail.value.trim();
    let listaErrores = document.getElementById("erroresEmail");
    listaErrores.innerHTML = "";
    inputEmail.classList.remove("inputErroneo");
    inputEmail.classList.remove("inputCorrecto");


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
        inputEmail.classList.add("inputCorrecto");
    }else{
        inputEmail.classList.add("inputErroneo");
    }

    return esCorrecto;

}));

//NombrePropietario
$(() => $("#nomProp").keyup(() => { 
    let esCorrecto = true;
    let inputNomProp = document.getElementById("nomProp");
    let valor = inputNomProp.value.trim();
    let listaErrores = document.getElementById("erroresNomProp");
    listaErrores.innerHTML = "";
    inputNomProp.classList.remove("inputErroneo");
    inputNomProp.classList.remove("inputCorrecto");

    if(!/^[a-z A-Z]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Solo se permiten letras";
        listaErrores.appendChild(divError);
    }

    if(valor.length < 5){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Tu nombre debe de tener al menos 5 letras";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputNomProp.classList.add("inputCorrecto");
    }else{
        inputNomProp.classList.add("inputErroneo");
    }

    return esCorrecto;
}));


//NombrePropietario
$(() => $("#numT").keyup(() => { 
    let esCorrecto = true;
    let inputNumT = document.getElementById("numT");
    let valor = inputNumT.value.trim();
    let listaErrores = document.getElementById("erroresNumT");
    listaErrores.innerHTML = "";
    inputNumT.classList.remove("inputErroneo");
    inputNumT.classList.remove("inputCorrecto");

    if(!/^[0-9]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Solo se permiten numeros";
        listaErrores.appendChild(divError);
    }

    if(!/^.{16}$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "El numero de tu tarjeta es erroneo, debe tener 16 numeros";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputNumT.classList.add("inputCorrecto");
    }else{
        inputNumT.classList.add("inputErroneo");
    }

    return esCorrecto;
}));


//CVV
$(() => $("#cvv").keyup(() => { 
    let esCorrecto = true;
    let inputCvv = document.getElementById("cvv");
    let valor = inputCvv.value.trim();
    let listaErrores = document.getElementById("erroresCvv");
    listaErrores.innerHTML = "";
    inputCvv.classList.remove("inputErroneo");
    inputCvv.classList.remove("inputCorrecto");

    if(!/^[0-9]+$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "Solo se permiten numeros";
        listaErrores.appendChild(divError);
    }

    if(!/^.{3}$/.test(valor)){
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "El CVV debe contener 3 numeros";
        listaErrores.appendChild(divError);
    }

    if(esCorrecto){
        inputCvv.classList.add("inputCorrecto");
    }else{
        inputCvv.classList.add("inputErroneo");
    }

    return esCorrecto;
}));


//Formulario
$(() => $("#formulario").click(() => { 
    levent.preventDefault();

    let esFormularioCorrecto = false;
    let esCorrectoNombre = $("#nombre");
    let esCorrectoEmail = $("#email");
    let esCorrectoPass = $("#pass");
    let esCorrectoNomProp = $("#nomProp");
    let esCorrectoNumT = $("#numT");
    let esCorrectoCvv = $("#cvv");
    //let esCorrectoFechaV = $("#fechaV");
    

    
    if (esCorrectoNombre &&  esCorrectoEmail && esCorrectoPass 
        && esCorrectoNomProp && esCorrectoNumT && esCorrectoCvv 
        && $("#fechaV").text().includes("")
        ) {
        esFormularioCorrecto = true;

        alert("Reservado con exito!");
        console.log(listaUsuarios);
  
    } else {
        alert("ERROR! Complete bien sus datos");
    }
    

}));

