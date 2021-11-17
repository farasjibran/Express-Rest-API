const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/employee.controller')

// get all data employee
router.get('/', EmployeeController.getEmployeeData)

// get employee by id
router.get('/:id', EmployeeController.getEmployeeByID)

// create employee
router.post('/', EmployeeController.createNewEmployee)

// update employee
router.put('/:id', EmployeeController.updateEmployee)

// delete employee
router.delete('/:id', EmployeeController.deleteEmployee)

module.exports = router
