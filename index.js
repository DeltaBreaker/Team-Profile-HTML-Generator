//----------- Import needed modules ----------
let input = require("inquirer");
let output = require("fs");

// Import needed classes
let Manager = require("./lib/manager.js");
let Intern = require("./lib/intern.js");
let Engineer = require("./lib/engineer.js");
//--------------------------------------------

// Main function to grab all user input
async function getUserInput() {
    // Init an array to hold all member objects and push the team manager
    let teamMembers = [];
    teamMembers.push(await getMemberDetails(Manager));

    // This loops until the user selects to finish and prompts them based on choice
    let addNewMember = true;
    while(addNewMember) {
        // Waits for this prompt to finish before continuing
        // Asks the user what they would like to do
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
        
        // Exits the loop if no is selected
        if(response === "No, im finished") {
            addNewMember = false;
            break;
        } else {
            // Prompts and pushes a new team member based on choice
            teamMembers.push(await getMemberDetails(eval(response)));
        }
    }

    generateWebpage(teamMembers);
}

// This function takes in an employee object type and asks the respective questions in said object type
// Then it returns a newly created object based on the type it was given
async function getMemberDetails(type) {
    let prompt = await input.prompt(type.QUESTIONS).then(function(response) {
        let value = new type.obj(response);
        return value;
    });
    return prompt;
}

//----- Takes in an array of team members and generates the html page -----
function generateWebpage(members) {
    let literal =
    `<!DOCTYPE html>
     <html lang="en">
     <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <title>Team Members</title>
     </head>
     <body>
        <header class="bg-primary p-3 shadow mb-5">
            <h1 class="text-center text-light">Our Team</h1>
        </header>
        <team class="d-flex justify-content-evenly">
    `;

    // Creating cards based on bootstrap docs
    // Loops through team members and creates cards with respective details
    for(const m of members) {
        literal +=
            `<div class="card shadow" style="width: 24rem;">
                <div class="card-body bg-primary rounded">
                    <h4 class="card-title text-light mb-3">${m.getName()}</h5>
                    <div class="card-body bg-light rounded">
                    <h5 class="card-subtitle mb-2 text-muted mb-3">${m.getRole()}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">ID: ${m.getID()}</h6>
                    <a href="mailto:${m.getEmail()}" class="d-block">Email Me: ${m.getEmail()}</a>
                    `;
        
        //------ These check for the object type and add data personal to each type ------
        if(m instanceof Manager.obj) {
            literal +=
            `   <h6 class="card-subtitle mb-2 text-muted mt-2">Office: ${m.getOffice()}</h6>
            `;
        }

        if(m instanceof Engineer.obj) {
            literal +=
            `   <a href="https://github.com/${m.getGithub()}" class="">Github: ${m.getGithub()}</a>
            `;
        }

        if(m instanceof Intern.obj) {
            literal +=
            `   <h6 class="card-subtitle mb-2 text-muted mt-2">School: ${m.getSchool()}</h6>
            `;
        }
        //--------------------------------------------------------------------------------

        literal +=
        `       </div>
            </div>
         </div>
        `;
    }

    literal +=
    `   </team>
     </body>
     </html>
    `;

    // Output the created string above into a file
    output.writeFile("team.html", literal, (error) => {
        (error) ? console.error(error) : console.log("Output successul");
    });
}
//--------------------------------------------------------------------------------------------

getUserInput();