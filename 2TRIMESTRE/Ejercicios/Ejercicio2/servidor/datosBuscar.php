 <?php
   
   sleep(1);
   
   header('Content-Type: application/json');
   header('Cache-Control: no-cache, must-revalidate');
   
       $servidor = "localhost";
       $usuario = "root";
       $contrasena = "";  
       $basededatos = "viajes";
   
       $conexion = mysqli_connect($servidor, $usuario, $contrasena, $basededatos);
       $conexion->set_charset("utf8");
       
       $consulta = "SELECT * FROM pilotos WHERE nombre LIKE '%" . $_POST['nombre'] . "%' ";
   
       $resultadoBusqueda = mysqli_query($conexion, $consulta);
   
       $resultadoB = array();
   
       while ($columna = mysqli_fetch_array( $resultadoBusqueda )){
           $resultadoB[] = $columna;
       }
       echo json_encode($resultadoB);
   
       mysqli_close($conexion);
   
   
   ?>
   
