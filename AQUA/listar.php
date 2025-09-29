<?php
include("conect.php"); // conexión

$sql = "SELECT * FROM usuario";
$result = $conexion->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Nombre: " . $row["nombre"] . " - Dirección: " . $row["direccion"] . "<br>";
    }
} else {
    echo "0 resultados";
}

$conexion->close();
?>
