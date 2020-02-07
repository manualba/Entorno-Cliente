<?php

header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');


$texto = "<div>";

switch($_POST["tipoCampo"]){
    case "input":
        $texto .= "<label for='prueba'>CAMPO PRUEBA</label>";
        $texto .="<input type='text' placeholder='Nombre...' id='prueba' name='prueba' value='' />";
        break;
    case "checkbox":
        $texto .="<input type='checkbox' id='prueba' name='prueba' value='OK' />";
        $texto .= "<label for='prueba'>¿CAMPO PRUEBA?</label>";    
        break;
    case "select":
        $texto .= "<label for='prueba'>SELECCIONA UNA OPCION</label>";
        $texto .="<select id='prueba' name='prueba'>";
        $texto .="<option value=''>--Selecciona--</option>";
        $texto .="<option value='1'>Provincias</option>";
        $texto .="<option value='2'>Comunidades autonomas</option>";
        $texto .="</select>";
        break;
    default:
        $texto = "Tienes que seleccionar algo!";
        break;
}

$texto .= "</div>";

echo json_encode($texto);
?>
