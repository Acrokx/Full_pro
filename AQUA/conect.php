<?php
$servidor = "localhost";
$usuario = "root";
$pasword = "";
$basedatos = "prueba";

$conexion = new mysqli($servidor, $usuario, $pasword, $basedatos);

// Verificar conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
?>
