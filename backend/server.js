const express = require('express')

const dotenv = require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')

const port = process.env.PORT || 5000 

const app = express()


app.use('/api/users',userRoutes)
app.use('/api/tasks',taskRoutes)


app.listen(port ,()=>{
    console.log(`Server Started On ${port}`)
})