
const inquirer = require("inquirer");

inquirer.prompt([{
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: (userInput) => (userInput ? true : "You must provide a project title.")
}, {
    type: "input",
    name: "description",
    message: "Provide a short description of the application.",
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
},]).then(userData => {
    console.log(`Your Project Title is: ${userData.title}`);
    console.log(`Your Description is: ${userData.description}`);
    console.log(`Your Installation Instructions are: ${(userData.installation ? userData.installation : "N/A")}`);
    console.log(`Your Usage Information is: ${userData.usage}`);
    console.log(`Your License is: ${userData.license}`);
});


