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

    for (let j = 0; j < frases.length; j++) {
        let valor = frases[j].toLocaleLowerCase();

        if (valor.includes(trozoPalabra.toLocaleLowerCase(), 
            trozoPalabra.length) === true &&
            valor.includes(trozoPalabra.toLocaleLowerCase(), 
            frases[j].length - trozoPalabra.length) === false) {

            if (valor.startsWith(trozoPalabra.toLocaleLowerCase()) || 
            valor.endsWith(trozoPalabra.toLocaleLowerCase())) {

            } else {
                result +=  " " + frases[j];
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
    let result = 0;
    let sumar = 1;

    for (let j = 0; frases.length > j; j++) {
        
        if (frases[j].includes(trozoPalabra)) {
            sumar = frase.indexOf(trozoPalabra, sumar+1);

            if (sumar === 1) {
                sumar = 0;
            }

            result = result + sumar;
            
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

    rgb = color.toLocaleLowerCase();
    let result = false;
    let lista = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9",
                "a", "b", "c", "d", "e", "f"];
    let cont = 0;

    if (color.startsWith("#")) {

        for (let j = 1; color.length > j; j++) {
            let comparar = rgb.charAt(j);
            for (let j = 0; lista.length > j; j++) {
                
                if (comparar.includes(lista[j]) === true) {
                    cont++;
                }
            }
        }
    }
    if (cont === color.length - 1) {
        result = true;
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
    lista = url.split(" ");

    if (lista.includes == " ") {

        if (url.startsWith("http://www.") 
            || url.startsWith("https://www.") 
            || lista[j].startsWith("com") 
            || lista[j].startsWith("es")) {

                if (lista[j].includes("&") === true) {
                    result = true;
                }
            
        }
    }
    return result;
}