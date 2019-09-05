const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/FichaMedica',{ useNewUrlParser: true, useCreateIndex: true}) // port por defecto de mongo db
        .then(()=> {
          console.log('Conexion Base de Datos Exitosa');
        }).catch( error =>{  console.log(error); });