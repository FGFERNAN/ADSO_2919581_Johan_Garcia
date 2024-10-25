"use strict";
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}
class Course {
    constructor(name, teacher) {
        this.name = name;
        this.teacher = teacher;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
}
const teacher = new Teacher("Jhon Doe", "Math");
const course = new Course("Algebra", teacher);
course.addStudent(new Student("Alice", 20));
course.addStudent(new Student("Bob", 22));
console.log(course);
//# sourceMappingURL=ejercicio8.js.map