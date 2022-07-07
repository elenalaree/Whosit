const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', roll= '', school = '') {
        super(name, id, email, roll)
        
        this.school = school;
        
    }

    getSchool() {
        return this.school;
    };

    getRoll(){
        return 'Intern';
    };
}

module.exports = Intern;