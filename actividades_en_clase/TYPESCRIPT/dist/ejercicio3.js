"use strict";
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
//# sourceMappingURL=ejercicio3.js.map