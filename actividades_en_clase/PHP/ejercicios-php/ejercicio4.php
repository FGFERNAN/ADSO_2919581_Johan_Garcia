<?php
    
    // Convertir un array a JSON y guardarlo en un archivo
    $nombres = ["Juan", "Ana", "Carlos"];
    $jsonData = json_encode($nombres, JSON_PRETTY_PRINT);
    file_put_contents('data.json', $jsonData);
    echo "Datos guardados en datos.json";
?>