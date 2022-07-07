const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Sam', '45', 'fake@email.com', 'Manager', '22');

    expect(manager.name).toBe('Sam');
    expect(manager.id).toEqual('45');
    expect(manager.email).toBe('fake@email.com');
    expect(manager.roll).toBe('Manager');
    expect(manager.officeNumber).toBe('22')
});

test('gets roll', () => {
    const manager = new Manager('Sam', 'Manager');
    
    expect(manager.getRoll()).toBe('Manager');
});


