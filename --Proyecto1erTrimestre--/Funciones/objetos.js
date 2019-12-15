let Juan = new Cliente("Juan","Lora Ruiz","72146712K",954321231,"Calle Don Nadie, Nº213");
let Carlos = new Cliente("Carlos","Martinez Aldayturriaga","72254571F",954367681,"Calle Don Alguien, Nº214");
let Manolo = new Cliente("Manolo","Alba Hornillo","72254571F",954657681,"Calle Don Pipon, Nº214");


let hora0 = new Director("0h","45min");
let hora1 = new Director("1h","45min");
let hora3 = new Director("3h","55min");
let hora2 = new Director("2h","35min");
let hora4 = new Director("4h","23min");
let hora245 = new Director("2h","45min");
let hora035 = new Director("0h","35min");
let hora8 = new Director("8h","20min");
let hora030 = new Director("0h","30min");

let listaDirectores = [hora0,hora1,hora3,hora2,hora4,hora245,hora035,hora030];
let listaClientes = [Juan,Carlos,Manolo];

let indefinido1 = new TipoVuelo("indefinido1");
let local = new TipoVuelo("Local")
let Europeo = new TipoVuelo("Europeo")
let Internacional = new TipoVuelo("Internacional")
let indefinido2 = new TipoVuelo("New Line Cinema");
let indefinido3 = new TipoVuelo("WingNut Films");
let tipovuelo1 = new TipoVuelo("Universal Studios");
let tipovuelo2 = new TipoVuelo("Amblin Entertainment");
let tipovuelo3 = new TipoVuelo("DC Films");
let tipovuelo4 = new TipoVuelo("RSO Records");
let tipovuelo5 = new TipoVuelo("MJW Films");
let tipovuelo6 = new TipoVuelo("PaquitoStudios");

let FranciaLondres = new VueloInfo("Francia-Londres",hora1/*,"30/4/2008"*/,"Vueling",Europeo/*12.95*/);
let EspañaEgipto = new VueloInfo("España-Egipto",hora3/*,"14/7/1852"*/,"Lufthansa",Europeo/*,18.95*/);
let SevillaMalaga = new VueloInfo("Sevilla-Malaga",hora0/*,"4/5/2012"*/,"Vueling",local/*,14.95*/);
let AlemaniaTurquia = new VueloInfo("Alemania-Turquia",hora2,"AirFrance",Europeo);
let TurquiaFrancia = new VueloInfo("Turquia-Francia",hora4,"Sundair",Europeo);
let EEUUCanada = new VueloInfo("EEUU-Canada",hora4,"Sundair",Internacional);
let ColombiaEspaña = new VueloInfo("Colombia-España",hora4,"Sundair",Internacional);
let ColombiaPanama = new VueloInfo("Colombia-Panama",hora245,"Lufthansa",Internacional);
let ColombiaChile = new VueloInfo("Colombia-Chile",hora245,"Lufthansa",Internacional);
let MadridSevilla = new VueloInfo("Madrid-Sevilla",hora2,"Rayanair",local);
let LugoBarcelona = new VueloInfo("Lugo-Barcelona",hora035,"Rayanair",local);
let MadridRusia = new VueloInfo("Madrid-Rusia",hora8,"Vueling",Europeo);
let SevillaCadiz = new VueloInfo("Sevilla-Cadiz",hora030,"Rayanair",local);

Europeo.incluirVuelos(FranciaLondres);
Europeo.incluirVuelos(EspañaEgipto);
Europeo.incluirVuelos(SevillaMalaga);




indefinido2.incluirVuelos(AlemaniaTurquia);
indefinido2.incluirVuelos(LugoBarcelona);

indefinido3.incluirVuelos(TurquiaFrancia);
indefinido3.incluirVuelos(EEUUCanada);
indefinido3.incluirVuelos(ColombiaEspaña);

tipovuelo1.incluirVuelos(ColombiaPanama);

tipovuelo2.incluirVuelos(ColombiaChile);

tipovuelo3.incluirVuelos(MadridSevilla);

tipovuelo4.incluirVuelos(MadridRusia);

tipovuelo5.incluirVuelos(SevillaCadiz);


