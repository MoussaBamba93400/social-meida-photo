const mysql = require('mysql')

const pool  = mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'photo-social-media'
})


exports.getAllUsers = (req, res, next) => {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)
        connection.query('SELECT * from users', (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

            // if(err) throw err
           
        })
    })
}



exports.createUser = (req, res, next) => {
    
}