<?php
    // Leer un archivo JSON y convertirlo a un array
    $jsonData = file_get_contents('data.json');
    $nombres = json_decode($jsonData, true);
    print_r($nombres);
?>