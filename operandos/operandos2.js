// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE


function concatenarCadenas(){

    let clase = 0;
    let x = "ALUMNO_DAW";
    let y = "_2017";

    clase = x + y;

    let resultado = clase;

    return resultado === "ALUMNO_DAW_2017";
}

function operadorTernario(){

    let x = 0;
    let y = 0;

    let resultado = (x === y) ? true:false;

    return resultado;

}

function deleteArray(){

    let array = [1,2,3,4,5,6,7,8,9,10];
    delete array[10];


    return array[10] === undefined;

}

function crearArray(){

    var object =new Object();
    var date =new Date();
    let lista = [1.5,"ALUMNOS",date,1,object,undefined,null];

    return  lista[0] ===  1.5
        && lista[1] ===  "ALUMNOS"
        && lista[2] instanceof Date
        && typeof lista[3] === "number"
        && typeof lista[4] === "object"
        && lista[5] === undefined
        && lista[6] === null;

}

function existeElemento(){

    let elemento = {manolo:"manolo",alba:"alba"};

    return "manolo" in elemento && "alba" in elemento;

}