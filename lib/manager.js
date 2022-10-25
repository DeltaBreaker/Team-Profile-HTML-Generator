let Employee = require("./employee.js");

const QUESTIONS = [
    {
        message: "What is the manager's name?",
        name: "employeeName"
    },
    {
        message: "What is the manager's ID?",
        name: "employeeID"
    },
    {
        message: "What is the manager's email?",
        name: "employeeEmail"
    },
    {
        message: "What is the manager's office number?",
        name: "employeeOffice"
    }
]

class Manager extends Employee {
    constructor(info) {
        super(info.employeeName, info.employeeID, info.employeeEmail);
        this.officeNumber = info.employeeOffice;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = {
    Manager,
    QUESTIONS
}