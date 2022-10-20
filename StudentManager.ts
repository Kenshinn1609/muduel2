import {Student} from "./Student";

export class StudentManager {
    students: Student[] = [];

    constructor() {
    }

    add(student: Student) {
        this.students.push(student)

    }

    show() {
        return this.students
        return this.students.length
    }

    getAvg(student: Student): number {
        return (student.Dk1 + student.Dk2) / 2

    }

    getRank() {
        for (let i = 0; i < this.students.length; i++) {
            for (let j = i + 1; j < this.students.length; j++) {
                let temp = this.students[i]
                if (this.getAvg(this.students[i]) < this.getAvg(this.students[j])) {
                    this.students[i] = this.students[j];
                    this.students[j] = temp

                }
            }
        }
        return this.students
    }

    searchByName(name: string) {
        let result = []
        for (let k = 0; k < this.students.length; k++) {
            if (name === this.students[k].name) {
                result.push(this.students[k])
            }
        }
        return result
    }

    searchbyGroup(group: string) {
        for (let h = 0; h < this.students.length; h++) {
            if (group === this.students[h].group) {
                console.log(this.students[h])
            }
        }
    }

}

