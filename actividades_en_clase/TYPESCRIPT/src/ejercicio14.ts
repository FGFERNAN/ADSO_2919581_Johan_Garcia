//Catorceavo Ejercicio, Crear una Función que Cuente las Vocales en una Cadena de Texto

function countVowels(str : string): number {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

console.log(countVowels('TypeScript'));