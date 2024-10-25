//Clase II 
//Sexto Ejercicio, Crear una Funcion que Devuelva el N-ésimo Número de la Secuencia de Fibonacci

function fibonacci(n: number ): number {
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));