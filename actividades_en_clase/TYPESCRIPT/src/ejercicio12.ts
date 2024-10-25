//Duo Decimo, Crear una Función que Ordene una Matriz de Numeros de Menor a Mayor
function sortArray(arr: number[]): number[]{
    return arr.sort((a,b) => a-b);
}

console.log(sortArray([5,3,8,1,2]));