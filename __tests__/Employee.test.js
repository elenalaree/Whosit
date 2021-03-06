const Employee = require('../lib/Employee');
const employees = [
    'Manager',
    'Engineer',
    'Intern'
];

test('creates employee object', () => {
    const employee = new Employee('Sam', '45', 'fake@email.com', 'Manager');

    expect(employee.name).toBe('Sam');
    expect(employee.id).toEqual('45');
    expect(employee.email).toBe('fake@email.com');
    expect(employee.roll).toBe('Manager');
});

test('gets employee name', () => {
    const employee = new Employee('Sam');

    expect(employee.getName()).toBe('Sam');


});

test('gets employee id', () => {
    const employee = new Employee('Sam', '45');

    expect(employee.getId()).toBe('45');
})

test('gets roll', () => {
    const employee = new Employee('Sam', 'Employee');
    
    expect(employee.getRoll()).toBe('Employee')
})