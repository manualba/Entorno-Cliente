<?php

header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

	$servidor = "localhost";
	$usuario = "root";
	$contrasena = "";  
	$basededatos = "viajes";

	$conexion = mysqli_connect($servidor, $usuario, $contrasena, $basededatos);
	$conexion->set_charset("utf8");
	
	$consulta = "SELECT * FROM pilotos";

	$resultadoConsulta = mysqli_query($conexion, $consulta);

    $resultado = array();

	while ($columna = mysqli_fetch_array( $resultadoConsulta )){
		$resultado[] = $columna;
	}
    echo json_encode($resultado);

	mysqli_close($conexion);


?>
