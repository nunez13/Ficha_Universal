require('./db/db')
const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/user')
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use(userRouter)


app.listen(port, () => {
    console.log(`Server Corriendo en el puerto ${port}`)
})


//exportar modulo app.js
module.exports = app
