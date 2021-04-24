
// const generateLicense = function(license){
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) =>{
  switch (license) {
    case 'MIT':
      return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case 'BSD 2-Clause License':
     return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case 'GPL':
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
     return  "";
  }
  }



// TODO: Create a function that returns the license link
// If there is no license, return an empty string

const renderLicenseLink = (license) => {
  this.license = license
  let licenseLink = ""
  switch (license) {
    case 'MIT':
      return licenseLink =  "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case 'BSD 2-Clause License':
     return licenseLink = "https//:img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case 'GPL':
    return licenseLink ="https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0";
      break;
    default:
     return licenseLink = "";
  }

   }
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
 if (license=!null) {
 return`${license}`
} return ""
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;


const generateMarkdown = (answers) => ` 
// # ${answers.project_title}  

${renderLicenseBadge(answers.license)}


## Project Description 
${answers.project_description}

## Table of Content

* [installation](#installation)

* [usage](#usage)

* [license](#usage)

* [contribution](#contribution)

* [test](#test)

* [question](#question) n


## Installation Instructions
${answers.installation_instruction}


## Usage information
${answers.usage_information}


## License
${renderLicenseSection(answers.license)}

## Contribution Guidelines
${answers.contribution_guidelines}


## Test Instructions
${answers.test_instructions}

## Questions

Github username: ${answers.github_username}
Github URL: ${answers.github_url}
Email:  ${answers.email} `;


module.exports = generateMarkdown

