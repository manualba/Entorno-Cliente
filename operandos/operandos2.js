// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE


function concatenarCadenas(){

    let clase = 0;
    let x = "ALUMNO_DAW";
    let y = "_2017";
    let resultado = x+y;

    return resultado === "ALUMNO_DAW_2017";
}

function operadorTernario(){

    let x = 0;
    let y = 0;
    let resultado =(x==y) ? true:false;

    return resultado;

}

function deleteArray(){

    let array = [1,2,3,4,5,6,7,8,9,10];
    delete array[9];


    return array[9] === undefined;

}

function crearArray(){
    var object =new Object();
    var date =new Date();
    let x = [1.5,"ALUMNOS",date,1,object,undefined,null];

    return  x[0] ===  1.5
        && x[1] ===  "ALUMNOS"
        && x[2] instanceof Date
        && typeof x[3] === "number"
        && typeof x[4] === "object"
        && x[5] === undefined
        && x[6] === null;

}

function existeElemento(){

    let x = {prueba1:"prueba1",prueba2:"prueba2"};

    return "prueba1" in x && "prueba2" in x;

}