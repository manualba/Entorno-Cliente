document.addEventListener("DOMContentLoaded",function(){
    let formularioAjaxMYSQL = document.getElementById("formularioMYSQL");
    formularioAjaxMYSQL.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaMYSQL();
    });

    let formularioAjaxPDO = document.getElementById("formularioPDO");
    formularioAjaxPDO.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaPDO();
    });

    let formularioBusqueda = document.getElementById("formularioBusqueda");
    formularioBusqueda.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaBusqueda();
    });

    let selectCampo = document.getElementById("selectCampo");
    selectCampo.addEventListener("change",function(event){
        obtenerCampoFomulario();
    });

})


function realizarPeticionAsincronaMYSQL(){
    
}

function realizarPeticionAsincronaPDO(){
    
}


function escribirResultado(respuesta){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados= respuesta;
    let salida="<table border='1'><tr><th>NOMBRE</th><th>GENERO</th><th>DIRECTOR</th><th>DURACION</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.nombre+"</td><td>"+
        objeto.genero+"</td><td>"+objeto.director+"</td><td>"+
        objeto.duracion +"</td></tr>";
    }

    salida+="</table>";

    divResultado.innerHTML=salida;

}

function realizarPeticionAsincronaBusqueda(){
    let form = new FormData();
    $("#spinner").css("display","block");
    form.append("nombre",$("#nombre").val());
    fetch("servidor/datosBusqueda.php",{
        method:"post",
        body:form
    })
    .then(function(response){
            return response.json();
    })
    .then(escribirResultado)
    .catch(function(error){
        console.error(error);
        alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");    
    }).finally(function(){
        $("#spinner").css("display","none");
    })
    
    ;
}

function obtenerCampoFomulario(){
    $("#spinner").css("display","block");
    let tipoCampo = $("#selectCampo").val();
    let form = new FormData();
    form.append("tipoCampo",tipoCampo);
    fetch("servidor/obtenerCampo.php",{
        method:"post",
        body:form
    })
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        $("#campoFormulario").html(response); 
        if(tipoCampo === "select"){
            asociarEventoSelectPrueba();
        }  
    })
    .catch(function(error){
        console.error(error);
        alert("ERROR EN LA PETICION");
        $("#campoFormulario").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");    
    }).finally(function(){
        $("#spinner").css("display","none");
    })

}

function asociarEventoSelectPrueba(){
    let selectCampo = document.getElementById("prueba");
    selectCampo.addEventListener("change",function(event){
        obtenerValoresSelect();
    });
}
function obtenerValoresSelect(){
    $("#spinner").css("display","block");
    let tipoPrueba = $("#prueba").val();
    let form = new FormData();
    form.append("tipoPrueba",tipoPrueba);
    fetch("servidor/obtenerValoresSelect.php",{
        method:"post",
        body:form
    })
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        $("#selectPrueba").html(response);   
    })
    .catch(function(error){
        console.error(error);
        alert("ERROR EN LA PETICION");  
    }).finally(function(){
        $("#spinner").css("display","none");
    })
}


function gestionarErrores(response){
    if (!response.ok) {
        throw Error("SE HA PRODUCIDO UN ERROR AL REALIZAR LA PETICIÓN FETCH:"+response.statusText);
    }
    return response;
}

//INSERT
document.addEventListener("DOMContentLoaded",function(){
    let formularioAjax = document.getElementById("formularioInsertar");
    formularioAjax.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincrona3();
    });
})

function objetoXHR(){
    if (window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ 

        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
            
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
   
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}



function comprobarEstadoPeticion3(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                alert("Se ha insertado con exito! Compruebalo en los datos!");

                tratarResultadoInsertar(this.responseText);
            }else{
            }
            break;
    }
}

function realizarPeticionAsincrona3(){
    let provincias = document.getElementById("provincias").value;

    miXHR = new objetoXHR();
    miXHR.open("POST", "servidor/insertarDatos.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion3;
    
    let datos = "provincias="+provincias; 

    miXHR.send(datos);

}
