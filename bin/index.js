#! /usr/bin/env node
class Person {
    name;
    id;
    age;
    constructor(name, id, age) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    getid(id) {
        return this.id;
    }
    ;
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, id, age, rollNumber) {
        super(name, id, age);
        this.rollNumber = rollNumber;
    }
    registerforcourses(courses) {
        this.courses.push(courses);
    }
}
class Teacher extends Person {
    salary;
    courses = [];
    constructor(name, id, age, salary) {
        super(name, id, age);
        this.salary = salary;
    }
    assignCourse(courses) {
        this.courses.push(courses);
    }
}
class Courses {
    id;
    name;
    student = [];
    teacher;
    constructor(id, name, teacher) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
    }
    addStudent(student) {
        this.student.push(student);
    }
    setTeacher(teacher) {
        this.teacher = teacher;
    }
}
class Department {
    name;
    course = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.course.push(course);
    }
}
export {};
