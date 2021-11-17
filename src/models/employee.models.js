var dbConn = require('../../config/dbconfig')

var Employee = function (employee) {
  this.name = employee.name
  this.gender = employee.gender
  this.birthday = employee.birthday
  this.email = employee.email
  this.phone = employee.phone
  this.salary = employee.salary
}

// get all data employee
Employee.getEmployeeData = (result) => {
  dbConn.query(`SELECT * FROM employes`, (err, res) => {
    if (err) {
      console.log('Error while fetching employees', err)
      result(null, err)
    } else {
      console.log('Employees fetched successfully')
      result(null, res)
    }
  })
}

// get employee by id
Employee.getEmployeeByID = (id, result) => {
  dbConn.query(`SELECT * FROM employes WHERE id=?`, id, (err, res) => {
    if (err) {
      console.log('Error while fetching employees by id', err)
      result(null, err)
    } else {
      console.log('Employees fetched successfully')
      result(null, res)
    }
  })
}

// create new employee
Employee.createEmployeData = (employeeData, result) => {
  dbConn.query(`INSERT INTO employes SET ?`, employeeData, (err, res) => {
    if (err) {
      console.log('Error while create employee', err)
      result(null, err)
    } else {
      console.log('Employee Success Created')
      result(null, res)
    }
  })
}

module.exports = Employee
