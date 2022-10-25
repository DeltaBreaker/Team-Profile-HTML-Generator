const Employee = require("../lib/Employee.js");

test("Tests for return data to match input values", () => {
    let testEmployee = new Employee({
        employeeName: "My Name",
        employeeID: "My ID",
        employeeEmail: "My Email"
    });
    
    expect(testEmployee.getName()).toBe("My Name");
    expect(testEmployee.getID()).toBe("My ID");
    expect(testEmployee.getEmail()).toBe("My Email");
});