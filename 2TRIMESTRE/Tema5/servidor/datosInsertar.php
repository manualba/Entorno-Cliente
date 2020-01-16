<?php
   
   header('Content-Type: application/json');
   header('Cache-Control: no-cache, must-revalidate');
   
       $servidor = "localhost";
       $usuario = "root";
       $contrasena = "";  
       $basededatos = "hoteles";
   
       $conexion = mysqli_connect($servidor, $usuario, $contrasena, $basededatos);
       
       $nombre = $_POST['nombre'];
       $dni = $_POST['dni'];
       $fecha = $_POST['fecha'];
       $tipo_habitacion = $_POST['tipo_habitacion'];


       $consulta = "INSERT INTO clientes (nombre,dni,fecha,tipo_habitacion) VALUES ($nombre,$dni,$fecha,$tipo_habitacion)";
   
       $resultadoInsertar = mysqli_query($conexion, $consulta);
   
       $resultadoI = array();
   
       while ($columna = mysqli_fetch_array( $resultadoInsertar )){
           $resultadoI[] = $columna;
       }
       echo json_encode($resultadoI);
   
       mysqli_close($conexion);
   
   
   ?>
   