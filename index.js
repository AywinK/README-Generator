
const fs = require("fs");
const inquirer = require("inquirer");
const prompts = require("./lib/prompts");
const readmeTemplate = require("./lib/readmeTemplate");

// console.log(prompts.createsPrompts());

// const testArr = prompts;

inquirer.prompt(prompts.createsPrompts()).then(data => {

    const readmeContent = readmeTemplate.generatesReadme(data);

    fs.writeFile(`${data.title}_README.md`, `${readmeContent}`, (err) => err ? console.error(err) : console.log("readme sucessfully generated"));

});


