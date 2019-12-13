let compania1 = {nombre:"Traveling Explorer's"};
let compania2 = {nombre:"Vueling"};
let compania3 = {nombre:"Iberia"};
let compania4 = {nombre:"Sundair"};
let compania5 = {nombre:"Sixt"};
let compania6 = {nombre:"HappyCar"};
let compania7 = {nombre:"Booking"};
let compania8 = {nombre:"Trivago"};
let compania9 = {nombre:"Linea directa"};


let listaDeCompanias = [compania1, compania2, compania3, compania4,
     compania5, compania6, compania7, compania8, compania9];

document.addEventListener("DOMContentLoaded",function(){

    let boton2 = document.getElementById("botonMostrarOrdenados");
    boton2.addEventListener("click",mostrarCompaniasOrdenadas);

})

function mostrarCompaniasRefactorizadas(idDivMostrar,lista){
    let divListaCompanias = document.getElementById(idDivMostrar);
    divListaCompanias.innerHTML = "";
    let ulCompanias = document.createElement("ul");
    for(let compania of lista){
        let liCompania = document.createElement("li");
        liCompania.innerHTML = compania.nombre;
        ulCompanias.appendChild(liCompania);
    }  
    divListaCompanias.appendChild(ulCompanias);
}


function mostrarCompaniasOrdenadas(){
    listaDeCompanias.sort( (x,y) => + x.nombre.localeCompare(y.nombre) );
    mostrarCompaniasRefactorizadas("listaCompaniasOrdenadas",listaDeCompanias);
}