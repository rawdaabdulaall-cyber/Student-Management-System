
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);

        return total / this.grades.length;
    }

    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    getResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// Create Students List
let studentsList = [
    new Student(1, "Ahmed", [90, 85, 95], 90),
    new Student(2, "Mona", [45, 40, 48], 80),
    new Student(3, "Omar", [70, 75, 80], 85),
    new Student(4, "Sara", [42, 46, 44], 90)
];

// Filter struggling students
let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// Add 5 mercy marks using map
let mercyStudents = strugglingStudents.map(student => {
    let oldAverage = student.calculateAverage();

    return {
        name: student.name,
        oldAverage: oldAverage,
        newAverage: oldAverage + 5
    };
});

// Calculate total using reduce
let totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// Calculate mercy average
let mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

// Print students report
console.log("===== Students Report =====");

studentsList.forEach(student => {
    let average = student.calculateAverage();

    console.log("Name:", student.name);
    console.log("ID:", student.id);
    console.log("Average:", average.toFixed(2));
    console.log("Grade:", student.getGrade(average));
    console.log("Result:", student.getResult(average));
    console.log("-------------------------");
});

// Print mercy students
console.log("===== Mercy Students =====");
console.log(mercyStudents);

// Print mercy average
console.log("Mercy Average:", mercyAverage.toFixed(2));
