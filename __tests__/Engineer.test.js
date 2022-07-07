const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Sam', '45', 'fake@email.com', 'Engineer', 'github');

    expect(engineer.name).toBe('Sam');
    expect(engineer.id).toEqual('45');
    expect(engineer.email).toBe('fake@email.com');
    expect(engineer.roll).toBe('Engineer');
    expect(engineer.github).toBe('github')
});

test('gets github', () => {
    const engineer = new Engineer('Sam', '45', 'fake@email.com', 'Engineer', 'github');
    
    expect(engineer.getGithub()).toBe('github');
})

test('gets roll', () => {
    const engineer = new Engineer('Sam', 'Engineer');
    
    expect(engineer.getRoll()).toBe('Engineer');
})