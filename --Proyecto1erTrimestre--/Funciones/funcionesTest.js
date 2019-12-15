//EDICION
function añadirPeliculaP(nombre,nombreD,apellidoD,genero,nombreP){
    let inputNombre = nombre;
    let inputNombreD = nombreD;
    let inputApellidoD = apellidoD;
    let inputGenero = genero;
	let inputNombreP = nombreP;
    let resultado = false;
	// vaciarDivErrores(divErroresCompañiaNueva);

    let esTituloCorrecto = validarTituloPeliculaP(inputTitulo);
    let esNombreDCorrecto = validarNombreDP(inputNombreD);
    let esApellidoCorrecto = validarApellidoDP(inputApellidoD);
    let esGeneroCorrecto = validarGeneroP(inputGenero);
    let esNombrePCorrecto = validarNombrePP(inputNombreP);
    

    if(esTituloCorrecto && esNombreDCorrecto && esApellidoCorrecto && esGeneroCorrecto && esNombrePCorrecto){
        let usuario = listaUsuarioes.find( usuario => usuario.apellidos === inputApellidoD);
        let productora = listaProductoras.find( productora => productora.nombre === inputNombreP);
        let peli = peliculas.find( pelicula => pelicula.titulo === inputTitulo);
        if(usuario === undefined){
            usuario = new Usuario(inputNombreD,inputApellidoD);
            listaUsuarioes.push(usuario);
        }

        if(productora === undefined){
            productora = new Productora(inputNombreP);
            listaProductoras.push(productora);
        }

        if(peli === undefined){
            peli = new Pelicula(inputTitulo,usuario,inputGenero,productora);
            peliculas.push(peli);
            incluirPeliculaHTML(peli);
            usuario.incluirPeliculas(peli);
            productora.incluirPeliculas(peli);
		}
		// let inputCompañia = document.getElementById("pelicula");
		// let opcion = document.createElement("option");
		// opcion.className = "opcion";
		// opcion.setAttribute("value", peli.titulo);
		// opcion.innerHTML = peli.titulo;
		// inputCompañia.appendChild(opcion);
        resultado = true;
    }
    return resultado;
}

function cambiarUsuarioActualP(compañia,nombreD,apellidoD){
	let compañiaSeleccionada = undefined;
	let inputCompañia = compañia;
	let inputNuevoNombre = nombreD;
    let inputNuevoApellido = apellidoD;
    let resultado = false;

	// vaciarDivErrores(divErroresCambiarUsuario);

	let esNuevoNombreCorrecto = validarNombreDP(inputNuevoNombre);
	let esNuevoApellidoCorrecto = validarApellidoDP(inputNuevoApellido);
	let esPeliculaCorrecto = validarcompañiaSeleccionadaP(inputCompañia);
	if(esNuevoNombreCorrecto && esNuevoApellidoCorrecto && esPeliculaCorrecto){
        let nuevoUsuario = new Usuario(inputNuevoNombre,inputNuevoApellido);
        if(!listaUsuarioes.includes(nuevoUsuario)){
        listaUsuarioes.push(nuevoUsuario);
        }
		let compañia = compañias.find(compañia => quitarEspacios(compañia.nombre) === inputCompañia);

		if(pelicula !== undefined){
			compañia.usuario = nuevoUsuario;
            nuevoUsuari.incluirPeliculas(pelicula);
            let divCompañias = document.getElementById("peliculasMostrar")
            compañiaSeleccionada = divCompañias.querySelector(`div[data-identificador = ${inputCompañia}]`);
            let usuarioActual = compañiaSeleccionada.querySelector("p[data-identificador = usuario]");
            usuarioActual.innerHTML = `${nuevoUsuario}`;
            resultado = true;
		}
	}
	return resultado;
}
/**
 * Funcion que cambia la productora de una pelicula
 */
function cambiarCompañia(nuevoNombre,apellidoD){
	let inputNuevoNombre = nuevoNombre;
    let inputCompañia = apellidoD;
    let resultado = false;

	// vaciarDivErrores(divErroresCambiarProductora);

	let esNuevoNombreCorrecto = validarNombrePP(inputNuevoNombre);
	let esCompañiaCorrecto = validarcompañiaSeleccionadaP(inputCompañia);

	if(esNuevoNombreCorrecto && esCompañiaCorrecto){
        let nuevaCompañia = new Compañia(inputNuevoNombre);
        if(!compañias.includes(nuevaCompañia)){
           compañias.push(nuevaCompañia); 
        }
		
		let compañia = compañias.find(compañia => quitarEspacios(compañia.nombre) === inputCompañia);

		if(compañia !== undefined){
            compañia.nombre = nuevaCompañia;
            let compañiaSeleccionada = document.querySelector(`div[data-identificador = ${inputCompañia}]`);
            let productoraActual = compañiaSeleccionada.querySelector("p[data-identificador = productora]");
            productoraActual.innerHTML = `${nuevaCompañia}`;
            resultado = true;
		}
		
	}
	return resultado;
}

