// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const generateMarkdown= require('./utils/generateMarkdown');
const markdown = require('./utils/generateMarkdown');


// TODO: Create a function to initialize app
// Function to initialize app
const init = () => {
  inquirer
      // Inquirer prompt questions.
      .prompt(questions)
      // Then generate markdown and write file based off inquirer answers.
      .then((answers) => {
          writeToFile(generateMarkdown(answers));
      })
      .catch((error) => {
          if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
          } else {
          // Something else went wrong
          };
      });
};
// Function call to initialize app
init();
