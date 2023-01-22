const inquirer = require("inquirer");

function Prompt(name, message, type, choicesArr) {
    (type ? this.type = type : delete this.type)
    this.name = name;
    this.message = message;
    (choicesArr ? this.choices = choicesArr : delete this.choices)
}

function PromptRequired(name, message, type, choicesArr) {
    const validatedPrompt = new Prompt(name, message, type, choicesArr);
    validatedPrompt.validate = (userInput) => (userInput ? true : "This information is required.")
    return validatedPrompt
}

// Prompt.prototype.validate = (this) => this

// function PromptList(name, message, choicesArr, type = "list") {
//     const a = new Prompt(name, message, type);
//     ({this.type, this.name, this.message}) = a;
// }


// const projectTitle_Section = new Prompt("title", "What is your project title?");

// let x = inquirer.prompt([projectTitle_Section]).then(userInput => (userInput[Object.keys(userInput)[0]]));

// x.finally(console.log(x));

const t = new PromptRequired("d", "f");
console.log(t);

const yy = new PromptRequired("dsf", "ffsd");
console.log(yy.validate);