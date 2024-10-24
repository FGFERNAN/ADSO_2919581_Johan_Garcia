//Quinto Ejercicio Ordenar un Arreglo de Objetos
interface Person{
    name: string;
    age: number;
}

function sortByAge(people: Person[]): Person[]{
    return people.sort((a,b) => a.age - b.age);
}

const people: Person[] = [
    {name: "John", age: 30},
    {name: "Anna", age: 25},
    {name: "Louis", age: 35}
];

const peopleOrdered = sortByAge(people);
console.log(peopleOrdered);