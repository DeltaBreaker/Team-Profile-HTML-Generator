let Employee = require("./employee.js");

const QUESTIONS = [
    {
        message: "What is the intern's name?",
        name: "employeeName"
    },
    {
        message: "What is the intern's ID?",
        name: "employeeID"
    },
    {
        message: "What is the intern's email?",
        name: "employeeEmail"
    },
    {
        message: "What is the intern's school?",
        name: "employeeSchool"
    }
]

class Intern extends Employee {
    constructor(info) {
        super(info);
        this.school = info.employeeSchool;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = {
    obj: Intern,
    QUESTIONS
}