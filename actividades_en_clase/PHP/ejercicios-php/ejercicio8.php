<?php
    // Calcular el factorial de un numero usando una funcion recursiva
    function factorial($numero){
        if($numero <= 1) return 1;
        return $numero * factorial($numero - 1);
    }

    echo "El factorial de 5 es: " . factorial(5);
?>