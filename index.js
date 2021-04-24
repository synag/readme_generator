const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")




const questions = [
  {
    type: "input",
    name: "project_title",
    message: "Enter your project title",
  },
  {
    type: "input",
    name: "project_description",
    message: "Enter project description?",
  },
  {
    type: "input",
    name: "instalation_instructions",
    message:
      "What are the steps required to install your project? Provde step by step",
  },
  {
    type: "input",
    name: "usage_information",
    message: "Provide instructions and examples for use?",
  },
  {
    type: "input",
    name: "usage_information-screenshot",
    message: "Provide screenshot filepath?",
  },
  {
    type: "input",
    name: "credit_contributor",
    message: "Provide screenshot filepath?",
  },
  {
    type: "input",
    name: "credit_tools",
    message: "What tools did you use on this project?",
  },
  {
    type: "input",
    name: "credit_tools_thirdparty",
    message:
      "What third-party resources did you use? Please provide name and URL",
  },
  {
    type: "choices",
    name: "license",
    message: "What is your license?",
    // choices: [, "BSD 2-Clause License", "MIT", "GPL"],
  },
  {
    type: "input",
    name: "contribution_guidelines",
    message: "What is your contribution guidelines?",
  },
  {
    type: "input",
    name: "test_Instructions",
    message: "Enter your Test Instruction.",
  },
  {
    type: "input",
    name: "github_username",
    message: "Enter your github username.",
  },
  {
    type: "input",
    name: "github_url",
    message: "Enter your Github URL.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
];
inquirer.prompt(questions).then((answers) => {
  const readMePageContent = generateMarkdown(answers);
  const license = answers.license

  console.log(license);
 



  // generateMarkDown.renderLicenseBadge(answer.license);
//  const licenseLink = generateMarkDown.renderLicenseLink(answers.license);
//   const licenseSection = generateMarkDown.renderLicenseSection(answers.license);

  fs.writeFile("ReadMe.md", readMePageContent, (err) =>
    err ? console.log(err) : console.log("Success")
  );
});

// add this initialize
function init() {}

// Function call to initialize app
init();
