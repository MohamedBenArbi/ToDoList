const express = require('express')
const router = express.Router()
const {register, login, getme} = require('../controller/userController')


router.route('/register').post(register)
router.route('/login').post(login)
router.route('/getme').get(getme)





module.exports = router 