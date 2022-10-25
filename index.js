let input = require("inquirer");

let Manager = require("./lib/manager.js");
let Intern = require("./lib/intern.js");
let Engineer = require("./lib/engineer.js");

async function getUserInput() {
    let teamMembers = [];
    
    teamMembers.push(await getMemberDetails(Manager));

    let addNewMember = true;
    while(addNewMember) {
        let response = await input.prompt({
            type: "list",
            message: "Do you want to add another member?",
            name: "result",
            choices: [
                "Engineer",
                "Intern",
                "No, im finished"
            ]
        }).then(response => { return response.result });
        
        if(response === "No, im finished") {
            addNewMember = false;
            break;
        } else {
            teamMembers.push(await getMemberDetails(eval(response)));
        }
    }

    generateWebpage(teamMembers);
}

async function getMemberDetails(type) {
    let prompt = await input.prompt(type.QUESTIONS).then(function(response) {
        let value = new type.obj(response);
        return value;
    });
    return prompt;
}

function generateWebpage(members) {
    console.log(teamMembers);
}

getUserInput();