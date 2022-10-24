const mysql = require('mysql')
const bcrypt = require('bcrypt')

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
      
     
     


    pool.getConnection((err, connection) => {
        if(err) throw err
        

        
            
            let result = connection.query(`SELECT * FROM users`);
       
    
            console.log(result)
        
    


       


        let hashedPassword = "";
        const data = req.body



        // bcrypt will transform the password send by the client side to an hash so nobody can decrypt it
        bcrypt.hash(data.password, 10)
        .then(hash => {  
            hashedPassword = hash 

            connection.query(`INSERT INTO users (id, email, pseudo, password) VALUES ('${data.id}', '${data.email}', '${data.pseudo}', '${hashedPassword}')`, (err, rows) => {
                connection.release() // return the connection to pool
                if (!err) {
                  return  res.status(201).send({message: "Utilisateur crée"})
                } else {
                    console.log(err)
                }
           
                console.log('The data from beer table are:11 \n', rows)
        })
 

        })
    })
}



exports.login = (req, res, next) => {

}