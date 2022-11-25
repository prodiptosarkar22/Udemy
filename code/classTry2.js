var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Student2 = /** @class */ (function () {
    function Student2(firstName, age, courses) {
        this.firstName = firstName;
        this.age = age;
        this.courses = courses;
    }
    Student2.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student2.prototype.listCourses = function () {
        return __spreadArray([], this.courses, true);
    };
    return Student2;
}());
var newStudent2 = new Student2('Max', 25, ['React']);
newStudent2.enroll('Angular');
console.log(newStudent2.listCourses());
