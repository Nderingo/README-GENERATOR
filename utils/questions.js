

// TODO: Create an array of questions for user input
const questions =([
    
    {   type:'input',
        message: "What is the test process for this project?",
        name: "test"
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
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT","Apache 2.0","GPL 3.0","BSD 3","None"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title"
    },
    {
        type: 'input',
        message: "Describe the steps required for installation.",
        name: 'installation'
    },
])

module.exports = questions;