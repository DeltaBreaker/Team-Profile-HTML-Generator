let input = require("inquirer");

let Manager = require("./lib/manager.js");
let Intern = require("./lib/intern.js");
let Engineer = require("./lib/engineer.js");

async function getUserInput() {
    let teamMembers = [];
    
    

    console.log(teamMembers);

    // menu to add intern engineer or employee

    generateWebpage(teamMembers);
}

async function getMemberDetails(type) {
    let employeeType = eval(type);
    let prompt = await input.prompt(employeeType.QUESTIONS).then(function(response) {
        let classType = eval("employeeType." + type);
        let value = new classType(response);
        return value;
    });
    return prompt;
}

function generateWebpage(members) {

}
