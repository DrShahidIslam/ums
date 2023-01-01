#! /usr/bin/env node
class Person {
    name: string;
    id: number;
    age: number;
    constructor(name: string, id: number, age: number) {
        this.name = name;
        this.age = age;
        this.id = id;      
    }
    getid(id : number){
        return this.id
    }; 
}
class Student extends Person {
    rollNumber: number;
    courses: Courses[] = []

    constructor(name: string, id: number, age: number, rollNumber: number) {
        super(name, id, age)
        this.rollNumber= rollNumber;
    }
    registerforcourses(courses: Courses){
        this.courses.push(courses);
    }
}
class Teacher extends Person{
    salary : number;
    courses : Courses[] = []

    constructor(name: string, id: number, age: number, salary: number){
      super(name, id, age)
      this.salary = salary;
}
    assignCourse(courses: Courses){
        this.courses.push(courses)
    }
}
class Courses {
    id : number;
    name: string;
    student : Student[] = [];
    teacher : Teacher;

    constructor(id: number, name: string, teacher: Teacher) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;        
    }
    addStudent(student: Student){
        this.student.push(student);
    }
    setTeacher(teacher: Teacher){
        this.teacher = teacher;
    }
}
class Department{
    name: string;
    course : Courses[] = [];

    constructor(name: string,){
    this.name = name;
    }
    addCourse(course: Courses){
        this.course.push(course);
    }
}