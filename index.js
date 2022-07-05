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
    }
];

const switchQuestion = [
    {
        type: 'list',
        name: 'switchPrompt',
        message: 'Do you want to add another team member?',
        choices: ['Engineer', 'Intern', 'Continue without adding more']
    }
];

const promptUser = () => {
    if(!userInfo) {
        const userInfo = [];

    }
    return inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            userInfo.push(answers)
        })
        ;
};

promptUser()
    .then(answers => console.log(answers));