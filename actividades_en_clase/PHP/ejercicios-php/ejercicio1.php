<?php

//Crea una función que reciba un array de números y devuelva la suma de todos sus elementos.
    function sumarArray($array){
        return array_sum($array);
    }

    $numeros = [1,2,3,4,5];
    echo "La suma es: " .sumarArray($numeros);
?>