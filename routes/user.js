const express = require('express')
const route = express.Router();
const userCtrl = require('../controllers/user')

route.get('/users', userCtrl.getAllUsers)
route.post('/create', )



module.exports = route