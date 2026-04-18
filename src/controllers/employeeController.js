const employeeService = require('../services/employeeService');

async function getAllEmployees(req, res) {
    try {
        const employees = await employeeService.getAllEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

async function getEmployee(req, res) {
    try {
        const employee = await employeeService.getEmployee(req.params.id);
        res.json(employee);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

async function getEmployeesByBranch(req, res) {
    try {
        const employees = await employeeService.getEmployeesByBranch(req.params.branch_id);
        res.json(employees);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

async function createEmployee(req, res) {
    try {
        if (!req.body.name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        if (!req.body.position) {
            return res.status(400).json({ message: 'Position is required' });
        }

        if (!req.body.salary) {
            return res.status(400).json({ message: 'Salary is required' });
        }

        if (!req.body.branch_id) {
            return res.status(400).json({ message: 'Branch ID is required' });
        }

        const employee = await employeeService.createEmployee(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

async function updateEmployee(req, res) {
    try {
        if (!req.body.name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        if (!req.body.position) {
            return res.status(400).json({ message: 'Position is required' });
        }

        if (!req.body.salary) {
            return res.status(400).json({ message: 'Salary is required' });
        }

        if (!req.body.branch_id) {
            return res.status(400).json({ message: 'Branch ID is required' });
        }

        const employee = await employeeService.updateEmployee(req.params.id, req.body);
        res.json(employee);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

async function deleteEmployee(req, res) {
    try {
        await employeeService.deleteEmployee(req.params.id);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            stack: error.stack
        });
    }
}

module.exports = {
    getAllEmployees,
    getEmployee,
    getEmployeesByBranch,
    createEmployee,
    updateEmployee,
    deleteEmployee
};