$(() => $("#nombre").keyup(() => { //() => es igual a "function(){...}"
    let resultado = false;
    let inputNombre = $("#nombre");
    inputNombre.removeClass("error");
    inputNombre.removeClass("correcto");
    let valorNombre = inputNombre.val().trim();
    if(valorNombre !== ""
        && valorNombre.match(/^[A-Z]{3,}[0-9]{1,}$/)
    ){
        resultado = true;
        inputNombre.addClass("correcto");
        if(inputNombre.next().length > 0 ){
            inputNombre.next().remove();
        }
    }else{
        inputNombre.addClass("error");
        if(inputNombre.next().length === 0 ){
            inputNombre.after("<span>ERROR EN EL NOMBRE</span>");
        }
    }


    return resultado;
}));

$(() => $("#tiempo").keyup(() => { 
    let resultado = false;
    let inputTiempo = $("#tiempo");
    inputTiempo.removeClass("error");
    inputTiempo.removeClass("correcto");
    let valorTiempo = inputTiempo.val().trim();

    if(valorTiempo !== ""
        && valorTiempo.match(/^[0-9]{2,}$/)
        
    ){
        resultado = true;
        inputTiempo.addClass("correcto");
        if(inputTiempo.next().length > 0 ){
            inputTiempo.next().remove();
        }
        
    }else{
        inputTiempo.addClass("error");
        if(inputTiempo.next().length === 0 ){
            inputTiempo.after("<span>ERROR EN EL TIEMPO</span>");
        }
    }


    return resultado;

}));

$(() => $("#tipo").change(() => { 
    let resultado = false;
    let inputTipo = $("#tipo");
    inputTipo.removeClass("error");
    inputTipo.removeClass("correcto");
    
        if ($('#tipo').val() !== ''){
        resultado = true;
        inputTipo.addClass("correcto");
        if(inputTipo.next().length > 0 ){
            inputTipo.next().remove();
        }
       
        }else{
        inputTipo.addClass("error");
        if(inputTipo.next().length === 0 ){
            inputTipo.after("<span>ERROR EN EL TIPO</span>");
        }
    }


    return resultado;

}));

$(() => $("#beneficios").click(() => { //() => es igual a "function(){...}"
    let resultado = false;
    let inputBeneficios = $("#beneficios");
    inputBeneficios.removeClass("error");
    inputBeneficios.removeClass("correcto");

        if ($('input[name="b"]').is(':checked')){
        resultado = true;
        inputBeneficios.addClass("correcto");
    
        }else{
            inputBeneficios.addClass("error");
        if(inputBeneficios.next().length === 0 ){
            inputBeneficios.after("<span>ERROR EN LOS BENEFICIOS</span>");
        }
}


return resultado;
}));


$(() => $("#personal").click(() => { //() => es igual a "function(){...}"
    let resultado = false;
    let inputPersonal = $("#personal");
    inputPersonal.removeClass("error");
    inputPersonal.removeClass("correcto");

    if ($('input[name="p"]').is(':checked')){
        resultado = true;
        inputPersonal.addClass("correcto");
        
    
        }else{
            inputPersonal.addClass("error");
        if(inputPersonal.next().length === 0 ){
            inputPersonal.after("<span>ERROR EN EL TIPO</span>");
        }
}


return resultado;
}));


function validarFormulario(){
    $("#submit").attr("disabled",true);
    let resultado = false;

    resultado = esNombreCorrecto()
                && esTiempoCorrecto()
                && esTipoCorrecto()
                && esBeneficiosCorrecto()
                && esPersonalCorrecto();


    $("#submit").removeAttr("disabled");
    return resultado;
}


//Forma de hacerlo con:  onchange="es___Correcto()"

/*function esNombreCorrecto(){
    let resultado = false;
    let inputNombre = $("#nombre");
    inputNombre.removeClass("error");
    inputNombre.removeClass("correcto");
    let valorNombre = inputNombre.val().trim();
    if(valorNombre !== ""
        && valorNombre.match(/^[A-Z]{3,}[0-9]{1,}$/)
    ){
        resultado = true;
        inputNombre.addClass("correcto");
        if(inputNombre.next().length > 0 ){
            inputNombre.next().remove();
        }
    }else{
        inputNombre.addClass("error");
        if(inputNombre.next().length === 0 ){
            inputNombre.after("<span>ERROR EN EL NOMBRE</span>");
        }
    }
    return resultado;
}*/

/*
function esTiempoCorrecto(){
    let resultado = false;
    let inputTiempo = $("#tiempo");
    inputTiempo.removeClass("error");
    inputTiempo.removeClass("correcto");
    let valorTiempo = inputTiempo.val().trim();

    if(valorTiempo !== ""
        && valorTiempo.match(/^[0-9]{2,}$/)
        
    ){
        resultado = true;
        inputTiempo.addClass("correcto");
        if(inputTiempo.next().length > 0 ){
            inputTiempo.next().remove();
        }
        
    }else{
        inputTiempo.addClass("error");
        if(inputTiempo.next().length === 0 ){
            inputTiempo.after("<span>ERROR EN EL TIEMPO</span>");
        }
    }


    return resultado;
}
*/
/*
function esTipoCorrecto(){
    let resultado = false;
    let inputTipo = $("#tipo");
    inputTipo.removeClass("error");
    inputTipo.removeClass("correcto");
    
        if ($('#tipo').val() !== ''){
        resultado = true;
        inputTipo.addClass("correcto");
        if(inputTipo.next().length > 0 ){
            inputTipo.next().remove();
        }
       
        }else{
        inputTipo.addClass("error");
        if(inputTipo.next().length === 0 ){
            inputTipo.after("<span>ERROR EN EL TIPO</span>");
        }
    }


    return resultado;
}
*/
/*
function esBeneficiosCorrecto(){
    let resultado = false;
    let inputBeneficios = $("#beneficios");
    inputBeneficios.removeClass("error");
    inputBeneficios.removeClass("correcto");
    
        if ($('input[name="b"]').is(':checked')){
        resultado = true;
        inputBeneficios.addClass("correcto");
       
        }else{
            inputBeneficios.addClass("error");
        if(inputBeneficios.next().length === 0 ){
            inputBeneficios.after("<span>ERROR EN LOS BENEFICIOS</span>");
        }
    }


    return resultado;
}
*/
/*
function esPersonalCorrecto(){
    let resultado = false;
    let inputPersonal = $("#personal");
    inputPersonal.removeClass("error");
    inputPersonal.removeClass("correcto");
    
    if ($('input[name="p"]').is(':checked')){
        resultado = true;
        inputPersonal.addClass("correcto");
        
       
        }else{
            inputPersonal.addClass("error");
        if(inputPersonal.next().length === 0 ){
            inputPersonal.after("<span>ERROR EN EL TIPO</span>");
        }
    }


    return resultado;
}*/