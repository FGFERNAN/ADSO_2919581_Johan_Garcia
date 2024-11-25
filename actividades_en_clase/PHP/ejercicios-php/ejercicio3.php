<?php
    // Sumar elementos de una matriz
    function sumarMatriz($matriz){
        $suma = 0;
        foreach ($matriz as $fila){
            $suma += array_sum($fila);
        }
        return $suma;
    }
    
    $matriz = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

    echo "La suma de la matriz es: " .sumarMatriz($matriz);
?>