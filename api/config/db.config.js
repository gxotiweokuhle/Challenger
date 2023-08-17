

//import dotenv to allow access all variables defined on env

require('dotenv').config()
const {createPool} = require("mysql")
const connection = createPool ({
    host: processs.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    port: process.env.dbPort,
    database: process.env.dbName,
    mulitipleStatements: true,
    connectionLimit: 30

})
module.exports = connection;