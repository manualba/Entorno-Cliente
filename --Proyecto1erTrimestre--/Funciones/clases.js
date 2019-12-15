/*************************************************************************************************************/
//PERSONA
class Persona{

	constructor(nombre,apellidos){
		this.nombre = nombre;
		this.apellidos = apellidos;
	}


	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get apellidos(){
		return `${this._apellidos}`;
	}

	set apellidos(apellidos){
		this._apellidos=apellidos;
	}
}

/*************************************************************************************************************/
//CLIENTE
class Cliente extends Persona{

	constructor(nombre,apellidos,dni,telefono,direccion){
		super(nombre,apellidos);
		this.dni = dni;
		this.telefono = telefono;
		this.direccion = direccion;
		this.peliculasFav = [];
		this.votos = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get apellidos(){
		return `${this._apellidos}`;
	}

	set apellidos(apellidos){
		this._apellidos=apellidos;
	}

	get dni(){
		return `${this._dni}`;
	}

	set dni(dni){
		this._dni=dni;
	}

	get telefono(){
		return `${this._telefono}`;
	}

	set telefono(telefono){
		this._telefono=telefono;
	}

	get direccion(){
		return `${this._direccion}`;
	}

	set direccion(direccion){
		this._direccion=direccion;
	}

	get peliculasFav(){
		return this._peliculasFav;
	}

	set peliculasFav(Vuelos){
		this._peliculasFav=Vuelos;
	}

	get votos(){
		return this._votos;
	}

	set votos(votos){
		this._votos=votos;
	}
	/**
	 * Funcion que añade una vuelo a peliculasFav
	 * @param {VueloInfo} vuelo 
	 */
	incluirVueloFav(vuelo){
		this._peliculasFav.push(vuelo);
	}
	
	contieneNombre(nombre){
		let contiene = false;
		let nombreTratado = tratarCadenasInput(nombre);
		if(nombreTratado !== null){
			contiene = this.nombre.toUpperCase().includes(nombreTratado);
		}
		return contiene;
	}
	/**
	 * Funcion que añade un voto a votos
	 * @param {Voto} voto
	 */
	incluirVoto(voto){
		this._votos.push(voto);
	}
}
/*************************************************************************************************************/
//DIRECTOR
class Director extends Persona{

	constructor(nombre,apellidos){
		super(nombre,apellidos);
		this.Vuelos = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get apellidos(){
		return `${this._apellidos}`;
	}

	set apellidos(apellidos){
		this._apellidos=apellidos;
	}

	get Vuelos(){
		return this._vuelos;
	}

	set Vuelos(Vuelos){
		this._vuelos=Vuelos;
	}
	/**
	 * Funcion que añade una vuelo a Vuelos
	 * @param {VueloInfo} vuelo 
	 */
	incluirVuelos(vuelo){
		this._vuelos.push(vuelo);
	}

	toString(){
		return `${this.nombre} ${this.apellidos}`;
	}
}
/*************************************************************************************************************/
//VIDEOCLUB
class Agencia{

	constructor(nombre,direccion){
		this.nombre = nombre;
		this.direccion = direccion;
		this.Vuelos = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get Vuelos(){
		return this._vuelos;
	}

	set Vuelos(Vuelos){
		this._vuelos=Vuelos;
	}
	añadirPeliculas(vuelo){
		this._vuelos.push(vuelo);
	}

	get direccion(){
		return `${this._direccion}`;
	}

	set direccion(direccion){
		this._direccion=direccion;
	}
	/**
	 * Funcion que añade una vuelo a Vuelos
	 * @param {VueloInfo} vuelo 
	 */
	incluirVuelos(vuelo){
		this._vuelos.push(vuelo);
	}

}
/*************************************************************************************************************/
//PRODUCTORA
class TipoVuelo{

	constructor(nombre){
		this.nombre = nombre;
		this.Vuelos = [];
	}

	get nombre(){
		return `${this._nombre}`;
	}

	set nombre(nombre){
		this._nombre=nombre;
	}

	get Vuelos(){
		return this._vuelos;
	}

	set Vuelos(Vuelos){
		this._vuelos=Vuelos;
	}
	/**
	 * Funcion que añade una vuelo a Vuelos
	 * @param {VueloInfo} vuelo 
	 */
	incluirVuelos(vuelo){
		this._vuelos.push(vuelo);
	}

	contieneNombre(nombre){
		let contiene = false;
		let nombreTratado = tratarCadenasInput(nombre);
		if(nombreTratado !== null){
			contiene = this.nombre.toUpperCase().includes(nombreTratado);
		}
		return contiene;
	}

