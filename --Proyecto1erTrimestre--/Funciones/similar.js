document.addEventListener("DOMContentLoaded",function(){
    crearSelectCompanias("selectCompanias");
 
    let selectCompanias = document.getElementById("selectCompanias");
    selectCompanias.addEventListener("change",obtenerCompaniasSimilares);
   
 });
 
 function crearSelectCompanias(idSelectCompania){
     let select = document.getElementById(idSelectCompania); 
     for(compania of listaCompanias){
         let option = document.createElement("option");
         option.value = compania.id;
         option.innerHTML = compania.nombre;
         select.appendChild(option);
     }
 }
 
 
 function obtenerCompaniasSimilares(event){
     let selector = document.getElementById("selectCompanias");
     let idCompaniaSeleccionada = selector.value;
     let ulCompaniasSimilares = document.getElementById("companias_similares");
     ulCompaniasSimilares.innerHTML = "";
     let spanNombreCompania = document.getElementById("nombre_compania");
     spanNombreCompania.innerHTML = "";
     if(idCompaniaSeleccionada !== ""){
         let companiasMostradas = 0;
         let companiaSeleccionada = listaCompanias.find( compania => compania.id === parseInt(idCompaniaSeleccionada));
         spanNombreCompania.innerHTML = `${companiaSeleccionada.nombre} (${companiaSeleccionada.tipo}-${companiaSeleccionada.horario})`;
         
         let companiasSimilares = listaCompanias
                                     .filter(compania => compania.tipo === companiaSeleccionada.tipo)
                                     .filter(compania => compania.horario === companiaSeleccionada.horario)
                                     .filter(compania => compania.id !== companiaSeleccionada.id)
 
         companiasSimilares.forEach(function(companiaSimilar){
             let liCompania = document.createElement("li");
             liCompania.innerHTML = `${companiaSimilar.nombre} (${companiaSimilar.tipo}-${companiaSimilar.horario})`;
             ulCompaniasSimilares.appendChild(liCompania);
             companiasMostradas++;
         });
         if(companiasMostradas == 0){
             let liCompania = document.createElement("li");
             liCompania.innerHTML = "No han podido encontrarse compañias similares.";
             ulCompaniasSimilares.appendChild(liCompania);
         }
     }
 }