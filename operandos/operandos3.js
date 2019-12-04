//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a, b) {

    if (a < b) { //b mayor
        return -1;

    } else if (a == b) { //iguales
        return 0;

    } else { //a mayor
        return 1;
    }
}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elemetos) {

    let sumaNumP = 0;

    for (i = 0; i < elemetos.length; i++) {

        if ((elemetos[i] % 2) === 0) {
            sumaNumP = sumaNumP + elemetos[i];
        }
    }
    return sumaNumP;
}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elemetos) {

    let numGrande = elemetos[0];

    for (i = 0; i < elemetos.length; i++) {

        if (elemetos[i] > numGrande) {
            numGrande = elemetos[i];
        }
    }
    return numGrande;
}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(string) {

    let invertirPalabra = "";

    for (i = 0; i <= string.length; i++) {

        invertirPalabra = invertirPalabra + string.charAt(string.length - i)
    }

    return invertirPalabra;
}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(string) {

    let numImpar = 0;

    for (i = 0; i < string.length; i++) {

        if (string[i] % 2 !== 0) {
            numImpar++;
        }
    }
    return numImpar;
}