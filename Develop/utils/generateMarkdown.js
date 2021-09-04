const fs = require('fs')

function generateBadge(license) {
  let badge =''
  switch(license){
    case 'MIT License':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break
    case 'Apache License v2.0':
      badge ='[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break
    case 'GNU General Public License v3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break
    case 'Unlicense':
      badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
      break
  }

  return badge
}


// function to generate markdown for README
function generateMarkdown(data) {
  let badge = generateBadge(data.license)
  let output = `${badge}
  # Project Name: ${data.title}   
  * * *
   >## Description
   >${data.description}
  * * *
   >## Table of Contents
   > [Description](#description)  
   > [Installation](#installation)  
   > [Usage](#usage)  
   > [Contribution](#contribution)  
   > [Tests](#tests)  
   > [License](#license)  
   > [Questions](#questions)  
  * * *
   >## Installation
   >${data.installation}
  * * *
   >## Usage
   >${data.usage}
   * * *
   >## License
   >${data.license}   
  * * *
   >## Contribution
   >${data.contibutions}
  * * *
   >## Tests
   >${data.test}
  * * *
 > ## Questions
 >In order to get in contact with me, simply send me a message to the email provided below.
 > - Github profile: https://github.com/${data.username}  
 > - Email: ${data.email}
  * * *

`

fs.writeFile('../README.md',output,err=>{
  if(err){console.log(err)}
})

  console.log("You're README.md file has been created")
}

module.exports = generateMarkdown;


