const express = require('express')
const {errorHandler} = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')
const { connectDB } = require('./config/db')

const port = process.env.PORT || 5000 

connectDB()
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',userRoutes)
app.use('/api/tasks',taskRoutes)

app.use(errorHandler)


app.listen(port ,()=>{
    console.log(`Server Started On ${port}`)
})