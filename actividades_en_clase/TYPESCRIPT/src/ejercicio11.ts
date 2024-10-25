//Undecimo Ejercicio, Crear una Función que Verifique si un Número es Primo

function isPrime(num: number): boolean{
    if(num <= 1) return false;
    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(11));
console.log(isPrime(10));