const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Sam', '45', 'fake@email.com', 'Manager', 'github');

    expect(engineer.name).toBe('Sam');
    expect(engineer.id).toEqual('45');
    expect(engineer.email).toBe('fake@email.com');
    expect(engineer.roll).toBe('Manager');
    expect(engineer.github).toBe('github')
});