/**
 * Funcion que recibe una cadena, le quita los espacios en blanco por delante y por detras y la pone en mayusculas
 * @param {string} cadena es la cadena a tratar
 */
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

/**
 * Funcion que muestra las compañias en las paginas
 * @param {array} mostrarCompañias es el array de compañias que se quieren mostrar
 */
function mostrarCompañiasHTML(mostrarCompañias){
    let divCompañias  = document.getElementById("mostrarCompañias");
    divCompañias.innerHTML = "";
    if(mostrarCompañias.length === 0){
        divCompañias.innerHTML = "NO HAY COMPAÑÍAS QUE MOSTRAR";
    }else{
        mostrarCompañias.forEach(compañia => compañia.mostrarEnHTML(divCompañias));
    }
}
/**
 * Funcion que muestra en la pagina la nueva compañia junto a las ya existentes
 * @param {Compañia} compañia es la nueva compañia a incluir
 */
function incluirCompañias(compañia){
    let divCompañias  = document.getElementById("mostrarCompañias");
    compañia.mostrarEnHTML(divCompañias);
}

/**
 * Funcion que recibe dos nodos y valida el titulo de la compañia
 * @param {nodo} inputNombre es el nodo del titulo de la compañia
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarNombreCompañia(inputTitulo,divErrores){
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

/**
 * Funcion que recibe dos nodos y valida la compañia seleccionada
 * @param {nodo} inputCompañia es el nodo de la compañia seleccionada
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en de que no se haya seleccionado ninguna compañia
 */
function validarCompañiaSeleccionada(inputCompañia,divErrores){
	let esCorrecto = false;
	let CompañiaTratada = tratarCadenasInput(inputCompañia.value);

	if(CompañiaTratada === null || CompañiaTratada.length <= 1){
		marcarInputComoErroneo(inputCompañia,divErrores,'Debe seleccionar una compañia<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputCompañia);
	}
	return esCorrecto;
}

function validarOpcionSeleccionada(inputOpcion,divErrores){
	let esCorrecto = false;
	let opcionTratada = tratarCadenasInput(inputOpcion.value);

	if(opcionTratada === null || opcionTratada.length <= 1){
		marcarInputComoErroneo(inputOpcion,divErrores,'Debe seleccionar una opción<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputOpcion);
	}
	return esCorrecto;
}

function validarNombreD(inputNombreD,divErrores){
	let esCorrecto = false;
	// debugger;
	let nombreTratado = tratarCadenasInput(inputNombreD.value);
	let expresion = /^[a-z A-ZñÑáéíóúÁÉÍÓÚ]+$/g;
	if(!expresion.test(nombreTratado)){
		marcarInputComoErroneo(inputNombreD,divErrores,'El nombre del usuario es incorrecto<br>');
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
		marcarInputComoErroneo(inputApellidoD,divErrores,'El apellido del usuario es incorrecto<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputApellidoD);
	}
	return esCorrecto;
}


function validarNombreUsuario(inputNombreUsuario,divErrores){
	let esCorrecto = false;
	// debugger;
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


function validarNombreCompañia(inputNombreCompañia,divErrores){
	let esCorrecto = false;
	let nombreTratado = tratarCadenasInput(inputNombreCompañia.value);

	if(nombreTratado === null || nombreTratado.length < 2){
		marcarInputComoErroneo(inputNombreCompañia,divErrores,'El nombre de la compañía es incorrecto<br>');
	}else{
		esCorrecto = true;
		marcarInputComoCorrecto(inputNombreCompañia);
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

//FUNCION PARA MARCAR INPUTS CORRECTOS
function marcarInputComoCorrecto(input,divErrores){
	input.className  = 'correcto';
	// let padre = input.parentNode;
	// debugger;
	let spanError = document.querySelectorAll(`#${input.id} + span`);
	if(spanError.length > 0){
		for (let i = 0; i < spanError.length; i++) {
			divErrores.removeChild(spanError[i]);
			
		}
	}
}

//FUNCION PARA MARCAR INPUTS INCORRECTOS
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
	// let inputCompañiaC = document.getElementById("CompañiaC");
	// debugger;
	for (let compañia of compañias) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", quitarEspacios(compañia.nombre));
		opcion.innerHTML = `${compañia.nombre}`;
		input.appendChild(opcion);
		// inputCompañiaP.appendChild(opcion.cloneNode(true));
	}
}