<?php
$servidor = "localhost";    
$usuario = "root";
$pasword = "";
$basedatos = "prueba";

$conexion = new mysqli($servidor, $usuario, $pasword, $basedatos);

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Varias sentencias separadas con ;
$sql  = "INSERT INTO usuario (nombre, direccion) VALUES ('sebastian', 'Calle 19-49');";
$sql .= "INSERT INTO usuario (nombre, direccion) VALUES ('ivan', 'Calle 13-49');";
$sql .= "INSERT INTO usuario (nombre, direccion) VALUES ('rosa', 'Calle 13-49');";
$sql .= "INSERT INTO usuario (nombre, direccion) VALUES ('esteban', 'Calle 13-49');";
$sql .= "INSERT INTO usuario (nombre, direccion) VALUES ('jose', 'Calle 13-49');";

if ($conexion->multi_query($sql) === TRUE) {
    echo "Registros insertados correctamente";
} else {
    echo "Error al insertar los datos: " . $conexion->error;
}

$conexion->close();
?>
