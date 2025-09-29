<?php 

$servidor = "localhost";    
$usuario = "root";
$password = "";


$conexion = new mysqli($servidor, $usuario, $pasword);

if ($conexion->connect_error) {
    die("Conexion fallida: " . $conexion->connect_error);
}
echo "Conexion exitosa";
    
$SQL="CREATE DATABASE IF NOT EXISTS `prueba`";
if ($conexion->query($SQL) === TRUE) {
    echo " Base de datos creada correctamente ";
} else {
    echo "Error al crear la base de datos: " . $conexion->error;
}

?>

