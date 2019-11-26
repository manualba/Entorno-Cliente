//Esta funcion devuelve una frase nueva que contenga
//Todas las palabras de la frase pasada por parámetro
//que contenga el trozo de palabra. 
//Pero no valdrán aquellas que tengan el trozo de la palabra
//Al principio o al final.

//Por ejemplo: obtenerNuevaFrase("Espero ir al cine a ver el joker","e") => "ver joker";
//Por ejemplo: obtenerNuevaFrase("Todo depende de si el raton si acaba pronto con el queso","to") => "raton";
function obtenerNuevaFrase(frase, trozoPalabra) {

    let frases = frase.split(" ");

    let result = "";

    for (let i = 0; i < frases.length; i++) {
        let min = frases[i].toLocaleLowerCase();

        if (min.includes(trozoPalabra.toLocaleLowerCase(), 
            trozoPalabra.length) === true && min.includes(trozoPalabra.toLocaleLowerCase(), 
            frases[i].length - trozoPalabra.length) === false) {

            if (min.endsWith(trozoPalabra.toLocaleLowerCase()) || 
            min.startsWith(trozoPalabra.toLocaleLowerCase())) {

            } else {
                result += frases[i] + " ";
            }

        }

    }

    return result;

}
//Función que devuelve la suma de todas las posiciones
//En la que se encuentra una palabra en una frase.
//Por ejemplo: sumaDePosiciones("Prueba de la rueda","ue") => 16
//Por ejemplo: sumaDePosiciones("Aclaremos el ejercicio","acl") => 0
function sumaDePosiciones(frase, trozoPalabra) {
    
    let frases = frase.split(" ");
    let suma = 0;
    let result = 0;

    for (let i = 0; frases.length > i; i++) {
        if (frases[i].includes(trozoPalabra)) {
            suma = frase.indexOf(trozoPalabra, suma + 1);
            if (suma === -1) {
                suma = 0;
            }
            result = result + suma;

        }
    }
    return result;
}

//Función que valida el formato RGB de los colores
//Formato RGB solo acepta letras de la A-F y a-f, 
//y numeros de 0 a 9, además de empezar por #.
//Los ejemplos de colores RGB son:
//     #123ABC o #123abc
//     #BBB    o #333     
function esValidoFormatoRGB(color) {
    colores = color.toLocaleLowerCase();
    let result = false;
    let cadena = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
                "a", "b", "c", "d", "e", "f",];
    let cont = 0;
    if (color.startsWith("#")) {

        for (let j = 1; color.length > j; j++) {
            let comparar = colores.charAt(j);
            for (let i = 0; cadena.length > i; i++) {
                
                if (comparar.includes(cadena[i]) === true) {
                    cont++;
                }
            }
        }
    }
    if (cont === color.length - 1) {
        result = true;
    }
    if (colores.endsWith("#")) {
        result = false;
    }
    return result;
}

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
    result = false;

    urlArray = url.split(".");
    if (urlArray.length > 2) {

        if (url.startsWith("http://www.") || url.startsWith("https://www.")) {
            if (urlArray[2].startsWith("com") || urlArray[2].startsWith("es")) {

                if (urlArray[2].includes("&") === true) {

                    result = true;

                }
            }
        }
    }
    return result;
}