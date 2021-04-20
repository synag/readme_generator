const fs = require('./node_packages/fs');
const inquirer = require('./node_packages/inquirer');

const generateReadMe = (answers) =>` 
# <project name>

## Project Description 
${name}

## Table of Content
[installation](#installation)\
[usage](#usage)\
[contribution](#contribution)\
[test](#test)\
[question](#question)

## Installation Instructions



## Usage information

## License

## Contribution Guidelines


## Test Instructions

## Questions

Github username: \
Github URL: \
Email: `;



inquirer
  .prompt([
    {
      type: 'input',
      name: 'project title',
      message: 'Enter your project title',
    },
    {
      type: 'input',
      name: 'project description',
      message: 'Enter project description?',
    },
    {
      type: 'input',
      name: 'instalation instructions',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'usage information',
      message: 'What is usage information?',
    },
    {
      type: 'input',//change to drop down
      name: 'license',
      message: 'What is your license?',
    },
    {
      type: 'input',
      name: 'contribution guidelines',
      message: 'What is your contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test Instructions',
      message: 'Enter your Test Instruction.',
    },
    {
      type: 'input',
      name: 'github username',
      message: 'Enter your github username.',
    },
    {
      type: 'input',
      name: 'github url',
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

