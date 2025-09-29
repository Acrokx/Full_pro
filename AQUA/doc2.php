<?php 
$servidor = "localhost";    
$usuario = "root";
$pasword = "";
$basedatos = "prueba"; // nombre de la base de datos

// Conexión a la base de datos
$conexion = new mysqli($servidor, $usuario, $pasword, $basedatos);

// conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
echo "Conexión exitosa<br>";

// Crear tabla
$sql = "CREATE TABLE usuario (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL, 
    direccion VARCHAR(50)
)";

if ($conexion->query($sql) === TRUE) {
    echo "Tabla creada correctamente";
} else {
    echo "Error al crear la tabla: " . $conexion->error;
}

$conexion->close();
?>
