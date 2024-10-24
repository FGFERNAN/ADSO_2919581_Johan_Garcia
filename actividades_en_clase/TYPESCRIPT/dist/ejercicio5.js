"use strict";
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
//# sourceMappingURL=ejercicio5.js.map