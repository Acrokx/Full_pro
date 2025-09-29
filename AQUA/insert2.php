<?php
$servidor = "localhost";    
$usuario = "root";
$pasword = "";
$basedatos = "prueba";

$conexion = new mysqli($servidor, $usuario, $pasword, $basedatos);

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Insertar un registro
$sql = "INSERT INTO usuario (nombre, direccion) VALUES ('Cristhian Enciso', 'Calle 13 19-49')";
if ($conexion->query($sql) === TRUE) {
    echo "Registro insertado correctamente";
} else {
    echo "Error al insertar: " . $conexion->error;
}

$conexion->close();
?>