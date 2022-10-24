const express = require('express')
const mysql = require('mysql')
const pool  = mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'photo-social-media'
})

const app = express();


app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-Width, Content, Accept, Content-type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

const userRoutes = require('./routes/user')


app.use('/api', userRoutes)




module.exports = app