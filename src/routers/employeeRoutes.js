const express = require('express');
const { getAllEmployees, getEmployee, getEmployeesByBranch, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const router = express.Router();

router.get('/', getAllEmployees);
router.get('/branch/:branch_id', getEmployeesByBranch);
router.get('/:id', getEmployee);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;