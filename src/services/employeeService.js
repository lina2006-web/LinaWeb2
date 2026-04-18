const Employee = require('../models/Employee');

async function getAllEmployees() {
    return await Employee.findAll();
}

async function getEmployee(id) {
    return await Employee.findByPk(id);
}

async function getEmployeesByBranch(branch_id) {
    return await Employee.findAll({ where: { branch_id } });
}

async function createEmployee(employee) {
    return await Employee.create({
        name: employee.name,
        position: employee.position,
        salary: employee.salary,
        branch_id: employee.branch_id
    });
}

async function updateEmployee(id, employee) {
    await Employee.update(
        {
            name: employee.name,
            position: employee.position,
            salary: employee.salary,
            branch_id: employee.branch_id
        },
        { where: { id } }
    );
    return await Employee.findByPk(id);
}

async function deleteEmployee(id) {
    await Employee.destroy({ where: { id } });
    return true;
}

module.exports = {
    getAllEmployees,
    getEmployee,
    getEmployeesByBranch,
    createEmployee,
    updateEmployee,
    deleteEmployee
};