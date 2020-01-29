<?php
   sleep(1);
   header('Content-Type: application/json');
   header('Cache-Control: no-cache, must-revalidate');
   
       $servidor = "localhost";
       $usuario = "root";
       $contrasena = "";  
       $basededatos = "viajes";
   
       $conexion = mysqli_connect($servidor, $usuario, $contrasena, $basededatos);
       
       $nombre = $_POST['nombre'];

       $consulta = "INSERT INTO pilotos (nombre,dni,fregistro,compania) VALUES ('$nombre','0','01-01-2020','Ninguna')";
   
       $resultadoInsertar = mysqli_query($conexion, $consulta);
   
       $resultadoI = array();
   
       while ($columna = mysqli_fetch_array( $resultadoInsertar )){
           $resultadoI[] = $columna;
       }
       echo json_encode($resultadoI);
   
       mysqli_close($conexion);
   
   
   ?>
   