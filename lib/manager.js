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
        super(info);
        this.officeNumber = info.employeeOffice;
    }

    getRole() {
        return "Manager";
    }

    getOffice() {
        return this.officeNumber;
    }
}

module.exports = {
    obj: Manager,
    QUESTIONS
}