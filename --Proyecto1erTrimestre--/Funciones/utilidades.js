
function tratarCadenasInput(cadena){
    let cadenaResultante = null;
    if(typeof(cadena) === "string"){
        let cadenaTratada = cadena.trim().toUpperCase();
        cadenaTratada = cadenaTratada.replace(/\s{2,}/g," ");
        if(cadenaTratada !== ""){
            cadenaResultante = cadenaTratada;
        }
    }
    return cadenaResultante;
}


function mostrarVuelosHTML(peliculasMostrar){
    let divPeliculas  = document.getElementById("peliculasMostrar");
    divPeliculas.innerHTML = "";
    if(peliculasMostrar.length === 0){
        divPeliculas.innerHTML = "NO HAY VUELOS QUE MOSTRAR";
    }else{
        peliculasMostrar.forEach( vuelo => vuelo.mostrarEnHTML(divPeliculas));
    }
}

function incluirVueloHTML(vuelo){
    let divPeliculas  = document.getElementById("peliculasMostrar");
    vuelo.mostrarEnHTML(divPeliculas);
}


function validarTituloPelicula(inputTitulo,divErrores){
	let esCorrecto = false;
	let tituloTratado = tratarCadenasInput(inputTitulo.value);

	if(tituloTratado === null || tituloTratado.length <= 1){
		marcarInputComoErroneo(inputTitulo,divErrores,'El titulo es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputTitulo);
	}
	return esCorrecto;
}


function validarPeliculaSeleccionada(inputPelicula,divErrores){
	let esCorrecto = false;
	let peliculaTratada = tratarCadenasInput(inputPelicula.value);

	if(peliculaTratada === null || peliculaTratada.length <= 1){
		marcarInputComoErroneo(inputPelicula,divErrores,'Debe seleccionar una vuelo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputPelicula);
	}
	return esCorrecto;
}

function validarOpcionSeleccionada(inputOpcion,divErrores){
	let esCorrecto = false;
	let opcionTratada = tratarCadenasInput(inputOpcion.value);

	if(opcionTratada === null || opcionTratada.length <= 1){
		marcarInputComoErroneo(inputOpcion,divErrores,'Debe seleccionar una opcion<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputOpcion);
	}
	return esCorrecto;
}


function validarNombreD(inputNombreD,divErrores){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(inputNombreD.value);
	let expresion = /^[A-Z]{2,}$/g
	if(!expresion.test(nombreTratado)){
		marcarInputComoErroneo(inputNombreD,divErrores,'El nombre del director es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputNombreD);
	}
	return esCorrecto;
}


function validarApellidoD(inputApellidoD,divErrores){
	let esCorrecto = false;
	let apellidoTratado = tratarCadenasInput(inputApellidoD.value);

	if(apellidoTratado === null || apellidoTratado.length < 1){
		marcarInputComoErroneo(inputApellidoD,divErrores,'El apellido del director es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputApellidoD);
	}
	return esCorrecto;
}

function validarNombreUsuario(inputNombreUsuario,divErrores){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(inputNombreUsuario.value);
	let expresion = /^[A-Z]{2,}$/g
	if(!expresion.test(nombreTratado)){
		marcarInputComoErroneo(inputNombreUsuario,divErrores,'El nombre del usuario es obligatorio<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputNombreUsuario);
	}
	return esCorrecto;
}


function validarGenero(inputGenero,divErrores){
	let esCorrecto = false;
	let generoTratado = tratarCadenasInput(inputGenero.value);

	if(generoTratado === null || generoTratado === ""){
		marcarInputComoErroneo(inputGenero,divErrores,'El genero es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputGenero);
	}
	return esCorrecto;
}


function validarNombreP(inputNombreP,divErrores){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(inputNombreP.value);

	if(nombreTratado === null || nombreTratado.length < 2){
		marcarInputComoErroneo(inputNombreP,divErrores,'El nombre de la productora es erroneo<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputNombreP);
	}
	return esCorrecto;
}

function validarLogitud(inputLongitud,divErrores){
	let esCorrecto = false;
	let longitudTratada = inputLongitud.value;

	if(longitudTratada === null || longitudTratada <= 0){
		marcarInputComoErroneo(inputLongitud,divErrores,'La longitud no puede ser menor que 0<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputLongitud);
	}
	return esCorrecto;
}

function quitarEspacios(cadena){
    let arrayPalabras = cadena.split(" ");
    let nuevaCadena = "";

    for (let i = 0; i < arrayPalabras.length; i++) {
        nuevaCadena += arrayPalabras[i];
    }
    return nuevaCadena;
}
function marcarInputComoCorrecto(input,divErrores){
	input.className  = 'correcto';

	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length > 0){
		for (let i = 0; i < spanError.length; i++) {
			divErrores.removeChild(spanError[i]);
			
		}
	}
}

function marcarInputComoErroneo(input,divErrores,textoError){
	input.className  = 'incorrecto';
	let padre = input.parentNode;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length === 0){
		let spanNuevo = document.createElement("span");
		spanNuevo.className = 'error';
		spanNuevo.innerHTML = textoError;
		divErrores.appendChild(spanNuevo.cloneNode(true));
	}
}


function vaciarDivErrores(divErrores){
    divErrores.innerHTML = "";
}

function focus(event){
    let input = event.target;
    input.style.backgroundColor = "rgba(15, 191, 219, 0.2)";
}

function blur(event){
    let input = event.target;
    input.style.backgroundColor = "";
}

function crearOpciones(input){

	for (let vuelo of peliculas) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", quitarEspacios(vuelo.titulo));
		opcion.innerHTML = `${vuelo.titulo}`;
		input.appendChild(opcion);
	}
}

function crearOpcionesPersonalizadas(nombre,input){
	let usuario = listaClientes.find(cliente => cliente.nombre === nombre);
	let pelisFavoritas = usuario.peliculasFav;
	input.innerHTML = "";
	let opcionDefault = document.createElement("option");
		opcionDefault.className = "opcion";
		opcionDefault.setAttribute("value", "");
		opcionDefault.innerHTML = `-Seleccionar-`;
	input.appendChild(opcionDefault);
	for (const peliFavorita of pelisFavoritas) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", quitarEspacios(peliFavorita.titulo));
		opcion.innerHTML = `${peliFavorita.titulo}`;
		input.appendChild(opcion);
	}
}
