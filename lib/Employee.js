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

    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    //getEmail()

    getRoll(){
        return 'Employee';
    };
}

module.exports = Employee;