//GESTION
function pelisMasVotadasP(l){
    let longitud = l;
    let pelisResultado = [];
    

    let esLongitudCorrecta = validarLogitudP(longitud);

    if(esLongitudCorrecta){
        peliculas.forEach(pelicula => {
            if(pelicula.titulo.length >= longitud){
                if(!pelisResultado.includes(pelicula)){
                    pelisResultado.push(pelicula);
                }
            }
        });
        pelisResultado = pelisResultado.sort(function(peli1,peli2){
            return peli2.likes - peli1.likes;
        });
        mostrarPeliculasHTML(pelisResultado);
        
    }else{
        pelisResultado = undefined;
    }
    return pelisResultado;
}

function peliMejorValoradaP(g){
    let genero = g;
    let pelisGenero = [];
    let peliculaResultado = [];
    
    let esGeneroCorrecto = validarGeneroP(genero);

    if(esGeneroCorrecto){
        for (let i = 0; i < peliculas.length; i++) {
            if(peliculas[i].genero.toUpperCase() === genero.toUpperCase()){
                if(!pelisGenero.includes(peliculas[i])){
                    pelisGenero.push(peliculas[i]);
                }
            }
            
        }
        
        pelisGenero = pelisGenero.sort(function(peli1,peli2){
            return peli2.likes - peli1.likes;
        });

        peliculaResultado.push(pelisGenero[0]) ;
    }

    if(peliculaResultado[0] !== undefined){
        mostrarPeliculasHTML(peliculaResultado);
        return peliculaResultado[0];
    }
    
}

function ordenarPorP(o){
    let orden = o;
    let peliculasOrdenadas = [];

    let esOrdenCorrecto = validarOpcionSeleccionadaP(orden);

    if(esOrdenCorrecto){
        peliculasOrdenadas = peliculas;
        if(orden === "titulo"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                if(peli1.titulo.toLowerCase() > peli2.titulo.toLowerCase()){
                    return 1;
                }else if(peli1.titulo.toLowerCase() < peli2.titulo.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "genero"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                if(peli1.genero.toLowerCase() > peli2.genero.toLowerCase()){
                    return 1;
                }else if(peli1.genero.toLowerCase() < peli2.genero.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "usuario"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                if(peli1.usuario.nombre.toLowerCase() > peli2.usuario.nombre.toLowerCase()){
                    return 1;
                }else if(peli1.usuario.nombre.toLowerCase() < peli2.usuario.nombre.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "productora"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                if(peli1.productora.nombre.toLowerCase() > peli2.productora.nombre.toLowerCase()){
                    return 1;
                }else if(peli1.productora.nombre.toLowerCase() < peli2.productora.nombre.toLowerCase()){
                    return -1;
                }else{
                    return 0;
                }
            });
        }else if(orden === "likes"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                return peli2.likes - peli1.likes;
            });
        }else if(orden === "dislikes"){
            peliculasOrdenadas = peliculasOrdenadas.sort(function(peli1,peli2){
                return peli2.dislikes - peli1.dislikes;
            });
        }else{
            peliculasOrdenadas = undefined
            return peliculasOrdenadas;
        }
        mostrarPeliculasHTML(peliculasOrdenadas);
    }

    
    return peliculasOrdenadas;
}

//USUARIO
function realizarComentarioP(usuario,pelicula,voto,comentario){
	let inputNombreUsuario = usuario;
	let inputCompañiaC = pelicula;
	let inputVoto = voto;
    let inputComentario = comentario;
    let resultado = false;

	// vaciarDivErrores(divErroresComentarios);

	let esUsuarioCorrecto = validarNombreUsuarioP(inputNombreUsuario);
	let esPeliculaCorrecta = validarcompañiaSeleccionadaP(inputCompañiaC);
	let esVotoCorrecto = validarVoto(inputVoto);
	// marcarInputComoCorrecto(inputComentario);

	if(esUsuarioCorrecto && esPeliculaCorrecta && esVotoCorrecto){
		let usuario = listaClientes.find(cliente => cliente.contieneNombre(inputNombreUsuario));
		let pelicula = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === inputCompañiaC);
		if(usuario !== undefined && pelicula !== undefined){
			let nuevoVoto = new Votos(inputNombreUsuario,inputCompañiaC,inputVoto,inputComentario);
			usuario.incluirVoto(nuevoVoto);
            pelicula.incluirVoto(nuevoVoto);
            mostrarPeliculasHTML(peliculas);
		    resultado = true;
		}
		
    }
    return resultado;
}

