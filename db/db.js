const connection = require('./connection');

module.exports = {
    viewAllDepartments: async function () {
        const [rows] = await connection.promise().query('SELECT * FROM department');
        return rows;
    },

    viewAllRoles: async function () {
        const [rows] = await connection.promise().query('SELECT * FROM role');
        return rows;
    },

    viewAllEmployees: async function () {
        const [rows] = await connection.promise().query('SELECT * FROM employee');
        return rows;
    },

    addDepartment: async function (name) {
        const [result] = await connection.promise().query('INSERT INTO department SET ?', { name: name });
        return result;
    },

    addRole: async function (title, salary, department_id) {
        const [result] = await connection.promise().query('INSERT INTO role SET ?', { title: title, salary: salary, department_id: department_id });
        return result;
    },

    addEmployee: async function (first_name, last_name, role_id, manager_id = null) {
        const [result] = await connection.promise().query('INSERT INTO employee SET ?', { first_name: first_name, last_name: last_name, role_id: role_id, manager_id: manager_id });
        return result;
    },

    updateEmployeeRole: async function (role_id, id) {
        const [result] = await connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [role_id, id]);
        return result;
    }
};
