"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello, ${name}`;
}
let username = "John";
console.log(greet(username));
function filterPairs(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pairs = filterPairs(numbers);
console.log(pairs);
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
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    showInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
    isMoreRecentThan(anotherBook) {
        return this.year > anotherBook.year;
    }
}
const book1 = new Book("One Hundred Years of Solitude", "Gabriel García Márquez", 1967);
const book2 = new Book("Don Quixote", "Miguel de Cervantes", 1605);
book1.showInfo();
console.log(book1.isMoreRecentThan(book2));
const fs = __importStar(require("fs"));
function readJsonFile(path) {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}
function writeJsonFile(path, products) {
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync(path, data, 'utf-8');
}
const filePath = './products.json';
let products = readJsonFile(filePath);
products[0].price = 120.99;
writeJsonFile(filePath, products);
console.log('File updated successfully.');
function sortByAge(people) {
    return people.sort((a, b) => a.age - b.age);
}
const people = [
    { name: "John", age: 30 },
    { name: "Anna", age: 25 },
    { name: "Louis", age: 35 }
];
const peopleOrdered = sortByAge(people);
console.log(peopleOrdered);
//# sourceMappingURL=index.js.map