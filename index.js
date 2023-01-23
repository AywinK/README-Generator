
const fs = require("fs"); // for saving readme
const inquirer = require("inquirer"); // for interaction between user and CLI
const prompts = require("./lib/prompts"); // formatted questions for inquirer
const readmeTemplate = require("./lib/readmeTemplate"); // contains logic and layout for generated README markdown file

// console.log(prompts.createsPrompts());

// const testArr = prompts;


// runs when app is executed
inquirer.prompt(prompts.createsPrompts()).then(data => {

    const readmeContent = readmeTemplate.generatesReadme(data);

    fs.writeFile(`${data.title}_README.md`, `${readmeContent}`, (err) => err ? console.error(err) : console.log("readme sucessfully generated"));

});


