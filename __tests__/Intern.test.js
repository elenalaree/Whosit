const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Sam', '45', 'fake@email.com', 'Intern', 'school');

    expect(intern.name).toBe('Sam');
    expect(intern.id).toEqual('45');
    expect(intern.email).toBe('fake@email.com');
    expect(intern.roll).toBe('Intern');
    expect(intern.school).toBe('school')
});

test('gets school', () => {
    const intern = new Intern('Sam', '45', 'fake@email.com', 'Intern', 'school');
    
    expect(intern.getSchool()).toBe('school');
})

test('gets roll', () => {
    const intern = new Intern('Sam', 'Intern');
    
    expect(intern.getRoll()).toBe('Intern');
})