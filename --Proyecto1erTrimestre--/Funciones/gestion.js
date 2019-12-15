let ErroresMejorVuelo = document.getElementById("ErroresMejorVuelo");
let MejorVuelosErrores = document.getElementById("MejorVuelosErrores");
let erroresOrdenarPor = document.getElementById("erroresOrdenarPor");
function VueloMejorVotado(){
    let inputLongitud = document.getElementById("longitudTitulo");
    let longitud = inputLongitud.value;
    let VueloFinal = [];
    vaciarDivErrores(ErroresMejorVuelo);
    let esLongitudCorrecta = validarLogitud(inputLongitud,ErroresMejorVuelo);

    if(esLongitudCorrecta){
        vuelos.forEach(vuelo => {
            if(vuelo.titulo.length >= longitud){
                if(!VueloFinal.includes(vuelo)){
                    VueloFinal.push(vuelo);
                }
            }
        });
        VueloFinal = VueloFinal.sort(function(vuelo1,vuelo2){
            return vuelo2.likes - vuelo1.likes;
        });
        mostrarVuelosHTML(VueloFinal);
    }
}

        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        let radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.90
        setInterval(drawClock, 1000);
        
        function drawClock() {
          drawFace(ctx, radius);
          drawNumbers(ctx, radius);
          drawTime(ctx, radius);
        }
        
        function drawFace(ctx, radius) {
          var grad;
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, 2*Math.PI);
          ctx.fillStyle = 'white';
          ctx.fill();
          grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
          grad.addColorStop(0, '#333');
          grad.addColorStop(0.5, 'white');
          grad.addColorStop(1, '#333');
          ctx.strokeStyle = grad;
          ctx.lineWidth = radius*0.1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
          ctx.fillStyle = '#333';
          ctx.fill();
        }
        
        function drawNumbers(ctx, radius) {
          var ang;
          var num;
          ctx.font = radius*0.15 + "px arial";
          ctx.textBaseline="middle";
          ctx.textAlign="center";
          for(num = 1; num < 13; num++){
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius*0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius*0.85);
            ctx.rotate(-ang);
          }
        }
        
        function drawTime(ctx, radius){
            let now = new Date();
            let hour = now.getHours();
            let minute = now.getMinutes();
            var second = now.getSeconds();
            //hour
            hour=hour%12;
            hour=(hour*Math.PI/6)+
            (minute*Math.PI/(6*60))+
            (second*Math.PI/(360*60));
            drawHand(ctx, hour, radius*0.5, radius*0.07);
            //minute
            minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
            drawHand(ctx, minute, radius*0.8, radius*0.07);
            // second
            second=(second*Math.PI/30);
            drawHand(ctx, second, radius*0.9, radius*0.02);
        }
        
        function drawHand(ctx, pos, length, width) {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.moveTo(0,0);
            ctx.rotate(pos);
            ctx.lineTo(0, -length);
            ctx.stroke();
            ctx.rotate(-pos);
        }

        function muestraReloj()
        {
        // Compruebo si se puede ejecutar el script en el navegador del usuario
        if (!document.layers && !document.all && !document.getElementById) return;
        // Obtengo la hora actual y la divido en sus partes
        var fechacompleta = new Date();
        var horas = fechacompleta.getHours();
        var minutos = fechacompleta.getMinutes();
        var segundos = fechacompleta.getSeconds();
        var mt = "AM";
        // Pongo el formato 12 horas
        if (horas > 12) {
        mt = "PM";
        horas = horas - 12;
        }
        if (horas == 0) horas = 12;
        if (minutos <= 9) minutos = "0" + minutos;
        if (segundos <= 9) segundos = "0" + segundos;
        cadenareloj = "<font size=’1′ face=’verdana’ ><b>" + horas + ":" + minutos + ":" + segundos + " " + mt + "</b></font>";
        if (document.layers) {
        document.layers.spanreloj.document.write(cadenareloj);
        document.layers.spanreloj.document.close();
        }
        else if (document.all) spanreloj.innerHTML = cadenareloj;
        else if (document.getElementById) document.getElementById("spanreloj").innerHTML = cadenareloj;
        setTimeout("muestraReloj()", 1000);
        }
        
