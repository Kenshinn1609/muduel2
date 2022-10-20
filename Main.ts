import {Student} from "./Student";
import {StudentManager} from "./StudentManager";
let Student1 = new Student('hoang','C08',9,8)
let Student2 = new Student('hoang','C08',10,8)
let Student3 = new Student('ken','C09',9,8)
let Student4 = new Student('shin','C07',9,10)
let StudentMa = new StudentManager()

StudentMa.add(Student1)
StudentMa.add(Student2)
StudentMa.add(Student3)
StudentMa.add(Student4)

console.log(StudentMa.getRank())
console.log(StudentMa.searchByName('hoang'))
console.log(StudentMa.getAvg(Student2))
console.log(StudentMa.searchbyGroup('C07'))
