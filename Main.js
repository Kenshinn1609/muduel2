"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var StudentManager_1 = require("./StudentManager");
var Student1 = new Student_1.Student('hoang', 'C08', 9, 8);
var Student2 = new Student_1.Student('hoang', 'C08', 10, 8);
var Student3 = new Student_1.Student('ken', 'C09', 9, 8);
var Student4 = new Student_1.Student('shin', 'C07', 9, 10);
var StudentMa = new StudentManager_1.StudentManager();
StudentMa.add(Student1);
StudentMa.add(Student2);
StudentMa.add(Student3);
StudentMa.add(Student4);
console.log(StudentMa.getRank());
console.log(StudentMa.searchByName('hoang'));
console.log(StudentMa.getAvg(Student2));
console.log(StudentMa.searchbyGroup('C07'));
