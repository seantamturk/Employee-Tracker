const inquirer = require("inquirer");
const { viewAllDepartments, viewAllRoles, viewAllEmployees } = require("./db/db");
const {
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("./prompts/inquirerPrompts");

async function start() {
  const { option } = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Quit",
      ],
    },
  ]);
//*Query
  switch (option) {
    case "View all departments":
      const departments = await viewAllDepartments();
      console.table(departments);
      break;

    case "View all roles":
      const roles = await viewAllRoles();
      console.table(roles);
      break;

    case "View all employees":
      const employees = await viewAllEmployees();
      console.table(employees);
      break;
//*POST
    case "Add a department":
      await addDepartment();
      console.log("Department added successfully!");
      break;

    case "Add a role":
      await addRole();
      console.log("Role added successfully!");
      break;

    case "Add an employee":
      await addEmployee();
      console.log("Employee added successfully!");
      break;

    case "Update an employee role":
      await updateEmployeeRole();
      console.log("Employee role updated successfully!");
      break;

    case "Quit":
      process.exit(0);
  }

  start(); // Restart the prompt sequence after finishing a task
}

start();
