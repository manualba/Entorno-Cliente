<?php

header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

switch($_POST["tipoPrueba"]){
    case "1":
 
  $mysqli = new mysqli('localhost', 'root', '', 'spain');

  $query = $mysqli -> query ("SELECT * FROM espania");
                    
    while ($fila = mysqli_fetch_array($query)) {
        $texto .="<select id='prueba' name='prueba'>";
        $texto .='<option value="1">'.$fila['provincias'].'</option>'; 
        $texto .="</select>";
                            
}
        break;

    case "2":
        $mysqli = new mysqli('localhost', 'root', '', 'spain');

  $query = $mysqli -> query ("SELECT * FROM espania");
    while ($fila = mysqli_fetch_array($query)) {
        $texto .="<select id='prueba' name='prueba'>";
        $texto .='<option value="2">'.$fila['c_aut'].'</option>'; 
        $texto .="</select>";  
              
}
        break;
    default:
        $texto .="<option value=''>--Selecciona--</option>";
        break;
}

echo json_encode($texto);
?>