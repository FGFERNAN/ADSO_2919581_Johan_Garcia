"use strict";
function sumDiagonals(matrix) {
    let sumPrincipal = 0;
    let sumSecondary = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumPrincipal += matrix[i][i];
        sumSecondary += matrix[i][matrix.length - 1 - i];
    }
    return { diagonalPrincipal: sumPrincipal, diagonalSecondary: sumSecondary };
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const { diagonalPrincipal, diagonalSecondary } = sumDiagonals(matrix);
console.log(`Sum Diagonal Principal: ${diagonalPrincipal}`);
//# sourceMappingURL=ejercicio2.js.map