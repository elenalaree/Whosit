const generateManager = manager => {
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
            <li class="list-group-item">Room Number:${manager.office}</li>
        </ul>
        
    </div>
</div>
    `
}

const generateEngineers = engineers => {
    if(!engineers) {
        return '';
    }
    return `
    <div class="card border border-info">
                    <div class="card-title bg-info ">
                        <h2 class="ml-2">${engineers.name}</h2>
                        <h2 class="ml-2"><i class="fa-solid fa-glasses"></i>Engineer</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group item-group-flush">
                            <li class="list-group-item">ID: ${engineers.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineers.github}">${engineers.github}</a></li>
                        </ul>
                        
                    </div>
                </div>
    `;
};

const generateInterns = interns => {
    if (!interns) {
        return '';
    }

    return `
    <div class="card border border-info">
                    <div class="card-title bg-info ">
                        <h2 class="ml-2">Name</h2>
                        <h2 class="ml-2"><i class="fa-solid fa-graduation-cap"></i>Intern</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group item-group-flush">
                            <li class="list-group-item">ID:</li>
                            <li class="list-group-item">Email:</li>
                            <li class="list-group-item">School:</li>
                        </ul>
                        
                    </div>
                </div>
    `
}


module.exports = templateData => {
    //destructure by sections
    const {generateEngineers, generateInterns, generateManager } = templateData;

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
        <link rel="stylesheet" href="./src/style.css">
    </head>
    <body class="bg-secondary">
        <header class="jumbotron d-flex justify-content-center bg-info ">
            <h1>My Team</h1>
        </header>

        <main class="container">
            <div class="row d-flex justify-content-around">

                <!--manager card-->
                ${generateManager(manager)}

                <!--Engineer card-->
               ${generateEngineers(engineers)}

                <!--intern card-->
               ${generateInterns(interns)}
                
            </div>


        </main>
   
    </body>
</html>
    `
}