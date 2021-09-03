const { prompt } = require('inquirer')



// array of questions for user
//THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [{
  type: 'input',
  name: 'title',
  message: 'Enter the title of the project'
},
{
  type: 'input',
  name: 'description',
  message: 'Enter a description for you project',

},
{
  type: 'input',
  name: 'installation',
  message: 'Enter installation instructions',

},
{
  type: 'input',
  name: 'usage',
  message: 'Enter usage cases for your project'
},
{
  type: 'input',
  name: 'test',
  message: 'Enter any test instructions'
},
{
  type: 'input',
  name: 'contibutions',
  message: 'Enter contribution guidlines'
},
{
  type: 'list',
  name: 'license',
  message: 'Choose your license',
  choices: ['MIT License', 'Apache License v2.0', 'GNU General Public License v3.0']
},
{
  type: 'input',
  name: 'username',
  message: 'Enter your Github username'
},
{
  type: 'input',
  name: 'email',
  message: 'Enter your email'
},



];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  prompt(questions)
    .then(answers => {
      console.log(answers)
    })
}

// function call to initialize program
init();
