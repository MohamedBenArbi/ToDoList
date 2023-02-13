const express = require('express')
const router = express.Router()
const {register, login, getme} = require('../controller/userController')
const {protect} = require('../middleware/authMiddleware')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/getme').get(protect,getme)





module.exports = router 