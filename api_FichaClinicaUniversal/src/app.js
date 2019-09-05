require('./db/db')
const express = require('express');
const userRouter = require('./routers/user');
const port = 3000
const router = express.Router();
const app = express();

//cargar archivos de rutas


//middlewares
app.use(express.json());
app.use(userRouter,router);


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// app.get('/test', (req, res) =>{
//   res.status(200).send({
//     message: 'hola mundo test api'
//   });
// });

//CORS

//exportar modulo app.js
module.exports = app;