function MejorVuelo(){
    let inputCompañia = document.getElementById("compañia");
    let compañia = inputCompañia.value();
    let VuelosCompañia = [];
    let vuelosFinal = [];
    vaciarDivErrores(MejorVuelosErrores);
    let esGeneroCorrecto = validarVuelo(inputCompañia,MejorVuelosErrores);

    if(esGeneroCorrecto){

        for (let i = 0; i < vuelos.length; i++) {
            if(vuelos[i].compañia.toUpperCase() === compañia.toUpperCase()){
                if(!VuelosCompañia.includes(vuelos[i])){
                    VuelosCompañia.push(vuelos[i]);
                }
            }
            
        }
        
        VuelosCompañia = VuelosCompañia.sort(function(vuelo1,vuelo2){
            return vuelo2.likes - vuelo1.likes;
        });

        vuelosFinal.push(VuelosCompañia[0]) ;
    }

    mostrarVuelosHTML(vuelosFinal);
}

function ordenarPor(){
    let inputOrden = document.getElementById("compañia");
    let orden = inputOrden.value;
    let VuelosOrdenados = [];
    vaciarDivErrores(erroresOrdenarPor);
    let esOrdenCorrecto = validarOpcionSeleccionada(inputOrden,erroresOrdenarPor);

    if(esOrdenCorrecto){
        VuelosOrdenados = vuelos;
        if(orden === "titulo"){
            VuelosOrdenados = VuelosOrdenados.sort(function(vuelo1,vuelo2){
                if(vuelo1.titulo.toLowerCase() > vuelo2.titulo.toLowerCase()){
                    return 1;
                }else if(vuelo1.titulo.toLowerCase() < vuelo2.titulo.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "compañia"){
            VuelosOrdenados = VuelosOrdenados.sort(function(vuelo1,vuelo2){
                if(vuelo1.compañia.toLowerCase() > vuelo2.compañia.toLowerCase()){
                    return 1;
                }else if(vuelo1.compañia.toLowerCase() < vuelo2.compañia.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "compañia"){
            VuelosOrdenados = VuelosOrdenados.sort(function(vuelo1,vuelo2){
                if(vuelo1.compañia.nombre.toLowerCase() > vuelo2.compañia.nombre.toLowerCase()){
                    return 1;
                }else if(vuelo1.compañia.nombre.toLowerCase() < vuelo2.compañia.nombre.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "productora"){
            VuelosOrdenados = VuelosOrdenados.sort(function(vuelo1,vuelo2){
                if(vuelo1.productora.nombre.toLowerCase() > vuelo2.productora.nombre.toLowerCase()){
                    return 1;
                }else if(vuelo1.productora.nombre.toLowerCase() < vuelo2.productora.nombre.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "likes"){
            VuelosOrdenados = VuelosOrdenados.sort(function(vuelo1,vuelo2){
                return vuelo2.likes - vuelo1.likes;
            });
        }else{
            VuelosOrdenados = VuelosOrdenados.sort(function(vuelo1,vuelo2){
                return vuelo2.dislikes - vuelo1.dislikes;
            });
        }
        
    }

    mostrarVuelosHTML(VuelosOrdenados);
}

let botonVotarVuelo = document.getElementById("botonVotarVuelo");
let inputLongitud = document.getElementById("longitudTitulo");
let botonMejorVuelo = document.getElementById("botonPeliMasVotada");
let botonOrdenarPor = document.getElementById("botonOrdenarPor");

inputLongitud.addEventListener("focus",focus);
inputLongitud.addEventListener("blur",blur);

botonMejorVuelo.addEventListener("click", MejorVuelo);
botonOrdenarPor.addEventListener("click",ordenarPor);



document.addEventListener("DOMContentLoaded", function(event) {
});