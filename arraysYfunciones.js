let animal1 = {nombre:"Thor",especie:"Perro",raza:"caniche",vida:5};
let animal2 = {nombre:"Capitan America",especie:"Gato",raza:"siames",vida:8};
let animal3 = {nombre:"Viuda Negra",especie:"Perro",raza:"bulldog",vida:15};
let animal4 = {nombre:"Hulk",especie:"Perro",raza:"pastor aleman",vida:12};
let animal5 = {nombre:"Ojo de Halcon",especie:"Perro",raza:"san bernardo",vida:9};
let animal6 = {nombre:"Loky",especie:"Perro",raza:"salchicha",vida:4};
let animal7 = {nombre:"Iron Man",especie:"Conejo",raza:"pascuas",vida:9};
let animal8 = {nombre:"WarMachine",especie:"Perro",raza:"raton de praga",vida:20};
let animal9 = {nombre:"Vision",especie:"Perro",raza:"pastor belga",vida:12};
let animal10 = {nombre:"Quicksilver",especie:"Pajaro",raza:"loro",vida:15};

//He cambiado el nombre de mercurio, Quicksilver le queda mejor xD

let listadoAnimales = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];

// Dada la lista de animales, habría que implementar las siguientes funciones (2 puntos)

function existeAlgunaEspeciePerroConVidaPares(){  

    let contVP = 0; //Declaramos un contador para contar las especies perro y sean pares

    for (let i = 0; i < listadoAnimales.length; i++) { 
        
        if (listadoAnimales[i]['especie'] === 'Perro') { //Contamos especies perro

            if (listadoAnimales[i]['vida'] % 2 === 0) { //Contamos especies perro pero pares

                contVP++; //Vamos sumandole por cada perro y par
            }
        }
    }

    return contVP;
}


// Dada una especie, sumar las vidas de todas los animales con
// más de una palabra en su nombre y que sea de esa especie (2 puntos)
// Esta función debe ejecutarse cada 10 segundos.

function sumarVidas(especie){

    let sumar = (especie) => console.log(listadoAnimales
                     .filter(i => (i.especie === especie)) //Filtramos las especies
                     .filter(i => i.nombre.includes(" ")) //Filtramos especies con más de una palabra en su nombre
                     .map(i => i.vida) //Vidas
                     .reduce((cont, i) => cont + i)); //sumar

    setInterval(function () { //Declaramos a las especies y las sumas de sus vidas y repetición
            console.log("Conejo: ")
            sumar("Conejo");
            console.log("Perro: ")
            sumar("Perro");
            console.log("Gato: ")
            sumar("Gato");
        }
        , 10000); //Se repite cada 10 sg
}

// Obtener una lista de todos los animales dada una especie y una raza
// Ordenados por nombre de forma descendente (2 puntos)
// Esta función debe ejecutarse 10 segundos después de ejecutarse.

function dameAnimales(especie,raza){

    let dar = (especie, raza) => console.log(listadoAnimales  //Declaramos especie y raza y las filtramos
        .filter(i => i.especie === especie)
        .filter(i => (i.raza === raza))
        .sort()  //Ordenar
        .reverse()); //Forma descendente

    setTimeout(function () {
            return dar("Perro", "pastor aleman"); //Nos devuelve los datos
        }
        , 10000); //Se ejecuta a los 10 sg
}

// Crear una funcíon, que añada un animal más a lista cumpliendo los siguientes requisitos: 
// Nombre del animal con más vida de la lista
// Especie con menos letras de las especies que hay en la lista
// Raza del animal con el nombre más alto en orden ascdente
// Vida es el número de la posición del primer animal con vida par 
// 4 puntos

function incluirAnimal(){

    // Vida 
    let vida = listadoAnimales.findIndex(x => x.vida % 2 === 0); 
        listadoAnimales.sort((x, y) => y.vida - x.vida);

    // Nombre
    let nombre = listadoAnimales[0].nombre;
        listadoAnimales.sort((x, y) => x.especie.length - y.especie.length);

    // Especie
    let especie = listadoAnimales[0].especie;
        listadoAnimales.sort((x, y) => x.nombre - y.nombre);
        
    // Raza
    let raza = listadoAnimales[0].raza;
        
    // Añadir a la lista
    let animal = { nombre, especie, raza, vida };
        listadoAnimales.push(animal);
        console.log(listadoAnimales);
}