function validarVoto(inputVoto){
	let esCorrecto = false;
	
	if(inputVoto === null || inputVoto === ""){
		// marcarInputComoErroneo(inputVoto,divErrores,'El voto es obligatorio<br>');
	}else{
		esCorrecto = true;
		// marcarInputComoCorrecto(inputVoto);
	}
	return esCorrecto;
}


function peliculasVotadasP(usuario){
	let nombre = usuario;
	let votosPeliculas = [];
	let peliculasParaMostrar = [];
    let elementosBuscados = [];
    let resultado = false;

	// vaciarDivErrores(divErroresPelisVotadas);

	let esUsuarioCorrecto = validarNombreUsuarioP(nombre);
	if(nombreUsuario !== ""){
		nombre = nombreUsuario.trim().toUpperCase();
		votosPeliculas = votosUsuario(nombre);
	}

	if(esUsuarioCorrecto){
		votosPeliculas.forEach(votoPelicula => {
			if(!elementosBuscados.includes(votoPelicula.pelicula)){
				elementosBuscados.push(votoPelicula.pelicula);
				let peliculaAgregar = peliculas.find(pelicula => quitarEspacios(pelicula.titulo) === votoPelicula.pelicula );
				if(peliculaAgregar !== null){
					peliculasParaMostrar.push(peliculaAgregar);
				}
			}
		} );
        mostrarPeliculasHTML(peliculasParaMostrar);
        resultado = true;
	}
	return resultado;
}
/**
 * Funcion que obtiene los votos de un usuario
 * @param {string} nombre es el nombre del usuario
 */
function votosUsuario(nombre){
    let usuario = listaClientes.find( cliente => cliente.contieneNombre(nombre));
    return usuario.votos;
}
/**
 * Funcion que muestra peliculas parecidas a las favoritas del usuario segun el genero de estas
 */
function peliculasParecidasP(usuario){
	let nombre = usuario;
	let pelisFavoritas = [];
	let pelisParecidas = [];
	let listaGeneros = [];

	// vaciarDivErrores(divErroresPelisParecidas);

	let esUsuarioCorrecto = validarNombreUsuarioP(nombre);

	if(nombre !== ""){
		pelisFavoritas = pelisFavoritasUsuario(nombre);
	}

	for (let i = 0; i < pelisFavoritas.length; i++) {
		let genero = pelisFavoritas[i].genero;
		if(!listaGeneros.includes(genero)){
			listaGeneros.push(genero);
		}
		
	}

	if(esUsuarioCorrecto){
		listaGeneros.forEach(genero => {
			for (let i = 0; i < peliculas.length; i++) {
				if(peliculas[i].genero === genero){
					let peliculaAgregar = peliculas[i];
					if(!pelisFavoritas.includes(peliculaAgregar) && !pelisParecidas.includes(peliculaAgregar)){
						pelisParecidas.push(peliculaAgregar);
					}
				}
			}
		});
        mostrarPeliculasHTML(pelisParecidas);
        return pelisParecidas;
    }
    pelisParecidas = undefined;
    return pelisParecidas;
}


function pelisFavoritasUsuario(nombre){
	let usuario = listaClientes.find( cliente => cliente.contieneNombre(nombre));
    return usuario.peliculasFav;
}

function eliminarPeliFavoritaP(usuario,peli){
	let nombre = usuario;
	let pelisFavoritas = pelisFavoritasUsuario(nombre);
    let peliSeleccionada = peli;
    let resultado = false;

	let esUsuarioCorrecto = validarNombreUsuarioP(nombre);
	let esPeliCorrecta = validarcompañiaSeleccionadaP(peliSeleccionada);

	if(esPeliCorrecta && esUsuarioCorrecto){
		let usuario = listaClientes.find(cliente => cliente.nombre === nombre);
		let peliEliminada = usuario.peliculasFav.find(peliculaFav=> quitarEspacios(peliculaFav.titulo) === peliSeleccionada);
		eliminarElementoArray(usuario.peliculasFav, peliEliminada);
		// crearOpcionesPersonalizadasP(nombre,inputCompañiaEF);
        mostrarPeliculasHTML(usuario.peliculasFav);
        resultado = true;
    }
    return resultado;
}

function eliminarElementoArray(array, item){
	var i = array.indexOf( item );
 
    if ( i !== -1 ) {
        array.splice( i, 1 );
    }
}
