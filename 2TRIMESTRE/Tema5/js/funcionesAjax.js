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
        alert("Comenzamos la peticion AJAX");
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

            alert("Termino la petición de AJAX");
            document.getElementById("spinner").style ="display:none";
        }
    }
}


/////////////////////////////////////////////////////////
            // Empieza el buscador //
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
                alert("Empieza la petición AJAX");
                tratarResultadoBusqueda(this.responseText);
                alert("Terminó la petición AJAX");
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
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
                alert("Empieza la petición AJAX");
                tratarResultadoSelect(this.responseText);
                alert("Terminó la petición AJAX");
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
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
                alert("Empieza la petición AJAX");
                tratarResultadoInsertar(this.responseText);
                alert("Terminó la petición AJAX");
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
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
    
    let datos = "nombre="+nombre2;
    miXHR.send(datos);

}
