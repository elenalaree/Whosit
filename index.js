const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is their ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is their GitHub username?"
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is their office number?'
    },
    {
        type: 'list',
        name: 'switch',
        message: 'Do you want to add another team member?',
        choices: ['Engineer', 'Intern', 'Continue without adding more']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is their ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is their email address?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is their GitHub number?"
    },
    {
        type: 'list',
        name: 'switch',
        message: 'Do you want to add another team member?',
        choices: ['Engineer', 'Intern', 'Continue without adding more']
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'ID',
        message: "What is their ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is their email address?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school do they attend?"
    },
    {
        type: 'list',
        name: 'switch',
        message: 'Do you want to add another team member?',
        choices: ['Engineer', 'Intern', 'Continue without adding more']
    }
];

const rosterData = [];

//manager Prompt
const managerPrompt = () => {
    inquirer
        .prompt(managerQuestions)
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            rosterData.push(manager);
            // if (answers.switch === 'Engineer') {
            //     addEngineer();
            // } else if (answers.switch === 'Intern') {
            //     addIntern();
            // } else {
            //     console.log(rosterData)
            // }
        })
}


const promptUser = () => {
    
    return managerPrompt();       ;
};

promptUser()
    .then(answers => console.log(answers))
    