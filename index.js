// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const generateMarkdown= require('./utils/generateMarkdown');


// TODO: Create a function to initialize app
function init() {
    inquirer  
      .prompt(questions)
      .then ((answers) =>{
      console.log(answers);
       const myMarkdown = generateMarkdown(answers);

       writeToFile('./output/README.md',myMarkdown);
      })

       .catch((err) => {console.error(err)});

}
// Function call to initialize app
init();
