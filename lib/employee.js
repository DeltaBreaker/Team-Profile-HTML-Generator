class Employee {
    // Takes in one object and extracts needed info to create this object
    constructor(info) {
        this.name = info.employeeName;
        this.id = info.employeeID;
        this.email = info.employeeEmail;
    }

    //----- Getters for each variable -----
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
    //-------------------------------------
}

module.exports = Employee;