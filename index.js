const generateMarkdown = require('/utils/generateMarkdown')
const fs = require('fs')
const inquirer = require('inquerer')


function writeToFile(data) {
    fs.writeFile('./README>md', generateMardown(data), err => err ? console.err(err) : console.log("Success!"))
}


function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the name of your project',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description'
        },
        {
            type: 'list',
            message: 'Which license would you like to choose?',
            choices: ['MIT', 'Apache 2.0', 'GNU GPL v2', 'none'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What instructions should be added for installation?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How should this porject be used?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'How should users contribute to the project if they would like to?',
            name: 'guidelines'
        },
    ]).then((data) => writeToFile(data))
}

//call function for initialization
init();