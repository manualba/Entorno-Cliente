//Declarando Clientes
let clienteJavier = new Cliente("Javier","Espejo Roig","72146712K",954321231,"Calle Don Nadie, Nº213");
let clienteJorge = new Cliente("Jorge","Baron Abad","72254571F",954367681,"Calle Don Alguien, Nº214");
let clientePaco = new Cliente("Paco","Pacote Paquitez","72254571F",954657681,"Calle Don Pipon, Nº214");


//Declarar Usuario
let usuarioJavier = new Usuario("Javier","Abascal");
let usuarioJorge = new Usuario("Jorge","Gutiérrez");
let usuarioManuel = new Usuario("Manuel","Anuel");
let usuarioVictor = new Usuario("Victor","Jameson");
let usuarioPedro = new Usuario("Pedro","Jhonson");

let listaUsuarios = [usuarioJavier,usuarioJorge,usuarioManuel,usuarioVictor,usuarioPedro];
let listaClientes = [clienteJavier,clienteJorge,clientePaco];

//Declarando Pasajeros
let marvelStudio = new Pasajero("254");
let newLineCinema = new Pasajero("231");
let wingNutFilms = new Pasajero("267");

//Declarando peliculas
let Vueling = new Compañia("Vueling",usuarioJorge,"Sevilla - Barcelona",marvelStudio);
let AirFrance = new Compañia("AirFrance",usuarioManuel,"Madrid - Lisboa",marvelStudio);
let Ryanair = new Compañia("Ryanair",usuarioJavier,"Málaga - Helsinki",marvelStudio);
let Iberia = new Compañia("Iberia",usuarioVictor,"Madrid - Lisboa",newLineCinema);
let Lufthansa = new Compañia("Lufthansa",usuarioPedro,"Sevilla - Luxemburgo",wingNutFilms);
let Sundair = new Compañia("Sundair",usuarioPedro,"Sevilla - Luxemburgo",wingNutFilms);

//Añadiendo compañias al array de las Pasajeros
marvelStudio.incluirCompañias(Vueling);
marvelStudio.incluirCompañias(AirFrance);
marvelStudio.incluirCompañias(Ryanair);

newLineCinema.incluirCompañias(Iberia);

wingNutFilms.incluirCompañias(Lufthansa);
wingNutFilms.incluirCompañias(Sundair);

//Array de Pasajeros

let listaPasajeros = [marvelStudio,newLineCinema,wingNutFilms];

//Array de peliculas
let compañias = [];

compañias.push(Vueling);
compañias.push(AirFrance);
compañias.push(Ryanair);
compañias.push(Iberia);
compañias.push(Lufthansa);
compañias.push(Sundair);

//Declarar pagina
let pagina = new Pagina();
pagina.incluirCompañias(Vueling);
pagina.incluirCompañias(AirFrance);
pagina.incluirCompañias(Ryanair);
pagina.incluirCompañias(Iberia);
pagina.incluirCompañias(Lufthansa);
pagina.incluirCompañias(Sundair);


//Añadir peliculas favoritas a los clientes

clienteJavier.incluirCompañiasFav(Vueling);
clienteJavier.incluirCompañiasFav(Iberia);
clienteJorge.incluirCompañiasFav(AirFrance);
clienteJorge.incluirCompañiasFav(Ryanair);
clienteJorge.incluirCompañiasFav(Sundair);


//Añadiendo pelis a usuarios

usuarioJavier.incluirCompañias(Ryanair);

usuarioJorge.incluirCompañias(Vueling);

usuarioManuel.incluirCompañias(AirFrance);

usuarioVictor.incluirCompañias(Iberia);

usuarioPedro.incluirCompañias(Lufthansa);
usuarioPedro.incluirCompañias(Sundair);

//CREACION DE VOTOS

let voto1 = new Votos(clienteJavier,Vueling,"like","");
let voto2 = new Votos(clienteJorge,Vueling,"like","");
let voto3 = new Votos(clienteJavier,Lufthansa,"dislike","");
let voto4 = new Votos(clienteJorge,Vueling,"dislike","");
let voto5 = new Votos(clienteJorge,AirFrance,"dislike","");
let voto6 = new Votos(clienteJorge,Vueling,"like","");
let voto7 = new Votos(clienteJorge,Iberia,"like","");
let voto8 = new Votos(clienteJavier,Vueling,"like","");
let voto9 = new Votos(clienteJavier,Ryanair,"like","");
let voto10 = new Votos(clienteJavier,Vueling,"dislike","");
let voto11 = new Votos(clienteJavier,Vueling,"like","");

mostrarCompañiasHTML(compañias);