 <?php

   header('Content-Type: application/json');
   header('Cache-Control: no-cache, must-revalidate');
   
       $servidor = "localhost";
       $usuario = "root";
       $contrasena = "";  
       $basededatos = "hoteles";
   
       $conexion = mysqli_connect($servidor, $usuario, $contrasena, $basededatos);
       
       $consulta = "SELECT * FROM clientes WHERE tipo_habitacion LIKE '%" . "suite" . "%' ";
   
       $resultadoBusqueda = mysqli_query($conexion, $consulta);
   
       $resultadoB = array();
   
       while ($columna = mysqli_fetch_array( $resultadoBusqueda )){
           $resultadoB[] = $columna;
       }
       echo json_encode($resultadoB);
   
       mysqli_close($conexion);
   
   
   ?>
   