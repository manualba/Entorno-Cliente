document.addEventListener("DOMContentLoaded", event => {

    document.getElementById("selectUsuario").addEventListener("change", obtenerCompaniasUsadas);

    crearSelectUsuario("selectUsuario");
    crearSelectUsuario("selectUsuarioUso");
    crearSelectCompanias("selectCompaniaUso");



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

function obtenerCompaniasUsadas(event) {
    event.preventDefault();
    let selector = document.getElementById("selectUsuario");
    let idUsuarioSeleccionado = selector.value;
    let ulCompaniasUsadas = document.getElementById("companias_usadas");
    ulCompaniasUsadas.innerHTML = "";
    let spanNombreUsuario = document.getElementById("nombre_usuario");
    spanNombreUsuario.innerHTML = "";
    if (idUsuarioSeleccionado !== "") {
        let companiasUsadas = [];
        let persona = listaUsuarios.find(persona => persona.id === parseInt(idUsuarioSeleccionado));
        spanNombreUsuario.innerHTML = persona.nombre;
        persona.usos.forEach(uso => companiasUsadas.push(uso.compania));
        for (let companiaUsada of companiasUsadas) {
            let liCompania = document.createElement("li");
            liCompania.innerHTML = companiaUsada.nombre;
            ulCompaniasUsadas.appendChild(liCompania);
        }
    }
}