	toString(){
		return `${this.nombre}`;
	}
}
/*************************************************************************************************************/
//VUELO
class VueloInfo{
	constructor(vuelo,tiempo,tipo,compañia){
		this.vuelo = vuelo;
		this.tiempo = tiempo;
		this.tipo = tipo;
		this.compañia = compañia;
		this.votos = [];
		this.likes = 0;
		this.dislikes = 0;

	}

	get vuelo(){
		return this._vuelo;
	}

	set vuelo(vuelo){
		this._vuelo=vuelo;
	}

	get compañia(){
		return this._compañia;
	}

	set compañia(compañia){
		this._compañia=compañia;
	}

	get tiempo(){
		return this._tiempo;
	}

	set tiempo(tiempo){
		this._tiempo=tiempo;
	}

	get tipo(){
		return this._tipo;
	}

	set tipo(tipo){
		this._tipo=tipo;
	}

	get votos(){
		return this._votos;
	}

	set votos(votos){
		this._votos=votos;
	}

	mostrarEnHTML(nodoHTML){
		let bloque = document.createElement("div");
		bloque.className = "vuelo";
		bloque.setAttribute("data-identificador",quitarEspacios(this.vuelo));
		let vuelo = document.createElement("h2");
		vuelo.innerHTML = this.vuelo; 
		vuelo.setAttribute("data-identificador","vuelo");
		let tipo = document.createElement("h3");
		tipo.innerHTML = this.tipo;
		tipo.setAttribute("data-identificador","tipo");
		let tiempo = document.createElement("p");
		tiempo.innerHTML = `${this.tiempo}`;
		tiempo.setAttribute("data-identificador","tiempo");
		let compañia = document.createElement("p");
		compañia.innerHTML = `${this.compañia}`;
		compañia.setAttribute("data-identificador","compañia");
		let contadorLikes = document.createElement("i");
		contadorLikes.setAttribute("data-identificador","contadorLikes");
		contadorLikes.classList.add("far");
		contadorLikes.classList.add("fa-thumbs-up");
		contadorLikes.innerHTML = `${this.likes}`;
		let contadorDislikes = document.createElement("i");
		contadorDislikes.setAttribute("data-identificador","contadorDislikes");
		contadorDislikes.classList.add("far");
		contadorDislikes.classList.add("fa-thumbs-down");
		contadorDislikes.innerHTML = `${this.dislikes}`;
		bloque.append(vuelo);
		bloque.append(tipo);
		bloque.append(tiempo);
		bloque.append(compañia);
		bloque.append(contadorLikes);
		bloque.append(contadorDislikes);
		nodoHTML.appendChild(bloque);
	}

	contieneTitulo(vuelo){
		let contiene = false;
		let tituloTratado = tratarCadenasInput(vuelo);
		if(tituloTratado !== null){
			contiene = this.vuelo.toUpperCase().includes(tituloTratado);
		}
		return contiene;
	}

	contieneDirector(tiempo){
		let contiene = false;
		let directorTratado = tratarCadenasInput(tiempo);
		if(directorTratado != null){
			contiene = this.tiempo.apellidos.toUpperCase().includes(directorTratado);
		}
		return contiene;
	}

	contieneGenero(tipo){
		let contiene = false;
		let generoTratado = tratarCadenasInput(tipo);
		if(generoTratado !== null){
			contiene = this.tipo.toLocaleLowerCase().includes(generoTratado.toLocaleLowerCase());
		}
		return contiene;
	}
	/**
	 * Funcion que añade un voto a votos
	 * @param {Voto} voto
	 */
	incluirVoto(voto){
		this._votos.push(voto);
		this.contarVotos();
	}
	/**
	 * Funcion que cuenta los likes y dislikes de una vuelo
	 */
	contarVotos(){
		this.likes = 0;
		this.dislikes = 0;
		for (let i = 0; i < this.votos.length; i++) {
			if(this.votos[i]._puntuacion === "like"){
				this.likes++;
			}else{
				this.dislikes++;
			}
		}
	}
}
/*************************************************************************************************************/
//VOTOS
class Votos{

	constructor(cliente,vuelo,puntuacion,comentario){
		this.cliente = cliente;
		this.vuelo = vuelo;
		this.puntuacion = puntuacion;
		this.comentario = comentario;
		cliente.incluirVoto(this);
		vuelo.incluirVoto(this);
		
	}

	get puntuacion(){
		return `${this._puntuacion}`;
	}

	set puntuacion(puntuacion){
		this._puntuacion=puntuacion;
	}

	get comentario(){
		return `${this._comentario}`;
	}

	set comentario(comentario){
		this._comentario=comentario;
	}

	get cliente(){
		return `${this._cliente}`;
	}

	set cliente(cliente){
		this._cliente=cliente;
	}

	get vuelo(){
		return `${this._pelicula}`;
	}

	set vuelo(vuelo){
		this._pelicula=vuelo;
	}


}

