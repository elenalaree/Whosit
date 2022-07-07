const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', roll = '', github = '') {
        super(name, id, email, roll);
        
        this.github = github;
    }

    getGithub(){
        return this.github;
    };

    getRoll(){
        return 'Engineer';
    };
}
module.exports = Engineer;