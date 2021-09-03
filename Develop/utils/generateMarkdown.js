const fs = require('fs')


// function to generate markdown for README
function generateMarkdown(data) {

  let output = `# Project Name: ${data.title}
  * * *
   >## Description
   >${data.description}
  * * *
   >## Table of Contents
   > -[Installation](#custom-01)
  * * *
   >## Installation {#custom-01}
   >${data.installation}
  * * *
   >## Usage
   >${data.usage}
  * * *
   >## Licesne
   >${data.license}
  * * *
   >## Contributing
   >${data.contibutions}
  * * *
   >## Tests
   >${data.test}
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


