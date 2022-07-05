const employees = [
    'Manager',
    'Engineer',
    'Intern'
];

class Employee {
    constructor(name = '', id = '', email = '', roll = '') {
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.roll = roll;
        
    }

    getName(name){
        console.log(name);
        return {name: this.name}
    }
}

module.exports = Employee;