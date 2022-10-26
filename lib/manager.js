// Import parent class
let Employee = require("./employee.js");

// Questions array personal to this class
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
    // Takes in one object and extracts needed info to create this object
    constructor(info) {
        super(info);
        this.officeNumber = info.employeeOffice;
    }

    //----- Getters for each variable -----
    getRole() {
        return "Manager";
    }

    getOffice() {
        return this.officeNumber;
    }
    //-------------------------------------
}

// Export both the object itself and the questions
module.exports = {
    obj: Manager,
    QUESTIONS
}