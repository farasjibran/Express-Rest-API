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

// update employee
Employee.updateEmployeData = (id, employeeData, result) => {
  console.log(id)
  dbConn.query(
    `UPDATE employes SET name=?, gender=?, birthday=?, email=?, phone=?, salary=? WHERE id=?`,
    [
      employeeData.name,
      employeeData.gender,
      employeeData.birthday,
      employeeData.email,
      employeeData.phone,
      employeeData.salary,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log('Error while updating employee')
        result(null, err)
      } else {
        console.log('Employee updated successfully', employeeData)
        result(null, res)
      }
    },
  )
}

// delete employee
Employee.deleteEmployee = (id, result) => {
  dbConn.query(`DELETE FROM employes WHERE id=?`, id, (err, res) => {
    if (err) {
      console.log('Error while delete employee')
      result(null, err)
    } else {
      console.log('Employee delete successfully')
      result(null, res)
    }
  })
}

module.exports = Employee
