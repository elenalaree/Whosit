const Manager = require('../lib/Manager');

test('creates employee object', () => {
    const manager = new Manager('Sam', '45', 'fake@email.com', 'Manager');

    expect(employee.name).toBe('Sam');
    expect(employee.id).toEqual('45');
    expect(employee.email).toBe('fake@email.com');
    expect(employee.roll);
});