const Engineer = require("../lib/Engineer.js");

test("Tests for return data to match input values", () => {
    let testEngineer = new Engineer.obj({
        employeeName: "My Name",
        employeeID: "My ID",
        employeeEmail: "My Email",
        employeeUsername: "My Github"
    });
    
    expect(testEngineer.getName()).toBe("My Name");
    expect(testEngineer.getID()).toBe("My ID");
    expect(testEngineer.getEmail()).toBe("My Email");
    expect(testEngineer.getGithub()).toBe("My Github");
});