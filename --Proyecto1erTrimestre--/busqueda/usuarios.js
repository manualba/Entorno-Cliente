
document.addEventListener("DOMContentLoaded",function(){
    crearSelectUsuario("selectUsuario");
    crearSelectUsuario("selectUsuarioVotar");
    crearSelectAnimales("selectAnimalVotar");
    
    let selectUsuario = document.getElementById("selectUsuario");
    selectUsuario.addEventListener("change",obtenerAnimalesVotados);
    
})

function crearSelectUsuario(idUsuario){
    let select = document.getElementById(idUsuario); 
    for(usuario of listaUsuarios){
        let option = document.createElement("option");
        option.value = usuario.id;
        option.innerHTML = usuario.nombre;
        select.appendChild(option);
    }
}

function crearSelectAnimales(idAnimal){
    let select = document.getElementById(idAnimal); 
    for(animal of listaAnimales){
        let option = document.createElement("option");
        option.value = animal.id;
        option.innerHTML = animal.nombre;
        select.appendChild(option);
    }
}

function obtenerAnimalesVotados(event){
    let selector = document.getElementById("selectUsuario");
    let idUsuarioSeleccionado = selector.value;
    let ulAnimalesVotados = document.getElementById("animales_votados");
    ulAnimalesVotados.innerHTML = "";
    let spanNombreUsuario = document.getElementById("nombre_usuario");
    spanNombreUsuario.innerHTML = "";
    if(idUsuarioSeleccionado !== ""){
        let animalesVotados = [];
        let persona = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
        spanNombreUsuario.innerHTML = persona.nombre;
        persona.votos.forEach( voto => animalesVotados.push(voto.animal)); 
        for(let animalVotado of animalesVotados){
            let liAnimal = document.createElement("li");
            liAnimal.innerHTML = animalVotado.nombre;
            ulAnimalesVotados.appendChild(liAnimal);
        }
    }
}
