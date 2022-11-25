class Student
{
    firstname: string;
    age: number;
    private courses: string[];

    constructor(first: string, age: number, courseList: string[])
    {
        this.firstname = first;
        this.age = age;
        this.courses = courseList;
    }

    enroll(courseName: string)
    {
        this.courses.push(courseName);
    }

    listCourses()
    {
        return [...this.courses];
    }
}

let newStudent = new Student('Max',25,['React']);

newStudent.enroll('Angular');

console.log(newStudent.listCourses());