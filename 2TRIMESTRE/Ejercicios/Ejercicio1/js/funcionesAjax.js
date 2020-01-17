function objetoXHR(){
    if (window.XMLHttpRequest){// El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ // El navegador no implementa la interfaz XHR de forma nativa
                                     // Por ejemplo: Internet explorer.
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}//Capturamos el error,
        }
    }
    
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}


function llamadaAsincrona2(url,tipo,datos,tipoRespuesta,funcionCallback){
    miXHR = new objetoXHR();
    if (miXHR){
        document.getElementById("spinner").style ="display:block";


        miXHR.open(tipo, url, true);

        miXHR.onreadystatechange = ejecutarFuncionAjax(tipoRespuesta,funcionCallback);

        if(tipo === "POST"){
           
            miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        miXHR.send(datos);
    }
}


function ejecutarFuncionAjax(tipoRespuesta,funcion){
    return function() {
        if (this.readyState == 4 && this.status == 200) {
            let resultado = "";
            switch(tipoRespuesta){
                case "XML":
                    resultado = this.responseXML;
                    break;
                default :
                    resultado = this.responseText;
                    break;
            }
            funcion(resultado);

            document.getElementById("spinner").style ="display:none";
        }
    }
}


/////////////////////////////////////////////////////////
            // Empieza el TEXT //
/////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded",function(){
    let formularioAjax = document.getElementById("formulario");
    formularioAjax.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincrona();
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



function comprobarEstadoPeticion(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                tratarResultadoBusqueda(this.responseText);
            }else{
            }
            break;
    }
}

function realizarPeticionAsincrona(){
    let nombre = document.getElementById("nombre").value;

    miXHR = new objetoXHR();
    miXHR.open("POST", "servidor/datosBuscar.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    
    let datos = "nombre="+nombre;
    miXHR.send(datos);

}



/////////////////////////////////////////////////////////
            // Empieza el CHECKBOX //
/////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded",function(){
    let formularioAjax = document.getElementById("formularioC");
    
    
    formularioAjax.addEventListener("submit",function(event){
        event.preventDefault();
        let checkbox = document.getElementById("check").checked;
        if(checkbox){
        realizarPeticionAsincrona4();
        }else{
            alert("Selecciona el checkbox antes!!")
        }
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



function comprobarEstadoPeticion4(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                tratarResultadoCheck(this.responseText);
            }else{
            }
            break;
    }
}

function realizarPeticionAsincrona4(){
    let check = document.getElementById("check").value;

    miXHR = new objetoXHR();
    miXHR.open("POST", "servidor/datosCheckbox.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion4;
    
    let datos = "nombre="+check;
    miXHR.send(datos);

}


/////////////////////////////////////////////////////////
            // Empieza el SELECT //
/////////////////////////////////////////////////////////


document.addEventListener("DOMContentLoaded",function(){
    let formularioAjax2 = document.getElementById("formularioSelect");
    formularioAjax2.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincrona2();
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



function comprobarEstadoPeticion2(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                tratarResultadoSelect(this.responseText);
            }else{
            }
            break;
    }
}

function realizarPeticionAsincrona2(){
    let habitacion = document.getElementById("habitacion").value;

    miXHR = new objetoXHR();
    miXHR.open("POST", "servidor/datosSelect.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion2;
    
    let datos3 = "habitacion="+habitacion;
    miXHR.send(datos3);

}




/////////////////////////////////////////////////////////
            // Empieza el TEXTAREA //
/////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded",function(){
    let formularioAjax = document.getElementById("formularioTA");
    formularioAjax.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincrona5();
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



function comprobarEstadoPeticion5(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                tratarResultadoTA(this.responseText);
            }else{
            }
            break;
    }
}

function realizarPeticionAsincrona5(){
    let tarea = document.getElementById("tarea").value;

    miXHR = new objetoXHR();
    miXHR.open("POST", "servidor/datosTextArea.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion5;
    
    let datos = "tarea="+tarea;
    miXHR.send(datos);

}




/////////////////////////////////////////////////////////
            // Empieza el INSERT //
/////////////////////////////////////////////////////////


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
    let nombre2 = document.getElementById("nombre2").value;

    miXHR = new objetoXHR();
    miXHR.open("POST", "servidor/datosInsertar.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion3;
    
    let datos = "nombre2="+nombre2 ; 

    miXHR.send(datos);

}
