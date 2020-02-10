<?php
   
   header('Content-Type: application/json');
   header('Cache-Control: no-cache, must-revalidate');
   
       $servidor = "localhost";
       $usuario = "root";
       $contrasena = "";  
       $basededatos = "espania";
   
       $conexion = mysqli_connect($servidor, $usuario, $contrasena, $basededatos);
       
       $provincias = $_POST['provincias'];

       $consulta = "INSERT INTO provincias (provincias) VALUES ('$provincias')";
   
       $resultadoInsertar = mysqli_query($conexion, $consulta);
   
       $resultadoI = array();
   
       while ($columna = mysqli_fetch_array( $resultadoInsertar )){
           $resultadoI[] = $columna;
       }
       echo json_encode($resultadoI);
   
       mysqli_close($conexion);
   
   
   ?>
   