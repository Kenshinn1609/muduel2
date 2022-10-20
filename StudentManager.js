"use strict";
exports.__esModule = true;
exports.StudentManager = void 0;
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
    }
    StudentManager.prototype.add = function (student) {
        this.students.push(student);
    };
    StudentManager.prototype.show = function () {
        return this.students;
        return this.students.length;
    };
    StudentManager.prototype.getAvg = function (student) {
        return (student.Dk1 + student.Dk2) / 2;
    };
    StudentManager.prototype.getRank = function () {
        for (var i = 0; i < this.students.length; i++) {
            for (var j = i + 1; j < this.students.length; j++) {
                var temp = this.students[i];
                if (this.getAvg(this.students[i]) < this.getAvg(this.students[j])) {
                    this.students[i] = this.students[j];
                    this.students[j] = temp;
                }
            }
        }
        return this.students;
    };
    StudentManager.prototype.searchByName = function (name) {
        var result = [];
        for (var k = 0; k < this.students.length; k++) {
            if (name === this.students[k].name) {
                result.push(this.students[k]);
            }
        }
        return result;
    };
    StudentManager.prototype.searchbyGroup = function (group) {
        for (var h = 0; h < this.students.length; h++) {
            if (group === this.students[h].group) {
                console.log(this.students[h]);
            }
        }
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
