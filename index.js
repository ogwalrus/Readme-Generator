const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const prompt = [
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please enter the name of your project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
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
        message: 'Please enter installation instructions for your project',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How should this project be used?',
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