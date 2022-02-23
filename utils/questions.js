// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        message: "Describe the steps required for installation.",
        name: 'installation'
    },
    {   type:'input',
        message: "What is the test process for this project?",
        name: "test"
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
