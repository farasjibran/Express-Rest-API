const EmployeeModel = require('../models/employee.models')

// get all employee data
exports.getEmployeeData = (req, res) => {
  EmployeeModel.getEmployeeData((err, employee) => {
    if (err) {
      res.send(err)
      res.json({ success: 404, message: err })
    } else {
      if (employee.length > 0) {
        res.json({ success: 200, message: 'All Data Employee', data: employee })
      } else {
        res.json({ success: 200, message: 'No Employee Data', data: [] })
      }
    }
  })
}

// get employee by id
exports.getEmployeeByID = (req, res) => {
  EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
    if (err) {
      res.send(err)
      res.json({ success: 404, message: err })
    } else {
      if (employee.length > 0) {
        res.json({ success: 200, message: 'Data Employee', data: employee })
      } else {
        res.json({
          success: 200,
          message: 'No Employee Data Suitable',
          data: [],
        })
      }
    }
  })
}

// create employee
exports.createNewEmployee = (req, res) => {
  const employeeData = new EmployeeModel(req.body)

  // Validation
  if ((req.body.constructor === Object.keys(req.body).length) === 0) {
    res.send(400).send({ success: 400, message: 'Please fill all fields' })
  } else {
    EmployeeModel.createEmployeData(employeeData, (err) => {
      if (err) {
        res.send(err)
        res.json({
          status: 404,
          message: 'Something went wrong',
        })
      } else {
        res.json({
          status: 200,
          message: 'Employee Success Created',
          data: req.body,
        })
      }
    })
  }
}

// update employe
exports.updateEmployee = (req, res) => {
  const employeeData = new EmployeeModel(req.body)

  // Validation
  if ((req.body.constructor === Object.keys(req.body).length) === 0) {
    res.send(400).send({ success: 400, message: 'Please fill all fields' })
  } else {
    EmployeeModel.updateEmployeData(req.params.id, employeeData, (err) => {
      if (err) {
        res.send(err)
        res.json({
          status: 404,
          message: 'Something went wrong',
        })
      } else {
        res.json({
          status: 200,
          message: 'Employee Success Updated',
          data: employeeData,
        })
      }
    })
  }
}

// delete employe
exports.deleteEmployee = (req, res) => {
  EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
    if (err) {
      res.send(err)
      res.json({
        status: 404,
        message: 'Something went wrong',
      })
    } else {
      res.json({
        status: 200,
        message: 'Employee Success Deleted',
        data: employee.insertId,
      })
    }
  })
}
