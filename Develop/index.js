const { prompt } = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user
//THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [{
  type: 'input',
  name: 'title',
  message: 'Enter the title of the project',
  validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}}
},
{
  type: 'input',
  name: 'description',
  message: 'Enter a description for you project',
  validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

},
{
  type: 'input',
  name: 'installation',
  message: 'Enter installation instructions',
  validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter usage cases for your project',
  validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
},
{
  type: 'input',
  name: 'test',
  message: 'Enter any test instructions',
  validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
},
{
  type: 'input',
  name: 'contibutions',
  message: 'Enter contribution guidlines',
  validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
},
{
  type: 'list',
  name: 'license',
  message: 'Choose your license',
  choices: ['MIT License', 'Apache License v2.0', 'GNU General Public License v3.0', 'N/A']
},
{
  type: 'input',
  name: 'username',
  message: 'Enter your Github username',
  validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
},
{
  type: 'input',
  name: 'email',
  message: 'Enter your email',
  validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }
},



];


let testData = {
  title: 'readme Generator',
  description: 'it renders a readme file ',
  installation: 'node index.js',
  usage: 'save time creating a readme file',
  test: 'follow prompts',
  contibutions: 'add me on linked in',
  license: 'MIT License',
  username: 'gresendi',
  email: 'gresendi@uci.edu'
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  prompt(questions)
    .then(answers => {
      console.log(answers)
      generateMarkdown(answers)
    })
}

// function call to initialize program
// init();
// console.log(testData)
init()