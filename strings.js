
//Esta funcion devuelve una frase nueva que contenga
//Todas las palabras de la frase pasada por parámetro
//que contenga el trozo de palabra. 
//Pero no valdrán aquellas que tengan el trozo de la palabra
//Al principio o al final.

//Por ejemplo: obtenerNuevaFrase("Espero ir al cine a ver el joker","e") => "ver joker";
//Por ejemplo: obtenerNuevaFrase("Todo depende de si el raton si acaba pronto con el queso","to") => "raton";
function obtenerNuevaFrase(frase,trozoPalabra){
    let formato = frase.split(" ");
    let frase2 = "";
    for (let i = 0; i < formato.length; i++) {
        let x = formato[i].toLocaleLowerCase();

        if (x.includes(trozoPalabra.toLocaleLowerCase(), 
            trozoPalabra.length) === true && x.includes(trozoPalabra.toLocaleLowerCase(), 
            formato[i].length - trozoPalabra.length) === false) {

            if (x.endsWith(trozoPalabra.toLocaleLowerCase()) 
            || x.startsWith(trozoPalabra.toLocaleLowerCase())) {

            } else {
                frase2 += formato[i] + " ";
            }
        }
    }
    return frase2;
}

//Función que devuelve la suma de todas las posiciones
//En la que se encuentra una palabra en una frase.
//Por ejemplo: sumaDePosiciones("Prueba de la rueda","ue") => 16
//Por ejemplo: sumaDePosiciones("Aclaremos el ejercicio","acl") => 0
function sumaDePosiciones(frase,trozoPalabra){
    
    let x = frase.toLowerCase()
    let suma = 0;

    if (x.includes(trozoPalabra)) {

        suma += x.lastIndexOf(trozoPalabra);

        suma += x.indexOf(trozoPalabra);
    }
    return suma;

}

//Función que valida el formato RGB de los colores
//Formato RGB solo acepta letras de la A-F y a-f, 
//y numeros de 0 a 9, además de empezar por #.
//Los ejemplos de colores RGB son:
//     #123ABC o #123abc
//     #BBB    o #333     
function esValidoFormatoRGB(color){

    var colores = document.getElementById("validarColor");
    
    if (!colores) {

        colores = document.createElement("validar");
        colores.id = "validarColor";
    }

    colores.style.borderColor = "";
    colores.style.borderColor = color;

    var longitud = colores.style.borderColor;

    if (longitud.length == 0) {

        return false;
    }

    return true;
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
function esValidaURL(url){

    var prueba = new RegExp('^(https?:\\/\\/)?'+ '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{1,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+'(\\?[;&a-z\\d%_.~+=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i'); 

  return !!prueba.test(url);

}
