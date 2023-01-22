
const licenseNotice = require("./licenseNotices");

function generatesReadme(data) {

    const sectionsObj = {
        titleSection:
            `
# ${data.title}
`,
        badgesSection:
            `
![License Badge](https://img.shields.io/badge/License-${data.license.replace(/\s+/g, `_`)}-green?labelColor=434343)
`,
        descriptionSection:
            `
## Description

${data.description}
`,
        tableOfContentsSection:
            `
## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
`,
        installationSection:
            `
## Installation

${(data.installation ? data.installation : "N/A")}

\`\`\`
${(data.installation ? data.installationCodeSnippet : "")}
\`\`\`
`,
        usageSection:
            `
## Usage

${data.usage}

\`\`\`
${(data.usageCodeSnippet ? data.usageCodeSnippet : "")}
\`\`\`

![Demo](${data.usageDemoFilePath})
`,
        licenseSection:
            `
## License

This work is licensed under the following license: ${data.license}

---

${licenseNotice.generatesNotice(data)}
`,
        contributingSection:
            `
## Contributing

${data.contributing}
`,
        testsSection:
            `
## Tests

${(data.tests ? data.tests : "N/A")}

\`\`\`
${(data.testsCodeSnippet ? data.testsCodeSnippet : "")}
\`\`\`
`,
        questionsSection:
            `
## Questions

Discover more projects or get in touch - [${data.githubUsername}](https://github.com/${data.githubUsername} "My GitHub Profile")

Contact <${data.email}> with any additional questions or comments.
`
    };

    let readmeContent = ``;

    for (const section in sectionsObj) {
        readmeContent += sectionsObj[section];
    }

    return readmeContent

}

module.exports = { generatesReadme };