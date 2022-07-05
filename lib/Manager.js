const Employee = require('../lib/Employee');

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

class Manager extends Employee {
    constructor(name = '', ID = '', email = '', office = ''){

    

        this.office = office;
    }
}

module.exports = Manager;
