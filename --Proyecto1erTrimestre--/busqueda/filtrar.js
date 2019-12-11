document.addEventListener("DOMContentLoaded",function(){
    crearSelectAnimales2("selectAnimales2");
 
    let selectAnimales2 = document.getElementById("selectAnimales2");
    selectAnimales2.addEventListener("change",obtenerAnimalesFiltrados);
   
 });
 
 function crearSelectAnimales2(especieSelectAnimal){
     let select = document.getElementById(especieSelectAnimal);
     let listaEspecies = []; 
     for(animal of listaAnimales){
         let especieAnimal = animal.especie;
         if(!listaEspecies.some( x => x.toLocaleLowerCase() === especieAnimal.toLocaleLowerCase())){
            let option = document.createElement("option");
            option.value = animal.id;
            option.innerHTML = especieAnimal;
            select.appendChild(option);
            listaEspecies.push(especieAnimal);
         }
     }
 }
 
 
 function obtenerAnimalesFiltrados(event){
     let selector = document.getElementById("selectAnimales2");
     let especieAnimalSeleccionado = selector.value;
     let ulAnimalesSimilares = document.getElementById("animales_filtrados");
     ulAnimalesSimilares.innerHTML = "";
     let spanNombreAnimal = document.getElementById("especie_animal");
     spanNombreAnimal.innerHTML = "";
     if(especieAnimalSeleccionado !== ""){
         let animalesMostrados = 0;
         let animalSeleccionado = listaAnimales.find(animal => animal.id === parseInt(especieAnimalSeleccionado));
         spanNombreAnimal.innerHTML = `${animalSeleccionado.especie}`;
         
         let animalesFiltrados = listaAnimales
                                     .filter(animal => animal.especie === animalSeleccionado.especie)
                                     
 
         animalesFiltrados.forEach(function(animalFiltrado){
             let liAnimal = document.createElement("li");
             liAnimal.innerHTML = `${animalFiltrado.nombre} (${animalFiltrado.especie}-${animalFiltrado.raza})`;
             ulAnimalesSimilares.appendChild(liAnimal);
             animalesMostrados++;
         });
         if(animalesMostrados == 0){
             let liAnimal = document.createElement("li");
             liAnimal.innerHTML = "NO SE HAN ENCONTRADO ANIMALES DE ESA ESPECIE";
             ulAnimalesSimilares.appendChild(liAnimal);
         }
     }
 }