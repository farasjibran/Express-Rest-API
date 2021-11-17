const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse request data content type application/json
app.use(bodyParser.json())

// Route
app.get('/', (req, res) => {
  res.send('Hello World')
})

// Route Employee
const employeeRoutes = require('./src/routes/employee.route')
app.use('/api/v1/employee', employeeRoutes)

// Check Port
app.listen(port, () => {
  console.log(`Server Is Running At Port ${port}`)
})
