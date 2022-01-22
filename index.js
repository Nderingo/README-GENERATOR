// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/q');
// TODO: Create an array of questions for user input
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Describe the steps required for installation.",
            name: 'installation'
        },
        {
            type: 'list',
            message: "What kind of licence should you project use?",
            name: 'license'
        },
        {
            type: 'input',
            message: 'What is your Github user name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'password',
            message: 'Re-enter password to confirm:',
            name: 'confirm',
        },
    ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer  
      .prompt(questions)
      .then ((answers) => fs.writeFileSync('README.md',generateREADME.md(answers)))
       .then(() =>console.log(answers))
       .catch((err) => console.error(err));
       const myMarkdown = generateMarkdown(answers);
       writeToFile("README.md",myMarkdown);

}
// Function call to initialize app
init();
