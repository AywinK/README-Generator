
const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([{
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: (userInput) => (userInput ? true : "You must provide a project title.")
}, {
    type: "input",
    name: "description",
    message: "Provide a short description of the project.",
    validate: (userInput) => (userInput ? true : "You must provide a description.")
}, {
    type: "input",
    name: "installation",
    message: "Provide installation instructions of the application (Leave blank if not applicable)."
}, {
    type: "input",
    name: "usage",
    message: "Provide usage information of the application.",
    validate: (userInput) => (userInput ? true : "You must provide usage information.")
}, {
    type: "list",
    name: "license",
    message: "Select a license.",
    choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "No License"]
}, {
    type: "input",
    name: "contributing",
    message: "Provide information on how others can contribute to development.",
    validate: (userInput) => (userInput ? true : "You must provide information regarding project participation.")
}, {
    type: "input",
    name: "tests",
    message: "Provide instructions to run tests for your application."
}, {
    type: "input",
    name: "githubUsername",
    message: "Provide your github username.",
    validate: (userInput) => (userInput ? true : "Provide your GitHub username so others can reach you.")
}, {
    type: "input",
    name: "email",
    message: "Provide your email address.",
    validate: (userInput) => (userInput ? true : "Provide your email address so others can contact you.")
}]).then(readmeContent => {
    console.log(`Your Project Title is: ${readmeContent.title}`);
    console.log(`Your Description is: ${readmeContent.description}`);
    console.log(`Your Installation Instructions are: ${(readmeContent.installation ? readmeContent.installation : "N/A")}`);
    console.log(`Your Usage Information is: ${readmeContent.usage}`);
    console.log(`Your License is: ${readmeContent.license}`);
    console.log(`Your Contributing Information is: ${readmeContent.contributing}`);
    console.log(`Your tests Instructions are: ${(readmeContent.tests ? readmeContent.tests : "N/A")}`);
    console.log(`Contact the developers: ${readmeContent.githubUsername} - https://github.com/${readmeContent.githubUsername}`);
    console.log(`Contact the developers: ${readmeContent.email}`);

    let readmeFile = `
    # ${readmeContent.title}

    ![License Badge](https://img.shields.io/badge/License-${readmeContent.license}-green?labelColor=434343)

    ## Description

    ---

    ${readmeContent.description}

    ## Table of Contents

    ---

    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)

    ## Installation

    ---

    ${(readmeContent.installation ? readmeContent.installation : "N/A")}

    ## Usage
    
    ---

    ${readmeContent.usage}

    ## License

    ---
    
    This work is licensed under the following license: ${readmeContent.license}

    ## Contributing
    
    ---

    ${readmeContent.contributing}
    
    ## Tests
    
    ---

    ${(readmeContent.tests ? readmeContent.tests : "N/A")}
    
    ## Questions
    
    ---

    Discover more projects or get in touch - [${readmeContent.githubUsername}](https://github.com/${readmeContent.githubUsername} "My GitHub Profile")

    Contact <${readmeContent.email}> with any additional questions or comments.

    `;



});


