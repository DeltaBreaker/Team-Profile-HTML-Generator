let Employee = require("./employee.js");

const QUESTIONS = [
    {
        message: "What is the engineer's name?",
        name: "employeeName"
    },
    {
        message: "What is the engineer's ID?",
        name: "employeeID"
    },
    {
        message: "What is the engineer's email?",
        name: "employeeEmail"
    },
    {
        message: "What is the engineer's Github username?",
        name: "employeeUsername"
    }
]

class Engineer extends Employee {
    constructor(info) {
        super(info.employeeName, info.employeeID, info.employeeEmail);
        this.github = info.employeeUsername;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = {
    Engineer,
    QUESTIONS
}