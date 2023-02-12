const express = require('express')
const router = express.Router()
const {getTask,postTask,putTask,deleteTask} = require('../controller/taskController')



router.route('/')
  .get(getTask)
  .post(postTask)

router.route('/:id')
  .put(putTask)
  .delete(deleteTask)




module.exports = router 