//Quinceavo Ejercicio, Crear una Jerarquia de Clases donde Dog y Cat Hereden de Animal

class Animal {
    constructor(public name: string){}

    speak(){
        console.log(`${this.name} makes a sound.`)
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak(){
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

dog.speak();
cat.speak();