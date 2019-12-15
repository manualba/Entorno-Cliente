/*************************************************************************************************************/
//PERSONA
class Persona {

	constructor(nombre, apellidos) {
		this.nombre = nombre;
		this.apellidos = apellidos;
	}


	get nombre() {
		return `${this._nombre}`;
	}

	set nombre(nombre) {
		this._nombre = nombre;
	}

	get apellidos() {
		return `${this._apellidos}`;
	}

	set apellidos(apellidos) {
		this._apellidos = apellidos;
	}
}

/*************************************************************************************************************/
//CLIENTE
class Cliente extends Persona {

	constructor(nombre, apellidos, dni, telefono, direccion) {
		super(nombre, apellidos);
		this.dni = dni;
		this.telefono = telefono;
		this.direccion = direccion;
		this.compañiasFav = [];
		this.votos = [];
	}

	get nombre() {
		return `${this._nombre}`;
	}

	set nombre(nombre) {
		this._nombre = nombre;
	}

	get apellidos() {
		return `${this._apellidos}`;
	}

	set apellidos(apellidos) {
		this._apellidos = apellidos;
	}

	get compañiasFav() {
		return this._compañiasFav;
	}

	set compañiasFav(compañias) {
		this._compañiasFav = compañias;
	}

	get votos() {
		return this._votos;
	}

	set votos(votos) {
		this._votos = votos;
	}

	incluirCompañiasFav(compañia) {
		this._compañiasFav.push(compañia);
	}

	contieneNombre(nombre) {
		let contiene = false;
		let nombreTratado = tratarCadenasInput(nombre);
		if (nombreTratado !== null) {
			contiene = this.nombre.toUpperCase().includes(nombreTratado);
		}
		return contiene;
	}
	
	incluirVoto(voto) {
		this._votos.push(voto);
	}
}
/*************************************************************************************************************/
//USUARIO
class Usuario extends Persona {

	constructor(nombre, apellidos) {
		super(nombre, apellidos);
		this.compañias = [];
	}

	get nombre() {
		return `${this._nombre}`;
	}

	set nombre(nombre) {
		this._nombre = nombre;
	}

	get apellidos() {
		return `${this._apellidos}`;
	}

	set apellidos(apellidos) {
		this._apellidos = apellidos;
	}

	get compañias() {
		return this._compañias;
	}

	set compañias(compañias) {
		this._compañias = compañias;
	}
	
	incluirCompañias(compañias) {
		this._compañias.push(compañias);
	}

	toString() {
		return `${this.nombre} ${this.apellidos}`;
	}
}
/*************************************************************************************************************/
//PAGINA DONDE SE MUESTRAN LAS COMPAÑIAS
class Pagina {

	constructor(nombre, direccion) {
		this.nombre = nombre;
		this.direccion = direccion;
		this.compañias = [];
	}

	get nombre() {
		return `${this._nombre}`;
	}

	set nombre(nombre) {
		this._nombre = nombre;
	}

	get compañias() {
		return this._compañias;
	}

	set compañias(compañias) {
		this._compañias = compañias;
	}
	añadircompañias(compañia) {
		this._compañias.push(compañia);
	}

	get direccion() {
		return `${this._direccion}`;
	}

	set direccion(direccion) {
		this._direccion = direccion;
	}
	
	incluirCompañias(compañia) {
		this._compañias.push(compañia);
	}

}
/*************************************************************************************************************/
//PASAJERO
class Pasajero {

	constructor(nombre) {
		this.nombre = nombre;
		this.compañias = [];
	}

	get nombre() {
		return `${this._nombre}`;
	}

	set nombre(nombre) {
		this._nombre = nombre;
	}

	get compañias() {
		return this._compañias;
	}

	set compañias(compañias) {
		this._compañias = compañias;
	}
	
	incluirCompañias(compañia) {
		this._compañias.push(compañia);
	}

	contieneNombre(nombre) {
		let contiene = false;
		let nombreTratado = tratarCadenasInput(nombre);
		if (nombreTratado !== null) {
			contiene = this.nombre.toUpperCase().includes(nombreTratado);
		}
		return contiene;
	}

