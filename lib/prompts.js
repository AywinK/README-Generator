
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

function createsPrompts() {

    const licenseListArr = ["Apache License 2.0", "GNU GPLv3", "MIT", "No License"];

    const promptObj = {
        title: new PromptRequired("title", "What is your project title?"),
        description: new PromptRequired("description", "Provide a short description of the project."),
        installation: new Prompt("installation", "Provide installation instructions of the application (Leave blank if not applicable)."),
        installationCodeSnippet: new Prompt("installationCodeSnippet", "Provide a code snippet for the installation process (Leave blank if not applicable)."),
        usage: new PromptRequired("usage", "Provide usage information of the application."),
        usageCodeSnippet: new Prompt("usageCodeSnippet", "Provide a code snippet for using the application (Leave blank if not applicable)."),
        usageDemoFilePath: new Prompt("usageDemoFilePath", "Provide a file path to a demo example for using the application (Leave blank if not applicable)."),
        license: new Prompt("license", "Select a license.", "list", licenseListArr),
        contributing: new PromptRequired("contributing", "Provide information on how others can contribute to development."),
        tests: new Prompt("tests", "Provide instructions to run tests for your application."),
        testsCodeSnippet: new Prompt("testsCodeSnippet", "Provide a code snippet to run tests (Leave blank if not applicable)."),
        githubUsername: new PromptRequired("githubUsername", "Provide your github username."),
        email: new PromptRequired("email", "Provide your email address.")
    };

    const promptArr = [];

    for (const prompt in promptObj) {
        // for (const prop in prompt) {
        //     const { prop } = prompt;
        //     const tempObj.prop = prop;
        // }
        // console.log(Object.entries(prompt));
        // promptArr.push(promptObj[prompt]);
        // console.log(promptObj[prompt]);


        const tempClone = Object.assign({}, promptObj[prompt]);
        promptArr.push(tempClone);

    }

    console.log(promptArr);
    return promptArr

}

// const t = new Prompt("d", "f");
// console.log(t);

// const yy = new PromptRequired("dsf", "ffsd");
// console.log(yy);

module.exports = { createsPrompts };