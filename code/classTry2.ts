class Student2
{
    constructor(
        public firstName: string,
        public age: number, 
        private courses: string[]
    ){}

    enroll(courseName: string)
    {
        this.courses.push(courseName);
    }

    listCourses()
    {
        return [...this.courses];
    }
}

let newStudent2 = new Student2('Max',25,['React']);

newStudent2.enroll('Angular');

console.log(newStudent2.listCourses());