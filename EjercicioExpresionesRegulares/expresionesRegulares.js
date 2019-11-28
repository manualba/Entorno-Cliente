//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido

function esValidaURL(url) {

    let x = /^((http|https):\/\/)+(www\.)?([a-zA-Z0-9])+(\.com|\.es)+\?+([a-zA-Z0-9])+=+([0-9]+&+([a-zA-Z0-9])+=+([0-9]))$/;
    return x.test(url);
    
}

//Función que valia un password con las siguientes características
//Al menos existan 4 letras
//Al menos existan 4 numeros
//Tiene que haber un carácter !,?,-,$ o _
//Tiene que tener al menos una letra Mayúscula
//Ayuda: Pueden usarse varias expresiones regulares para validar el password

function esValidaPassword(password) {

    let result = false;
    let caracteres = /(.*[a-zA-Z]+.*){4,}/;
    let num = /(.*[0-68-9]+.*){4,}/; // Solo numeros y no vale el 7
    let mayusculas = /(.*[A-Z]+.*){1,}/;
    let minusculas = /(.*[a-z]+.*){5,}/; // Tenga almenos 5 minusculas
    let caracteresRaros = /(.*[\!\?\-\$\_]+.*){1,}/;

    if (num.test(password) && caracteres.test(password) && 
        minusculas.test(password) &&
        mayusculas.test(password) && caracteresRaros.test(password)) {

        result = true;
    }
    return result;
}

//Función que elimina todos los caracterés que no sean letras y
//números de una texto
function eliminaCaracteresRaros(texto) {
    
    let x = /[^0-9a-zA-Z -]/gi; //Tambien permite espacios y guiones

    return texto.replace(x, "(CARACTER NO VALIDO)");
}
