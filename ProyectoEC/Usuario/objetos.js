class Compania{
    constructor(id,nombre){
        this.id = id;
        this.nombre = nombre;
        this.propietario = null;
        this.votos = [];
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id; 
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre; 
    }

    get persona(){
        return this._persona;
    }

    set persona(persona){
        this._persona = persona; 
    }

    get votos(){
        return this._votos;
    }

    set votos(votos){
        this._votos = votos; 
    }
    Propietario
    addVoto(voto){
        this.votos.push(voto);
    }
}

class Persona{
    constructor(id,nombre,edad){
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
        this.votos = [];
    }


    get id(){
        return this._id;
    }

    set id(id){
        this._id = id; 
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre; 
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad; 
    }

    get votos(){
        return this._votos;
    }

    set votos(votos){
        this._votos = votos; 
    }

    addVoto(voto){
        this.votos.push(voto);
    }
}

class Voto{
    constructor(id,persona,compania,puntuacion,observaciones){
        this.id = id;
        this.persona = persona;
        this.compania = compania;
        this.puntuacion = puntuacion;
        this.observaciones = observaciones;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id; 
    }

    get persona(){
        return this._persona;
    }

    set persona(persona){
        this._persona = persona; 
    }

    get compania(){
        return this._compania;
    }

    set compania(compania){
        this._compania = compania; 
    }

    get puntuacion(){
        return this._puntuacion;
    }

    set puntuacion(puntuacion){
        this._puntuacion = puntuacion; 
    }

    get observaciones(){
        return this._observaciones;
    }

    set observaciones(observaciones){
        this._observaciones = observaciones; 
    }
}

function crearVoto(persona,compania,puntuacion,observaciones){
    let idVoto = listaTodosLosVotos.length +1;
    let voto = new Voto(idVoto,persona,compania,puntuacion,observaciones);
    persona.addVoto(voto);
    compania.addVoto(voto);
    listaTodosLosVotos.push(voto);
}

let listaTodosLosVotos = [];

let Pepito = new Persona(1,"Pepito",18);
let Juanito = new Persona(2,"Juanito",23);
let Jaimito = new Persona(3,"Jaimito",35);
let Charlie = new Persona(4,"Charlie",44);

let listaUsuarios = [];
listaUsuarios.push(Pepito);
listaUsuarios.push(Juanito);
listaUsuarios.push(Jaimito);
listaUsuarios.push(Charlie);

let Iberia = new Compania(1,"Iberia");
let Vueling = new Compania(2,"Vueling");
let TravelingExplorer = new Compania(3,"Traveling Explorer");
let Viajeselcorteingles = new Compania(4,"Viajes el Corte-ingles");
let AirFrance = new Compania(5,"Air France");
let Avianca = new Compania(6,"Avianca");
let Condor = new Compania(8,"Condor");
let RoyalAirMaroc = new Compania(9,"Royal Air Maroc");

let listaCompanias = [];

listaCompanias.push(Iberia);
listaCompanias.push(Vueling);
listaCompanias.push(TravelingExplorer);
listaCompanias.push(Viajeselcorteingles);
listaCompanias.push(AirFrance);
listaCompanias.push(Avianca);
listaCompanias.push(Condor);
listaCompanias.push(RoyalAirMaroc);


crearVoto(Pepito,Iberia,true);
crearVoto(Pepito,Vueling,true);
crearVoto(Pepito,TravelingExplorer,false);

crearVoto(Juanito,AirFrance,true);
crearVoto(Juanito,Avianca,true);
crearVoto(Juanito,Condor,false);

crearVoto(Jaimito,Condor,true);
crearVoto(Jaimito,TravelingExplorer,true);
crearVoto(Jaimito,AirFrance,false);

crearVoto(Charlie,TravelingExplorer,true);
crearVoto(Charlie,Vueling,true);
crearVoto(Charlie,RoyalAirMaroc,false);