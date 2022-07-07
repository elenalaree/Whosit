const Employee = require('../lib/Employee');
const inquirer = require('inquirer');



class Manager extends Employee {
    constructor(name = '', id = '', email = '', roll='', officeNumber = ''){
        super(name, id, email, roll);
    

        this.officeNumber = officeNumber;
    }

    getRoll(){
        return 'Manager';
    }
}

module.exports = Manager;
