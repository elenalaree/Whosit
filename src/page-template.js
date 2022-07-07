const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

const generateManager = manager => {
    console.log(manager);
    return `
    <div class="card border border-info">
    <div class="card-title bg-info ">
        <h2 class="ml-2">${manager.name}</h2>
        <h2 class="ml-2"><i class="fa-solid fa-mug-hot"></i>Manager</h2>
    </div>
    <div class="card-body">
        <ul class="list-group item-group-flush">
            <li class="list-group-item">ID:${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Room Number: ${manager.officeNumber}</li>
        </ul>
        
    </div>
</div>
    `
}

const generateEngineers = engineer => {
    if(!engineer) {
        return '';
    }
    return `
    <div class="card border border-info">
                    <div class="card-title bg-info ">
                        <h2 class="ml-2">${engineer.name}</h2>
                        <h2 class="ml-2"><i class="fa-solid fa-glasses"></i>Engineer</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group item-group-flush">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                        </ul>
                        
                    </div>
                </div>
    `;
};

const generateInterns = intern => {
    if (!intern) {
        return '';
    }

    return `
    <div class="card border border-info">
                    <div class="card-title bg-info ">
                        <h2 class="ml-2">${intern.name}</h2>
                        <h2 class="ml-2"><i class="fa-solid fa-graduation-cap"></i>Intern</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group item-group-flush">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">Email:  <a href="mailto:${intern.email}">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                        
                    </div>
                </div>
    `
}

generateHTML = (employee) => {
    cardArray = [];

    for (let i = 0; i < employee.length; i++) {


        //manager function
        if (employee[i].getRoll() === 'Manager') {
            const managerCard = generateManager(employee[i]);

            cardArray.push(managerCard);
        }

        //engineer function
        if (employee[i].getRoll() === 'Engineer') {
            const engineerCard = generateEngineers(employee[i]);

            cardArray.push(engineerCard);
        }

        //intern card
        if (employee[i].getRoll() === 'Intern') {
            const internCard = generateInterns(employee[i]);

            cardArray.push(internCard);
        }
    }

    //join cards
    const employeeCards = cardArray.join('');

    // send to generate page
    const generateTeam = generatePage(employeeCards);
    return generateTeam;
}

const generatePage = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Roster</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://kit.fontawesome.com/24ded62495.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body class="bg-secondary">
        <header class="jumbotron d-flex justify-content-center bg-info ">
            <h1>My Team</h1>
        </header>

        <main class="container">
            <div class="row d-flex justify-content-around">

                <!--team cards-->
               ${employeeCards}
                
            </div>


        </main>
   
    </body>
</html>
    `
}

//export
module.exports = generateHTML;