let listaProductoras = [indefinido1,indefinido2,indefinido3,tipovuelo1,tipovuelo2,tipovuelo3,tipovuelo4,tipovuelo5,tipovuelo6];

let Vuelos = [];

Vuelos.push(FranciaLondres);
Vuelos.push(EspañaEgipto);
Vuelos.push(SevillaMalaga);
Vuelos.push(AlemaniaTurquia);
Vuelos.push(TurquiaFrancia);
Vuelos.push(EEUUCanada);
Vuelos.push(ColombiaEspaña);
Vuelos.push(ColombiaPanama);
Vuelos.push(ColombiaChile);
Vuelos.push(MadridSevilla);
Vuelos.push(LugoBarcelona);
Vuelos.push(MadridRusia);
Vuelos.push(SevillaCadiz);

let TraficoAereo = new Agencia("PAQUITO","Calle de la Piruleta, Nº7");
TraficoAereo.incluirVuelos(FranciaLondres);
TraficoAereo.incluirVuelos(EspañaEgipto);
TraficoAereo.incluirVuelos(SevillaMalaga);
TraficoAereo.incluirVuelos(AlemaniaTurquia);
TraficoAereo.incluirVuelos(TurquiaFrancia);
TraficoAereo.incluirVuelos(EEUUCanada);
TraficoAereo.incluirVuelos(ColombiaEspaña);
TraficoAereo.incluirVuelos(ColombiaPanama);
TraficoAereo.incluirVuelos(ColombiaChile);
TraficoAereo.incluirVuelos(MadridSevilla);
TraficoAereo.incluirVuelos(LugoBarcelona);
TraficoAereo.incluirVuelos(MadridRusia);
TraficoAereo.incluirVuelos(SevillaCadiz);


Juan.incluirVueloFav(FranciaLondres);
Juan.incluirVueloFav(AlemaniaTurquia);
Carlos.incluirVueloFav(EspañaEgipto);
Carlos.incluirVueloFav(SevillaMalaga);
Carlos.incluirVueloFav(ColombiaPanama);
Carlos.incluirVueloFav(LugoBarcelona);
Carlos.incluirVueloFav(MadridSevilla);
Carlos.incluirVueloFav(EEUUCanada);



hora0.incluirVuelos(SevillaMalaga);

hora1.incluirVuelos(FranciaLondres);

hora3.incluirVuelos(EspañaEgipto);

hora2.incluirVuelos(AlemaniaTurquia);
hora2.incluirVuelos(MadridSevilla);

hora4.incluirVuelos(TurquiaFrancia);
hora4.incluirVuelos(EEUUCanada);
hora4.incluirVuelos(ColombiaEspaña);

hora245.incluirVuelos(ColombiaPanama);
hora245.incluirVuelos(ColombiaChile);

hora035.incluirVuelos(LugoBarcelona);

hora8.incluirVuelos(MadridRusia);

hora030.incluirVuelos(SevillaCadiz);


let voto1 = new Votos(Juan,FranciaLondres,"like","");
let voto2 = new Votos(Carlos,FranciaLondres,"like","");
let voto3 = new Votos(Juan,TurquiaFrancia,"dislike","");
let voto4 = new Votos(Carlos,MadridSevilla,"dislike","");
let voto5 = new Votos(Carlos,FranciaLondres,"dislike","");
let voto6 = new Votos(Carlos,EspañaEgipto,"dislike","");
let voto7 = new Votos(Carlos,FranciaLondres,"like","");
let voto8 = new Votos(Carlos,ColombiaPanama,"like","");
let voto9 = new Votos(Carlos,AlemaniaTurquia,"like","");
let voto10 = new Votos(Juan,FranciaLondres,"like","");
let voto11 = new Votos(Juan,SevillaMalaga,"like","");
let voto12 = new Votos(Juan,FranciaLondres,"dislike","");
let voto13 = new Votos(Juan,ColombiaChile,"like","");
let voto14 = new Votos(Juan,FranciaLondres,"like","");
let voto15 = new Votos(Juan,SevillaCadiz,"like","");
let voto16 = new Votos(Carlos,SevillaCadiz,"like","");



mostrarVuelosHTML(Vuelos);
