"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, group, Dk1, Dk2) {
        this._name = name;
        this._group = group;
        this._Dk1 = Dk1;
        this._Dk2 = Dk2;
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (value) {
            this._group = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Dk1", {
        get: function () {
            return this._Dk1;
        },
        set: function (value) {
            this._Dk1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Dk2", {
        get: function () {
            return this._Dk2;
        },
        set: function (value) {
            this._Dk2 = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
