<?php
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $nombre = $_POST['nombre'];
        $correo = $_POST['correo'];

        $linea = "Nombre: $nombre, Correo: $correo" .PHP_EOL;
        file_put_contents('usuarios.txt', $linea, FILE_APPEND);
        echo "Datos guardados en usuarios.txt";
    }
?>