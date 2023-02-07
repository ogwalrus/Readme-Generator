const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const prompt = [
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
]
function init() {
    inquirer.prompt(prompt)
        .then(data => {
            console.table(data);
            const readme = generateMarkdown(data);
            fs.writeFile('./output/README.md', readme, (err) => {
                err ? console.error(err) : console.log('readme created.')
            })
        })
}


init();