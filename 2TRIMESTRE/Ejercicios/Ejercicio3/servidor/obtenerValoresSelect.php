<?php

header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

switch($_POST["tipoPrueba"]){
    case "1":
 
  $mysqli = new mysqli('localhost', 'root', '', 'spain');

  $query = $mysqli -> query ("SELECT * FROM provincias");
                    
    while ($texto = mysqli_fetch_array($query)) {
        
                            
}
        break;

    case "2":
        $mysqli = new mysqli('localhost', 'root', '', 'spain');

  $query = $mysqli -> query ("SELECT * FROM c_autonomas");
                    
    while ($texto = mysqli_fetch_array($query)) {
                            
}
        break;
    default:
        $texto .="<option value=''></option>";
        break;
}
echo json_encode($texto);
?>