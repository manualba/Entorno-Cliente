let divErroresCompañiaNueva = document.getElementById("erroresCompañiaNueva");
let divErroresCambiarUsuario = document.getElementById("erroresCambiarUsuario");
let divErroresCambiarpasajeros = document.getElementById("erroresCambiarpasajeros");

/**
 * Funcion que añade una compañia
 */
function añadirCompañia() {
	let inputNombreCompañia = document.getElementById("nombreCompañia");
	let inputNombreD = document.getElementById("nombre");
	let inputApellidoD = document.getElementById("apellido");
	let inputTrayecto = document.getElementById("trayecto");

	vaciarDivErrores(divErroresCompañiaNueva);

	let esCompañiaCorrecto = validarNombreCompañia(inputNombreCompañia, divErroresCompañiaNueva);
	let esNombreDCorrecto = validarNombreD(inputNombreD, divErroresCompañiaNueva);
	let esApellidoCorrecto = validarApellidoD(inputApellidoD, divErroresCompañiaNueva);
	let esNombrePCorrecto = validarNombreCompañia(inputNombreCompañia, divErroresCompañiaNueva);

	if (esCompañiaCorrecto && esNombreDCorrecto && esApellidoCorrecto && esNombrePCorrecto) {
		let usuario = listaUsuarios.find(usuario => usuario.apellidos === inputApellidoD.value);
		let pasajeros = listaPasajeros.find(pasajeros => pasajeros.nombre === inputNombreCompañia.value);
		let compa = compañias.find(compañia => compañia.nombre === inputNombreCompañia.value);
		if (usuario === undefined) {
			usuario = new Usuario(inputNombreD.value, inputApellidoD.value);
			listaUsuarios.push(usuario);
		}

		if (pasajeros === undefined) {
			pasajeros = new Pasajero(inputNombreCompañia.value);
			listaPasajeros.push(pasajeros);
		}

		if (compa === undefined) {
			compa = new Compañia(inputNombreCompañia.value, usuario, inputTrayecto.value, trayecto);
			compañias.push(compa);
			incluirCompañias(compa);
			usuario.incluirCompañias(compa);
			pasajeros.incluirCompañias(compa);
		}

	}

}

/**
 * Funcion que crea las opciones de un select segun las compañias del array de compañias
 */
function crearOpciones() {
	let inputCompañiaD = document.getElementById("compañiaD");
	
	for (let compañia of compañias) {
		let opcion = document.createElement("option");
		opcion.className = "opcion";
		opcion.setAttribute("value", quitarEspacios(compañia.nombre));
		opcion.innerHTML = `${compañia.nombre}`;
		inputCompañiaD.appendChild(opcion);
		
	}
}

//BOTON DEL FORMULARIO
let botonNuevacompañia = document.getElementById("añadirCompañia");
let botonCambiarUsuario = document.getElementById("cambiarUsuario");
let botonCambiarpasajeros = document.getElementById("cambiarpasajeros");

//Obtencion de input de tipo text
let inputsText = document.getElementsByClassName("inputForm");

botonNuevacompañia.addEventListener("click", añadirCompañia);

for (let i = 0; i < inputsText.length; i++) {
	inputsText[i].addEventListener("focus", focus);
	inputsText[i].addEventListener("blur", blur);
}

document.addEventListener("DOMContentLoaded", function (event) {
	//Creando opciones formulario cambiar usuario
	crearOpciones();
});

//MOSTRAR Y OCULTAR VIDEOS DE PUBLICIDAD DE COMPAÑÍAS
function mostrarOcultar(event) {

	let divVideos = document.getElementById("videos");
	let boton = document.getElementById("botonMostrarOcultar");
	if (!divVideos) {
		boton.innerHTML = "Mostrar Vídeos";
		return true;

	}

	if (divVideos.style.display == "none") {
		divVideos.style.display = "block";
		boton.innerHTML = "Ocultar Vídeos";

	} else {
		divVideos.style.display = "none";
		boton.innerHTML = "Mostrar Vídeos";


	}

	return true;
}