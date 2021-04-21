const fs = require('fs');
const inquirer = require('inquirer'); 
const generateMarkDown = require('generateMarkdow')

const generateReadMe = (answers) =>` 
# ${answers.project-title}

## Project Description 
${answers.project-description}

## Table of Content
[installation](#installation)\
[usage](#usage)\
[contribution](#contribution)\
[test](#test)\
[question](#question)

## Installation Instructions
${answers.installation-instruction}


## Usage information
${answers.usage-information}

## License
${answers.license}

## Contribution Guidelines
${answers.contribution-guidelines}

## Test Instructions
${answers.test-instructions}
## Questions

Github username: ${answers.github-username}
Github URL: ${answers.github-url}
Email:  ${answers.email} `;



inquirer
  .prompt([
    {
      type: 'input',
      name: 'project-title',
      message: 'Enter your project title',
    },
    {
      type: 'input',
      name: 'project-description',
      message: 'Enter project description?',
    },
    {
      type: 'input',
      name: 'instalation-instructions',
      message: 'What are the steps required to install your project? Provde step by step',
    },
    {
      type: 'input',
      name: 'usage-information',
      message: 'Provide instructions and examples for use?',
    },
    {
    type: 'input',
    name: 'usage-information-screenshot',
    message: 'Provide screenshot filepath?',
    },
    {
      type: 'input',
      name: 'credit-contributor',
      message: 'Provide screenshot filepath?',
      },
      {
        type: 'input',
        name: 'credit-tools',
        message: 'What tools did you use on this project?',
        },
        {
          type: 'input',
          name: 'credit-tools-thirdparty',
          message: 'What third-party resources did you use? Please provide name and URL',
          },
    {
      type: 'checkbox',//change to drop down
      name: 'license',
      message: 'What is your license?',
      choices: [,'BSD 2-Clause License','MIT','GPL' ]
    },
    {
      type: 'input',
      name: 'contribution-guidelines',
      message: 'What is your contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test-Instructions',
      message: 'Enter your Test Instruction.',
    },
    {
      type: 'input',
      name: 'github-username',
      message: 'Enter your github username.',
    },
    {
      type: 'input',
      name: 'github-url',
      message: 'Enter your Github URL.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email',
    },
  ])
  .then((answers) => {
    const readMePageContent = generateReadMe(answers);

    fs.writeFile('ReadMe.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Success')
    );
  });

