//Ver
document.addEventListener("DOMContentLoaded",function(){
    let formularioBusqueda = document.getElementById("formularioVer");
    formularioBusqueda.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaBusqueda2();
    });

})


function realizarPeticionAsincronaMYSQL2(){
    
}

function escribirResultadoV(respuesta){
    let divResultado =  document.getElementById("resultadoV");
    divResultado.innerHTML = "";
    var resultados= respuesta;
    let salida="<table border='1'><tr><th>NOMBRE</th><th>DNI</th><th>FECHA REGISTRO</th><th>COMPAÑIA</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.nombre+"</td><td>"+
        objeto.dni+"</td><td>"+objeto.fregistro+"</td><td>"+
        objeto.compania +"</td></tr>";
    }

    salida+="</table>";

    divResultado.innerHTML=salida;

}

function realizarPeticionAsincronaBusqueda2(){
    let nombreInput = $("#nombre").val();
    $.ajax({
        url: "servidor/datosJSON.php",
        data:{nombre:nombreInput},
        method: "POST",
        dataType:"JSON",
        beforeSend:function(){$("#spinner").css("display","block");}
    }) .done( escribirResultadoV)
        .fail(function(){ 
            alert("ERROR EN LA PETICION");
            $("#resultadoV").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function(){
            $("#spinner").css("display","none");
        });   
}

//Buscar

document.addEventListener("DOMContentLoaded",function(){
    let formularioBusqueda = document.getElementById("formularioBusqueda");
    formularioBusqueda.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaBusqueda();
    });

})


function realizarPeticionAsincronaMYSQL(){
    
}



function escribirResultado(respuesta){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados= respuesta;
    let salida="<table border='1'><tr><th>NOMBRE</th><th>DNI</th><th>FECHA REGISTRO</th><th>COMPAÑIA</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.nombre+"</td><td>"+
        objeto.dni+"</td><td>"+objeto.fregistro+"</td><td>"+
        objeto.compania +"</td></tr>";
    }

    salida+="</table>";

    divResultado.innerHTML=salida;

}

function realizarPeticionAsincronaBusqueda(){
    let nombreInput = $("#nombre").val();
    $.ajax({
        url: "servidor/datosBuscar.php",
        data:{nombre:nombreInput},
        method: "POST",
        dataType:"JSON",
        beforeSend:function(){$("#spinner").css("display","block");}
    }) .done( escribirResultado)
        .fail(function(){ 
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function(){
            $("#spinner").css("display","none");
        });   
}



//Insertar

document.addEventListener("DOMContentLoaded",function(){
    let formularioInsertar = document.getElementById("formularioInsertar");
    formularioInsertar.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaI();
    });

})

function realizarPeticionAsincronaI(){
    let nombreInput = $("#nombreIn").val();
    $.ajax({
        url: "servidor/datosInsertar.php",
        data:{nombre:nombreInput},
        method: "POST",
        dataType:"JSON",
        beforeSend:function(){$("#spinner").css("display","block");}
    }) .done(alert("Se ha insertado con exito!"))
        .fail(function(){ 
            alert("ERROR EN LA PETICION");
            $("#resultadoI").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function(){
            $("#spinner").css("display","none");
        });   
}
