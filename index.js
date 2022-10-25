let input = require("inquirer");

let Manager = require("./lib/manager.js");

async function getUserInput() {
    let teamMembers = [];
    
    await input.prompt([
        {
            type: input,
            message: "What is the manager's name?",
            name: "managerName"
        },
        {
            type: input,
            message: "What is the manager's ID?",
            name: "managerID"
        },
        {
            type: input,
            message: "What is the manager's email?",
            name: "managerEmail"
        }
    ]).then(function(response) {
        teamMembers.push(new Manager(response.managerName, response.managerID, response.managerEmail));
    });

    console.log(teamMembers);

    // menu to add intern engineer or employee

    generateWebpage(teamMembers);
}

function generateWebpage(members) {

}

getUserInput();