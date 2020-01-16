<?php

sleep(1);

header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

	$servidor = "localhost";
	$usuario = "root";
	$contrasena = "";  
	$basededatos = "hoteles";

	$conexion = mysqli_connect($servidor, $usuario, $contrasena, $basededatos);
	
	$consulta = "SELECT * FROM clientes";

	$resultadoConsulta = mysqli_query($conexion, $consulta);

    $resultado = array();

	while ($columna = mysqli_fetch_array( $resultadoConsulta )){
		$resultado[] = $columna;
	}
    echo json_encode($resultado);

	mysqli_close($conexion);


?>
