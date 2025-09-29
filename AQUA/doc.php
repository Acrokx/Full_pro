<?php 

$servidor = "localhost";    
$usuario = "root";
$pasword = "";


$conexion = new mysqli($servidor, $usuario, $pasword);

if ($conexion->connect_error) {
    die("Conexion fallida: " . $conexion->connect_error);
}
echo "Conexion exitosa";
    

?>