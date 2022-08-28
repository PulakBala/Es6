const student = {
    name: 'Kolim Uddin', 
    age: 15,
    class: 'Ten',
    marks: {
        math: 48,
        physics: 89,
        chemistry: 65
    }
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
console.log(chemistry);