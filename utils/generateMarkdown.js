//create a function that will return a license based on options
//if no license return an empty string
const fs = require('fs');

function renderLicenseBadge(license) {
    if (license === "MIT") {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      } else if (license === "Apache 2.0") {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      } else if (license === 'GNU GPL v2') {
        return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
      } else {
        return 'No license badge'
      }
}

//function that returns license link
//no license return empty string
function renderLicenseLink(license) {
    if(license === "MIT") {
        return '[MIT](https://opensource.org/licenses/MIT)'
    } else if (license === "Apache 2.0") {
        return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === "GNU GPL v2") {
        return '[GNU GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
    } else {
        return 'No license'
    }
}

//function that generates the markdown for the readme
function generateMarkdown(data) {
    return `# ${data.title.toUpperCase()}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of contents
  - [Description](##-Description)
  - [Installation](##-Installation)
  - [Usage](##-Usage)
  - [Contribution Guidelines](##-Contribution-Guidelines)
  - [License](##-License)
  - [Contact](##-Contact)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contribution Guidelines
  
  ${data.guidelines}
  
  ## License
  
  ${renderLicenseLink(data.license)}
  
  ## Contact
  
  github username: ${data.github} \n
  email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;