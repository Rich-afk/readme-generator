// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the project\'s name?',
        name: 'projectName',
      },
      {
        type: 'input',
        message: 'What is your project about?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What license does your project have?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'What command should be used to install dependencies?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'What is your test command?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing?',
        name: 'contributing',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const READMEContent = `## ${data['projectName']}

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
    ${data['test']}
    \`\`\`

    ## Usage
    
    ${data['description']}

    ## License

    ${data['license']}
    
    ## Contributing
    
    ${data['contributing']}

    ## Tests

    Run the below command to test the program.
    \`\`\`bash
    ${data['test']}
    \`\`\`
    
    ## Questions

    For any questions, please contact me using the information below:

    Github: @${data['username']}
    
    Email: ${data['email']}
    `

    fs.writeFile(`${fileName}.md`, READMEContent, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(writeToFile)
}

// Function call to initialize app
init();
