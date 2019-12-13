document.addEventListener("DOMContentLoaded",function(){
    crearSelectCompanias2("selectCompanias2");
 
    let selectCompanias2 = document.getElementById("selectCompanias2");
    selectCompanias2.addEventListener("change",obtenerCompaniasFiltradas);
   
 });
 
 function crearSelectCompanias2(especieSelectCompania){
     let select = document.getElementById(especieSelectCompania);
     let listaTipos = []; 
     for(compania of listaCompanias){
         let tipoCompania = compania.tipo;
         if(!listaTipos.some( x => x.toLocaleLowerCase() === tipoCompania.toLocaleLowerCase())){
            let option = document.createElement("option");
            option.value = compania.id;
            option.innerHTML = tipoCompania;
            select.appendChild(option);
            listaTipos.push(tipoCompania);
         }
     }
 }
 
 
 function obtenerCompaniasFiltradas(event){
     let selector = document.getElementById("selectCompanias2");
     let tipoCompaniaSeleccionada = selector.value;
     let ulCompaniasSimilares = document.getElementById("companias_filtradas");
     ulCompaniasSimilares.innerHTML = "";
     let spanNombreCompania = document.getElementById("tipo_compania");
     spanNombreCompania.innerHTML = "";
     if(tipoCompaniaSeleccionada !== ""){
         let companiasMostradas = 0;
         let companiaSeleccionada = listaCompanias.find(compania => compania.id === parseInt(tipoCompaniaSeleccionada));
         spanNombreCompania.innerHTML = `${companiaSeleccionada.tipo}`;
         
         let companiasFiltradas = listaCompanias
                                     .filter(compania => compania.tipo === companiaSeleccionada.tipo)
                                     
 
         companiasFiltradas.forEach(function(companiaFiltrada){
             let liCompania = document.createElement("li");
             liCompania.innerHTML = `${companiaFiltrada.nombre} (${companiaFiltrada.tipo}-${companiaFiltrada.horario})`;
             ulCompaniasSimilares.appendChild(liCompania);
             companiasMostradas++;
         });
         if(companiasMostradas == 0){
             let liCompania = document.createElement("li");
             liCompania.innerHTML = "No se pudieron encontrar companias de ese tipo.";
             ulCompaniasSimilares.appendChild(liCompania);
         }
     }
 }