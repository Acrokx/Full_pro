<?php
include("conect.php"); // Trae la conexión

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];

    $sql = "INSERT INTO usuario (nombre, direccion) VALUES ('$nombre', '$direccion')";

    if ($conexion->query($sql) === TRUE) {
        echo "Registro insertado correctamente";
    } else {
        echo "Error: " . $conexion->error;
    }
}

$conexion->close();
?>
