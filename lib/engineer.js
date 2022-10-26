// Import parent class
let Employee = require("./employee.js");

// Questions array personal to this class
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
    // Takes in one object and extracts needed info to create this object
    constructor(info) {
        super(info);
        this.github = info.employeeUsername;
    }

    //----- Getters for each variable -----
    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
    //-------------------------------------
}

// Export both the object itself and the questions
module.exports = {
    obj: Engineer,
    QUESTIONS
}