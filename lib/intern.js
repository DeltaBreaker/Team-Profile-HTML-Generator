// Import parent class
let Employee = require("./employee.js");

// Questions array personal to this class
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
    // Takes in one object and extracts needed info to create this object
    constructor(info) {
        super(info);
        this.school = info.employeeSchool;
    }

    //----- Getters for each variable -----
    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
    //-------------------------------------
}

// Export both the object itself and the questions
module.exports = {
    obj: Intern,
    QUESTIONS
}