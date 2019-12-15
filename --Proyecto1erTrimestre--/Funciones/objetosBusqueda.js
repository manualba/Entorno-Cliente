class Compania{
    constructor(id,nombre,tipo,horario,numPasajeros){
        this.id = id; 
        this.nombre = nombre;
        this.tipo = tipo;
        this.horario = horario;
        this.numPasajeros = numPasajeros;
        this.propietario = null;
        this.usos = [];
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

    get tipo(){
        return this._tipo;
    }

    set tipo(tipo){
        this._tipo = tipo; 
    }

    get horario(){
        return this._horario;
    }

    set horario(horario){
        this._horario = horario; 
    }

    get numPasajeros(){
        return this._pasajeros;
    }

    set numPasajeros(numPasajeros){
        this._pasajeros = numPasajeros; 
    }

    get persona(){
        return this._persona;
    }

    set persona(persona){
        this._persona = persona; 
    }

    get usos(){
        return this._usos;
    }

    set usos(usos){
        this._usos = usos; 
    }
    Propietario
    addUso(uso){
        this.usos.push(uso);
    }
}

class Persona{
    constructor(id,nombre,edad){
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
        this.usos = [];
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

    get usos(){
        return this._usos;
    }

    set usos(usos){
        this._usos = usos; 
    }

    addUso(uso){
        this.usos.push(uso);
    }
}

class Uso{
    constructor(id,persona,compania){
        this.id = id;
        this.persona = persona;
        this.compania = compania;
       
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

}

function crearUso(persona,compania){
    let idUso = listaTodosLosUsos.length +1;
    let uso = new Uso(idUso,persona,compania);
    persona.addUso(uso);
    compania.addUso(uso);
    listaTodosLosUsos.push(uso);
}

let listaTodosLosUsos = [];

let Charlie = new Persona(1,"Charlie",18);
let Juani = new Persona(2,"Juani",20);
let Maria = new Persona(3,"Maria",22);
let Lolito = new Persona(4,"Lolito",23);
let Julian = new Persona(5,"Julian",19);

let listaUsuarios = [];
listaUsuarios.push(Charlie);
listaUsuarios.push(Juani);
listaUsuarios.push(Maria);
listaUsuarios.push(Lolito);
listaUsuarios.push(Julian);


let TravelingExplorers = new Compania(1,"Traveling Explorer's","Vuelos","Mañanas",32);
let Vueling = new Compania(2,"Vueling","Vuelos","Mañanas",28);
let Iberia = new Compania(3,"Iberia","Vuelos","Tardes",24);
let Sundair = new Compania(4,"Sundair","Vuelos","Mañanas",40);
let Sixt = new Compania(5,"Sixt","Alquiler de vehiculos","Mañanas",7);
let HappyCar = new Compania(6,"HappyCar","Alquiler de vehiculos","Mañanas",7);
let Booking = new Compania(7,"Booking","Hoteles","Tardes",700);
let Trivago = new Compania(8,"Trivago","Hoteles","Tardes",700);
let LineaDirecta = new Compania(9,"Linea directa","Seguros","Mañanas",24);




let listaCompanias = []; 

listaCompanias.push(TravelingExplorers);
listaCompanias.push(Vueling);
listaCompanias.push(Iberia);
listaCompanias.push(Sundair);
listaCompanias.push(Sixt);
listaCompanias.push(HappyCar);
listaCompanias.push(Booking);
listaCompanias.push(Trivago);
listaCompanias.push(LineaDirecta);



crearUso(Charlie,Vueling);
crearUso(Charlie,Sundair);
crearUso(Charlie,HappyCar);

crearUso(Juani,TravelingExplorers);
crearUso(Juani,Trivago);

crearUso(Maria,Iberia);
crearUso(Maria,Trivago);

crearUso(Lolito,TravelingExplorers);
crearUso(Lolito,Booking);
crearUso(Lolito,Sixt);
crearUso(Lolito,LineaDirecta);

crearUso(Julian,LineaDirecta);

