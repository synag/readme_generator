

const renderLicenseBadge = (license) =>{
  switch (license) {
    case 'MIT':
      return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case 'BSD 2-Clause License':
     return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case 'GPL':
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    default:
     return  "";
  }
  }

const renderLicenseLink = (license) => {
  switch (license) {
    case 'MIT':
      return "https://opensource.org/licenses/MIT";
      break;
    case 'BSD 2-Clause License':
     return "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case 'GPL':
    return "https://www.gnu.org/licenses/gpl-3.0";
      break;
    default:
     return "";
  }

   }
  
const renderLicenseSection = (license) => {
 if (license!=null) {
 return license
} return ""
}


const generateMarkdown = (answers) => ` 
# ${answers.project_title}  

${renderLicenseBadge(answers.license)}


## Project Description 
${answers.project_description}

## Table of Content

* [Installation](#installation)

* [Usage](#usage)

* [License](#License)

* [Contribution](#Contribution)

* [Test](#Test)

* [Question](#Question) 

## Installation
${answers.installation_instructions1}


Below is the URL to the webpage and github repository. 

Website URL: ${answers.installation_instructions2}

Github repository: ${answers.installation_instructions3}


## Usage
${answers.usage_information}

The sreenshot for the ${answers.project_title} is below. 

![${answers.project_title}](${answers.usage_information_screenshot})

## License
The license used for this project is ${renderLicenseSection(answers.license)}. Here is the license link ${renderLicenseLink(answers.license)}

## Contribution
${answers.contribution_guidelines}

## Test
${answers.test_instructions}

## Questions
Please contact me with any questions.  

* Github username: ${answers.github_username}
* Github URL: ${answers.github_url}
* Email:  ${answers.email} `


module.exports = generateMarkdown

