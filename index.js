// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
// const generateMarkdown= require('./utils/generateMarkdown');
const markdown = require('./utils/generateMarkdown');


// Function to write README file
function writeReadMe() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            console.log(responses);
            const myMarkdown = markdown(responses.license);
            fs.writeFile('newREADME.md', `# ${responses.title}
## Description
${responses.description}
## Table of Contents
1. [Installation](#installation) 
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [Questions](#questions)
## Installation 
${responses.installation}
## Usage 
${responses.usage}
## Contributing 
${responses.contributing}
## Tests 
${responses.tests}
## Questions
### GitHub
[GitHub](https://www.github.com/${responses.github}) 
### Email
${responses.email}
${myMarkdown}`, function(err) {
    if (err) throw err;
    console.log('README created!');
    
})
})
};

// Function call to initialize app
writeReadMe();
