// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { listenerCount } = require('process');


// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your Github username?',
        name: 'username',
      },
      {
        message: 'What is your email?',
        name: 'email',
      },
      {
        message: 'What is the project\'s name?',
        name: 'projectName',
      },
      {
        message: 'What is your project about?',
        name: 'description',
      },
      {
        type: 'list',
        message: 'What license does your project have?',
        name: 'license',
        choices: [
            {name: 'MIT'},
            {name: 'Apache'},
            {name: 'ISC'},
            {name: 'GPLv3'}
          ]
      },
      {
        message: 'What command should be used to install dependencies?',
        name: 'install',
      },
      {
        message: 'What is your test command?',
        name: 'test',
      },
      {
        message: 'What does the user need to know about contributing?',
        name: 'contributing',
      },
];

// TODO: Create a function to write README file
let READMEContent = ({username, email, projectName, description, license, install, test, contributing}) =>

`## ${projectName}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
    
## Installation

Run this programming using 

\`\`\`bash
    ${install}
\`\`\`

## Usage
    
${description}

## License

${license}
    
## Contributing
    
${contributing}

## Tests

Run the below command to test the program.
\`\`\`bash
    ${test}
\`\`\`
    
## Questions

For any questions, please contact me using the information below:

Github: @${username}
    
Email: ${email}
`

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, {flag: 'w'}, (err) => {
        err ? console.error(err) : console.log('Success!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        var badges = {
            MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            Apache: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        }
        answers.license = badges[answers.license]
        writeToFile('./dist/README.md', READMEContent(answers));
    }) 
}

// Function call to initialize app
init();
