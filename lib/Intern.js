const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '') {
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        
    }

    //getSchool

    getRoll(){
        return 'Intern';
    }
}