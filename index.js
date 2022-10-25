let input = require("inquirer");
let output = require("fs");

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

    output.writeFile("team.html", literal, (error) => {
        (error) ? console.error(error) : console.log("Output successul");
    });
}

getUserInput();