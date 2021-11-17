const mysql = require('mysql')

// configuration
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_employes'
})

dbConn.connect(function (error) {
    if (error) throw error;
    console.log('Database Connected Success')
})

module.exports = dbConn;