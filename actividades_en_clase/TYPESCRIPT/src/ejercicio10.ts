//Decimop Ejercicio, Crear una Función que Invierta una Cadena de Texto
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

console.log(reverseString('TypeScript'));