	toString() {
		return `${this.nombre}`;
	}
}
/*************************************************************************************************************/
//compañia
class Compañia {

	constructor(nombre, usuario, pasajero, trayecto) {
		this.nombre = nombre;
		this.usuario = usuario;
		this.pasajero = pasajero;
		this.trayecto = trayecto;
		this.votos = [];
		this.likes = 0;
		this.dislikes = 0;
	}

	get nombre() {
		return this._nombre;
	}

	set nombre(nombre) {
		this._nombre = nombre;
	}

	get usuario() {
		return this._usuario;
	}

	set usuario(usuario) {
		this._usuario = usuario;
	}

	get trayecto() {
		return this._trayecto;
	}

	set trayecto(trayecto) {
		this._trayecto = trayecto;
	}

	get votos() {
		return this._votos;
	}

	set votos(votos) {
		this._votos = votos;
	}

	mostrarEnHTML(nodoHTML) {
		let bloque = document.createElement("div");
		bloque.className = "compañia";
		bloque.setAttribute("data-identificador", quitarEspacios(this.nombre));
		let nombre = document.createElement("h2");
		nombre.innerHTML = this.nombre;
		nombre.setAttribute("data-identificador", "nombre");
		let usuario = document.createElement("p");
		usuario.innerHTML = `${this.usuario}`;
		usuario.setAttribute("data-identificador", "usuario");
		let pasajero = document.createElement("p");
		pasajero.innerHTML = `${this.pasajero}`;
		pasajero.setAttribute("data-identificador", "pasajero");
		let contadorLikes = document.createElement("i");
		contadorLikes.setAttribute("data-identificador", "contadorLikes");
		contadorLikes.classList.add("far");
		contadorLikes.classList.add("fa-thumbs-up");
		contadorLikes.innerHTML = `${this.likes}`;
		let contadorDislikes = document.createElement("i");
		contadorDislikes.setAttribute("data-identificador", "contadorDislikes");
		contadorDislikes.classList.add("far");
		contadorDislikes.classList.add("fa-thumbs-down");
		contadorDislikes.innerHTML = `${this.dislikes}`;
		bloque.append(nombre);
		bloque.append(usuario);
		bloque.append(pasajero);
		bloque.append(contadorLikes);
		bloque.append(contadorDislikes);
		nodoHTML.appendChild(bloque);
	}

	contienenombre(nombre) {
		let contiene = false;
		let nombreTratado = tratarCadenasInput(nombre);
		if (nombreTratado !== null) {
			contiene = this.nombre.toUpperCase().includes(nombreTratado);
		}
		return contiene;
	}

	contieneusuario(usuario) {
		let contiene = false;
		let usuarioTratado = tratarCadenasInput(usuario);
		if (usuarioTratado != null) {
			contiene = this.usuario.apellidos.toUpperCase().includes(usuarioTratado);
		}
		return contiene;
	}

	incluirVoto(voto) {
		this._votos.push(voto);
		this.contarVotos();
	}

	contarVotos() {
		this.likes = 0;
		this.dislikes = 0;
		for (let i = 0; i < this.votos.length; i++) {
			if (this.votos[i]._puntuacion === "like") {
				this.likes++;
			} else {
				this.dislikes++;
			}
		}
	}
}
/*************************************************************************************************************/

//VOTOS
class Votos {

	constructor(cliente, compañia, puntuacion, comentario) {
		this.cliente = cliente;
		this.compañia = compañia;
		this.puntuacion = puntuacion;
		this.comentario = comentario;
		cliente.incluirVoto(this);
		compañia.incluirVoto(this);

	}

	get puntuacion() {
		return `${this._puntuacion}`;
	}

	set puntuacion(puntuacion) {
		this._puntuacion = puntuacion;
	}

	get cliente() {
		return `${this._cliente}`;
	}

	set cliente(cliente) {
		this._cliente = cliente;
	}

	get compañia() {
		return `${this._compañia}`;
	}

	set compañia(compañia) {
		this._compañia = compañia;
	}
}