
function funcionAjaxAsincronaJSON(){
    llamadaAsincrona2("servidor/datosJSON.php","GET",null,"JSON",tratarResultadoJSON);
}

function tratarResultadoJSON(resultado){
    var resultados= JSON.parse(resultado)
    let salida="<table border='1'><tr><th>NOMBRE</th><th>DNI</th><th>FECHA</th><th>HABITACION</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.nombre+"</td><td>"+
        objeto.dni+"</td><td>"+objeto.fecha+"</td><td>"+
        objeto.tipo_habitacion +"</td></tr>";
    }

    salida+="</table>";

    document.getElementById("resultadoAsincronoJSON").innerHTML=salida;

}


/////////////////////////////////////////////////////////
            // Empieza el buscador //
/////////////////////////////////////////////////////////

function funcionAjaxAsincronaJSON2(){
    llamadaAsincrona2("servidor/datosBuscar.php","POST",null,"JSON",tratarResultadoBusqueda);
}

function tratarResultadoBusqueda(resultadoB){
    var resultadosB= JSON.parse(resultadoB)
    let salidaB="<table border='1'><tr><th>NOMBRE</th><th>DNI</th><th>FECHA</th><th>HABITACION</th></tr>";

    for (let i=0; i < resultadosB.length; i++){
        let objeto2 = resultadosB[i];
        salidaB+="<tr><td>"+objeto2.nombre+"</td><td>"+
        objeto2.dni+"</td><td>"+objeto2.fecha+"</td><td>"+
        objeto2.tipo_habitacion +"</td></tr>";
    }

    salidaB+="</table>";

    document.getElementById("respuesta").innerHTML=salidaB;

}


/////////////////////////////////////////////////////////
            // Empieza el SELECT //
/////////////////////////////////////////////////////////


function funcionAjaxAsincronaJSON3(){
    llamadaAsincrona2("servidor/datosSelect.php","POST",null,"JSON",tratarResultadoSelect);
}

function tratarResultadoSelect(resultadoS){
    var resultadoS= JSON.parse(resultadoS)
    let salidaS="<table border='1'><tr><th>NOMBRE</th><th>DNI</th><th>FECHA</th><th>HABITACION</th></tr>";

    for (let i=0; i < resultadoS.length; i++){
        let objeto3 = resultadoS[i];
        salidaS+="<tr><td>"+objeto3.nombre+"</td><td>"+
        objeto3.dni+"</td><td>"+objeto3.fecha+"</td><td>"+
        objeto3.tipo_habitacion +"</td></tr>";
    }

    salidaS+="</table>";

    document.getElementById("selectRespuesta").innerHTML=salidaS;

}



/////////////////////////////////////////////////////////
            // Empieza el INSERT //
/////////////////////////////////////////////////////////


function funcionAjaxAsincronaJSON3(){
    llamadaAsincrona3("servidor/datosInsertar.php","POST",null,"JSON",tratarResultadoInsertar);
}

function tratarResultadoInsertar(resultadoI){
    var resultadosI= JSON.parse(resultadoI)
    let salidaI="<table border='1'><tr><th>NOMBRE</th><th>DNI</th><th>FECHA</th><th>HABITACION</th></tr>";

    for (let i=0; i < resultadosI.length; i++){
        let objeto2 = resultadosI[i];
        salidaI+="<tr><td>"+objeto2.nombre+"</td><td>"+
        objeto2.dni+"</td><td>"+objeto2.fecha+"</td><td>"+
        objeto2.tipo_habitacion +"</td></tr>";
    }

    salidaI+="</table>";

    document.getElementById("respuestaInsertar").innerHTML=salidaI;

}
