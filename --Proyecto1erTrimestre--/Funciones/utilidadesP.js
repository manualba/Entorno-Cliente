
function tratarCadenasInput(cadena){
    let cadenaResultante = undefined;
    if(typeof(cadena) === "string"){
        let cadenaTratada = cadena.trim().toUpperCase();
        cadenaTratada = cadenaTratada.replace(/\s{2,}/g," ");
        if(cadenaTratada !== ""){
            cadenaResultante = cadenaTratada;
        }
    }
    return cadenaResultante;
}


function mostrarVuelosHTML(vuelosmostrar){
    let divVuelos  = document.getElementById("vuelosmostrar");
    divVuelos.innerHTML = "";
    if(vuelosmostrar.length === 0){
        divVuelos.innerHTML = "No hay vuelos a mostar";
    }else{
        vuelosmostrar.forEach( vuelo => vuelo.mostrarEnHTML(divVuelos));
    }
}

function incluirVueloHTML(vuelo){
    let divVuelos  = document.getElementById("vuelosmostrar");
    vuelo.mostrarEnHTML(divVuelos);
}


function validarVueloP(cadena){
	let esCorrecto = false;
	let tituloTratado = tratarCadenasInput(cadena);

	if(tituloTratado === undefined || tituloTratado.length <= 1){
	}else{
		esCorrecto = true;
	}
	return esCorrecto;
}


function validarVueloSeleccionadoV(cadena){
	let esCorrecto = false;
	let vuelotratado = tratarCadenasInput(cadena);

	if(vuelotratado === undefined || vuelotratado.length <= 1){
	}else{
		esCorrecto = true;
	}
	return esCorrecto;
}

function validarOpcionSeleccionadaP(cadena){
	let esCorrecto = false;
	let opcionTratada = tratarCadenasInput(cadena);

	if(opcionTratada === undefined || opcionTratada.length <= 1){
	}else{
		esCorrecto = true;
	}
	return esCorrecto;
}


function validarNombreDP(cadena){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(cadena);
	let expresion = /^[A-Z]{2,}$/g
	if(!expresion.test(nombreTratado)){
	}else{
		esCorrecto = true;
	}
	return esCorrecto;
}


function validarApellidoDP(cadena){
	let esCorrecto = false;
	let apellidoTratado = tratarCadenasInput(cadena);

	if(apellidoTratado === undefined || apellidoTratado.length < 1){
	}else{
		esCorrecto = true;
	}
	return esCorrecto;
}
function validarNombreUsuarioP(cadena){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(cadena);
	let expresion = /^[A-Z]{2,}$/g
	if(!expresion.test(nombreTratado)){
	}else{
		esCorrecto = true;
	}
	return esCorrecto;
}


function validarGeneroP(cadena){
	let esCorrecto = false;
	let generoTratado = tratarCadenasInput(cadena);

	if(generoTratado === undefined || generoTratado === ""){
	}else{
		esCorrecto = true;
	}
	return esCorrecto;
}


function validarNombrePP(cadena){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(cadena);

	if(nombreTratado === undefined || nombreTratado.length < 2){
	}else{
		esCorrecto = true;
	}
	return esCorrecto;
}

function validarLogitudP(longitud){
	let esCorrecto = false;
	let longitudTratada = longitud;

	if(longitudTratada === undefined || longitudTratada <= 0){
	}else{
		esCorrecto = true;
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

function crearOpcionesPersonalizadasP(nombre,input){
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
