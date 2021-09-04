const fs = require('fs')


// function to generate markdown for README
function generateMarkdown(data) {

  let output = `# Project Name: ${data.title}
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
   >## Contribution
   >${data.contibutions}
  * * *
   >## Tests
   >${data.test}
   * * *
   >## License
   >${data.license}
  * * *
 > ## Questions
 > Github profile: https://github.com/${data.username}  
 > Email: ${data.email}
  * * *

`
console.log(output)
fs.writeFile('README.md',output,err=>{
  if(err){console.log(err)}
})

  return  output ;
}

module.exports = generateMarkdown;


