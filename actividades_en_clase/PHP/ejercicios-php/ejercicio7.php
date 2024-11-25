<?php
    // Buscar el valor maximo en un array usando una funcion matematica
    function encontrarMaximo($array){
        return max($array);
    }

    $numeros = [3,7,2,5,9];
    echo "El valor maximo es: " .encontrarMaximo($numeros);
?>