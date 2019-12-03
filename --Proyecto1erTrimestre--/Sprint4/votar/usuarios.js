document.addEventListener("DOMContentLoaded",function(){
    crearSelectUsuario("selectUsuario");
    crearSelectUsuario("selectUsuarioVotar");
    crearSelectCompanias("selectCompaniaVotar");
    
    let selectUsuario = document.getElementById("selectUsuario");
    selectUsuario.addEventListener("change",obtenerCompaniasVotados);
    
    let selectCompaniaVotar = document.getElementById("selectCompaniaVotar");
    selectCompaniaVotar.addEventListener("change",validarCompania);
    
    let formularioVotar = document.getElementById("formularioVotar");
    formularioVotar.addEventListener("submit",votarCompania);

    botonRecargar.addEventListener("click",obtenerCompaniasVotados);
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

function crearSelectCompanias(idCompania){
    let select = document.getElementById(idCompania); 
    for(compania of listaCompanias){
        let option = document.createElement("option");
        option.value = compania.id;
        option.innerHTML = compania.nombre;
        select.appendChild(option);
    }
}

function obtenerCompaniasVotados(event){
    let selector = document.getElementById("selectUsuario");
    let idUsuarioSeleccionado = selector.value;
    let ulCompaniasVotados = document.getElementById("companias_votados");
    ulCompaniasVotados.innerHTML = "";
    let spanNombreUsuario = document.getElementById("nombre_usuario");
    spanNombreUsuario.innerHTML = "";
    if(idUsuarioSeleccionado !== ""){
        let companiasVotadas = [];
        let persona = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
        spanNombreUsuario.innerHTML = persona.nombre;
        persona.votos.forEach( voto => companiasVotadas.push(voto.compania)); 
        for(let companiaVotada of companiasVotadas){
            let liCompania = document.createElement("li");
            liCompania.innerHTML = companiaVotada.nombre;
            ulCompaniasVotados.appendChild(liCompania);
        }
    }
}

function validarCompania(){
    let esCorrecto = true;
    let select = document.getElementById("selectCompaniaVotar");
    let selectUsuarioVotar = document.getElementById("selectUsuarioVotar");
    let idCompaniaVotar = select.value;
    let idUsuarioSeleccionado = selectUsuarioVotar.value;
    let usuarioAVotar = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
    let companiaAVotar = listaCompanias.find( compania => compania.id === parseInt(idCompaniaVotar));
    let haVotado = usuarioAVotar.votos.some( voto => voto.compania.id === parseInt(idCompaniaVotar) );
    if(haVotado){
        alert(`El usuario " ${usuarioAVotar.nombre} " ya ha votado a: ${companiaAVotar.nombre}`)
    }
    return esCorrecto;
}

function votarCompania(event){
    event.preventDefault();
    let formulario = document.getElementById("formularioVotar");
    let esCompaniaCorrecto = validarCompania();
    if(esCompaniaCorrecto){
        let selectUsuario = document.getElementById("selectUsuarioVotar");
        let selectCompania = document.getElementById("selectCompaniaVotar");
        let idUsuarioSeleccionado = selectUsuario.value;
        let idCompaniaVotar = selectCompania.value;
        let usuarioAVotar = listaUsuarios.find( persona => persona.id === parseInt(idUsuarioSeleccionado));
        let companiaAVotar = listaCompanias.find( compania => compania.id === parseInt(idCompaniaVotar));
        let puntuacion = document.getElementById("puntuacion");
        let observaciones = document.getElementById("observaciones");
        crearVoto(usuarioAVotar,companiaAVotar,puntuacion,observaciones);
        formulario.reset();
        obtenerCompaniasVotados();
    }
}