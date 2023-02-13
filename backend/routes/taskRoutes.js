const express = require('express')
const router = express.Router()
const {getTask,addTask,putTask,deleteTask} = require('../controller/taskController')
const {protect} = require('../middleware/authMiddleware')


router.route('/')
  .get(protect, getTask)
  .post(protect, addTask)

router.route('/:id')
  .put(protect, putTask)
  .delete(protect, deleteTask)




module.exports = router 