const Manager = require("../lib/Manager.js");

test("Tests for return data to match input values", () => {
    let testManager = new Manager.obj({
        employeeName: "My Name",
        employeeID: "My ID",
        employeeEmail: "My Email",
        employeeOffice: "My Office"
    });
    
    expect(testManager.getName()).toBe("My Name");
    expect(testManager.getID()).toBe("My ID");
    expect(testManager.getEmail()).toBe("My Email");
    expect(testManager.getOffice()).toBe("My Office");
});