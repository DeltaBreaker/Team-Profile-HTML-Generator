class Employee {
    constructor(info) {
        this.name = info.employeeName;
        this.id = info.employeeID;
        this.email = info.employeeEmail;
    }

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
}

module.exports = Employee;