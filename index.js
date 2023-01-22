
const fs = require("fs");
const inquirer = require("inquirer");
const prompts = require("./lib/prompts");

console.log(prompts.createsPrompts());

// const testArr = prompts;

inquirer.prompt(prompts.createsPrompts()).then(readmeContent => {

    let readmeFile = `
# ${readmeContent.title}

![License Badge](https://img.shields.io/badge/License-${readmeContent.license.replace(/\s+/g, ``)}-green?labelColor=434343)

## Description

${readmeContent.description}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation

${(readmeContent.installation ? readmeContent.installation : "N/A")}

## Usage
    
${readmeContent.usage}

## License

This work is licensed under the following license: ${readmeContent.license}

## Contributing
    
${readmeContent.contributing}
    
## Tests

${(readmeContent.tests ? readmeContent.tests : "N/A")}
    
## Questions

Discover more projects or get in touch - [${readmeContent.githubUsername}](https://github.com/${readmeContent.githubUsername} "My GitHub Profile")

Contact <${readmeContent.email}> with any additional questions or comments.

    `;

    fs.writeFile(`${readmeContent.title}.md`, `${readmeFile}`, (err) => err ? console.error(err) : console.log("readme sucessfully generated"));

});


