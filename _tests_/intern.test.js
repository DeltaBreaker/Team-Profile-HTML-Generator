const Intern = require("../lib/Intern.js");

test("Tests for return data to match input values", () => {
    let testIntern = new Intern.obj({
        employeeName: "My Name",
        employeeID: "My ID",
        employeeEmail: "My Email",
        employeeSchool: "My School"
    });
    
    expect(testIntern.getName()).toBe("My Name");
    expect(testIntern.getID()).toBe("My ID");
    expect(testIntern.getEmail()).toBe("My Email");
    expect(testIntern.getSchool()).toBe("My School");
});