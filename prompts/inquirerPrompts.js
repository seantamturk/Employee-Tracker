const inquirer = require("inquirer");
const db = require("../db/db");
//*Add Department
async function addDepartment() {
  const departmentNamePrompt = {
    name: "departmentName",
    type: "input",
    message: "What is the name of the department?",
  };

  const { departmentName } = await inquirer.prompt(departmentNamePrompt);
  await db.addDepartment(departmentName);
}
//*ADD Role
async function addRole() {
  const departments = await db.viewAllDepartments();
  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));

  const role = await inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What is the title of the role?",
    },
    {
      name: "salary",
      type: "input",
      message: "What is the salary of the role?",
    },
    {
      name: "department_id",
      type: "list",
      message: "Which department does the role belong to?",
      choices: departmentChoices,
    },
  ]);

  await db.addRole(role.title, role.salary, role.department_id);
}

async function addEmployee() {
  const roles = await db.viewAllRoles();
  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const managers = await db.viewAllEmployees();
  const managerChoices = managers.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));

  const employee = await inquirer.prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is the employee's first name?",
    },
    {
      name: "last_name",
      type: "input",
      message: "What is the employee's last name?",
    },
    {
      name: "role_id",
      type: "list",
      message: "What is the employee's role?",
      choices: roleChoices,
    },
    {
      name: "manager_id",
      type: "list",
      message: "Who is the employee's manager?",
      choices: managerChoices,
    },
  ]);

  await db.addEmployee(
    employee.first_name,
    employee.last_name,
    employee.role_id,
    employee.manager_id
  );
}

async function updateEmployeeRole() {
  const employees = await db.viewAllEmployees();
  const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));

  const roles = await db.viewAllRoles();
  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { employeeId, roleId } = await inquirer.prompt([
    {
      name: "employeeId",
      type: "list",
      message: "Which employee's role do you want to update?",
      choices: employeeChoices,
    },
    {
      name: "roleId",
      type: "list",
      message: "Which role do you want to assign the selected employee?",
      choices: roleChoices,
    },
  ]);

  await db.updateEmployeeRole(employeeId, roleId);
}

module.exports = { addDepartment, addRole, addEmployee, updateEmployeeRole };


