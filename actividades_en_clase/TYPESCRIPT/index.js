function greet(name) {
    return "Hello, ".concat(name);
}
//Primer Ejercicio Filtrar numeros pares de un arreglo
var username = "John";
console.log(greet(username));
function filterPairs(numbers) {
    return numbers.filter(function (num) { return num % 2 === 0; });
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var pairs = filterPairs(numbers);
console.log(pairs);
//Segundo Ejercicio Suma de las Diagonales de una Matriz
function sumDiagonals(matrix) {
    var sumPrincipal = 0;
    var sumSecondary = 0;
    for (var i = 0; i < matrix.length; i++) {
        sumPrincipal += matrix[i][i];
        sumSecondary += matrix[i][matrix.length - 1 - i];
    }
    return { diagonalPrincipal: sumPrincipal, diagonalSecondary: sumSecondary };
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
var _a = sumDiagonals(matrix), diagonalPrincipal = _a.diagonalPrincipal, diagonalSecondary = _a.diagonalSecondary;
console.log("Sum Diagonal Principal: ".concat(diagonalPrincipal));
//Tercer Ejercicio Clase para Repesentar un Libro
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.showInfo = function () {
        console.log("Title: ".concat(this.title, ", Author: ").concat(this.author, ", Year: ").concat(this.year));
    };
    Book.prototype.isMoreRecentThan = function (anotherBook) {
        return this.year > anotherBook.year;
    };
    return Book;
}());
var book1 = new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 1967);
var book2 = new Book("Don Quixote", "Miguel de Cervantes", 1605);
book1.showInfo();
console.log(book1.isMoreRecentThan(book2));
