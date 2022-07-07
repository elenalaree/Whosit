const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is their id number?"
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
        name: 'id',
        message: "What is their id number?"
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
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is their id number?"
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



const promptUser = () => {
    inquirer
        .prompt(managerQuestions)
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, 'Manager', answers.office);
            rosterData.push(manager);

            if (answers.switch === 'Engineer') {
                addEngineer();
            } else if (answers.switch === 'Intern') {
                addIntern();
            } else {
                return rosterData;
            }})
};

const addEngineer = () => {
    inquirer
        .prompt(engineerQuestions)
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, 'Engineer', answers.github);
            rosterData.push(engineer);

            if (answers.switch === 'Engineer') {
                addEngineer();
            } else if (answers.switch === 'Intern') {
                addIntern();
            } else {
                return rosterData;
            }
        });
}

const addIntern = () => {
    inquirer
        .prompt(internQuestions)
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, 'Intern', answers.school);
            rosterData.push(intern);

            if (answers.switch === 'Engineer') {
                addEngineer();
            } else if (answers.switch === 'Intern') {
                addIntern();
            } else {
                return rosterData;
            }
        });
}

promptUser();    

