const mysql = require('mysql2');
const inquirer = require('inquirer');

// create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker'
});

// prompt the user to select an option
function start() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department'
            ]
        }
    ])
        .then(answer => {
            // run the appropriate SQL query based on the user's choice
            switch (answer.option) {
                case 'View all departments':
                    connection.query('SELECT * FROM department', (err, results) => {
                        if (err) throw err;
                        console.table(results);
                        connection.end();
                    });
                    break;
                case 'View all roles':
                    connection.query('SELECT * FROM role', (err, results) => {
                        if (err) throw err;
                        console.table(results);
                        connection.end();
                    });
                    break;
                case 'View all employees':
                    connection.query('SELECT * FROM employee', (err, results) => {
                        if (err) throw err;
                        console.table(results);
                        connection.end();
                    });
                    break;
                case 'Add a department':
                    addDepartment();
                    break;



            }
        });
}

function addDepartment() {
    inquirer.prompt({
        name: 'dept_name',
        type: 'input',
        message: 'what is the dept name?'
    })
        .then(answers => {
            const { dept_name } = answers;

            let query = connection.query(
                'INSERT INTO department SET ?', {
                name: dept_name
            },
                (err, res) => {
                    if (err) throw err;
                    console.log(res.affectedRows + ' new department has been succesfully created!');
                }
            )

            console.log('QUERY', query.sql);
        })
        .then(() => {
            start();
        })
}

start();