/**
 * Funcion que recibe una cadena, le quita los espacios en blanco por delante y por detras y la pone en mayusculas
 * @param {string} cadena es la cadena a tratar
 */
function tratarCadenasInput(cadena) {
	let cadenaResultante = undefined;
	if (typeof (cadena) === "string") {
		let cadenaTratada = cadena.trim().toUpperCase();
		cadenaTratada = cadenaTratada.replace(/\s{2,}/g, " ");
		if (cadenaTratada !== "") {
			cadenaResultante = cadenaTratada;
		}
	}
	return cadenaResultante;
}

/**
 * Funcion que muestra las Compañias en las paginas
 * @param {array} mostrarCompañias es el array de Compañias que se quieren mostrar
 */
function mostrarCompañiasHTML(mostrarCompañias) {
	let divCompañias = document.getElementById("mostrarCompañias");
	divCompañias.innerHTML = "";
	if (mostrarCompañias.length === 0) {
		divCompañias.innerHTML = "NO HAY COMPAÑÍAS QUE MOSTRAR";
	} else {
		mostrarCompañias.forEach(compañia => compañia.mostrarEnHTML(divCompañias));
	}
}
/**
 * Funcion que muestra en la pagina la nueva compañia junto a las ya existentes
 * @param {Compañia} nuevaCompañia es la nueva compañia a incluir
 */
function incluirCompañias(nuevaCompañia) {
	let divCompañias = document.getElementById("CompañiasMostrar");
	nuevaCompañia.mostrarEnHTML(divCompañias);
}

/**
 * Funcion que recibe dos nodos y valida el titulo de la compañia
 * @param {nodo} inputTitulo es el nodo del titulo de la compañia
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarNombreCompañiaP(cadena) {
	let esCorrecto = false;
	let tituloTratado = tratarCadenasInput(cadena);

	if (tituloTratado === undefined || tituloTratado.length <= 1) {
		// marcarInputComoErroneo(inputTitulo,divErrores,'El titulo es erroneo<br>');
	} else {
		esCorrecto = true;
		// marcarInputComoCorrecto(inputTitulo);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida la compañia seleccionada
 * @param {nodo} inputCompañia es el nodo de la compañia seleccionada
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en de que no se haya seleccionado ninguna compañia
 */
function validarCompañiaSeleccionadaP(cadena) {
	let esCorrecto = false;
	let CompañiaTratada = tratarCadenasInput(cadena);

	if (compañiaTratada === undefined || compañiaTratada.length <= 1) {
		// marcarInputComoErroneo(inputCompañia,divErrores,'Debe seleccionar una compañia<br>');
	} else {
		esCorrecto = true;
		// marcarInputComoCorrecto(inputCompañia);
	}
	return esCorrecto;
}

function validarOpcionSeleccionada(cadena) {
	let esCorrecto = false;
	let opcionTratada = tratarCadenasInput(cadena);

	if (opcionTratada === undefined || opcionTratada.length <= 1) {
		// marcarInputComoErroneo(inputOpcion,divErrores,'Debe seleccionar una opcion<br>');
	} else {
		esCorrecto = true;
		// marcarInputComoCorrecto(inputOpcion);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida el nombre del usuario
 * @param {nodo} inputNombreD es el nodo del nombre del usuario
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarNombreDP(cadena) {
	let esCorrecto = false;
	// debugger;
	let nombreTratado = tratarCadenasInput(cadena);
	let expresion = /^[A-Z]{2,}$/g
	if (!expresion.test(nombreTratado)) {
		// marcarInputComoErroneo(inputNombreD,divErrores,'El nombre del usuario es erroneo<br>');
	} else {
		esCorrecto = true;
		// marcarInputComoCorrecto(inputNombreD);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida el apellido del usuario
 * @param {nodo} inputApellidoD es el nodo del apellido del usuario
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarApellidoDP(cadena) {
	let esCorrecto = false;
	let apellidoTratado = tratarCadenasInput(cadena);

	if (apellidoTratado === undefined || apellidoTratado.length < 1) {
		// marcarInputComoErroneo(inputApellidoD,divErrores,'El apellido del usuario es erroneo<br>');
	} else {
		esCorrecto = true;
		// marcarInputComoCorrecto(inputApellidoD);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida el nombre del usuario
 * @param {nodo} inputNombreUsuario es el nodo del nombre del usuario
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarNombreUsuarioP(cadena) {
	let esCorrecto = false;
	// debugger;
	let nombreTratado = tratarCadenasInput(cadena);
	let expresion = /^[A-Z]{2,}$/g
	if (!expresion.test(nombreTratado)) {
		// marcarInputComoErroneo(inputNombreUsuario,divErrores,'El nombre del usuario es obligatorio<br>');
	} else {
		esCorrecto = true;
		// marcarInputComoCorrecto(inputNombreUsuario);
	}
	return esCorrecto;
}

/**
 * Funcion que recibe dos nodos y valida el genero
 * @param {nodo} inputGenero es el nodo del genero
 * @param {nodo} divErrores es el nodo al que se añade el texto de error en caso de que no sea correcto
 */
function validarGeneroP(cadena) {
	let esCorrecto = false;
	let generoTratado = tratarCadenasInput(cadena);

	if (generoTratado === undefined || generoTratado === "") {
		// marcarInputComoErroneo(inputGenero,divErrores,'El genero es erroneo<br>');
	} else {
		esCorrecto = true;
		// marcarInputComoCorrecto(inputGenero);
	}
	return esCorrecto;
}


function validarNombreCompañia(valor) {

	let esCorrecto = true;
    let inputNombre = document.getElementById("nombreCompañia");
    let valor = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    inputNombre.classList.remove("inputErroneo");
    inputNombre.classList.remove("inputCorrecto");

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

function validarLogitudP(longitud) {
	let esCorrecto = false;
	let longitudTratada = longitud;

	if (longitudTratada === undefined || longitudTratada <= 0) {

	} else {
		esCorrecto = true;

		return esCorrecto;
	}

	function quitarEspacios(cadena) {
		let arrayPalabras = cadena.split(" ");
		let nuevaCadena = "";

		for (let i = 0; i < arrayPalabras.length; i++) {
			nuevaCadena += arrayPalabras[i];
		}
		return nuevaCadena;
	}

	//INPUTS CORRECTOS
	function marcarInputComoCorrecto(input, divErrores) {
		input.className = 'correcto';

		let spanError = document.querySelectorAll(`#${input.id} + span`);
		if (spanError.length > 0) {
			for (let i = 0; i < spanError.length; i++) {
				divErrores.removeChild(spanError[i]);

			}
		}
	}

	//FUNCION PARA MARCAR INPUTS INCORRECTOS
	function marcarInputComoErroneo(input, divErrores, textoError) {
		input.className = 'incorrecto';
		let padre = input.parentNode;
		let spanError = document.querySelectorAll(`#${input.id} + span`);
		if (spanError.length === 0) {
			let spanNuevo = document.createElement("span");
			spanNuevo.className = 'error';
			spanNuevo.innerHTML = textoError;
			divErrores.appendChild(spanNuevo.cloneNode(true));
		}
	}
}
