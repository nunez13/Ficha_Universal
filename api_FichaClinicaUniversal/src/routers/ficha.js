const express = require('express')
const Ficha = require('../models/Ficha')
const auth = require('../middleware/auth')
const cors = require('cors')

const router = express.Router()
let corsOptions = {origin: 'http://localhost:3000'}
router.options('/', cors(corsOptions))

router.post('/new_ficha',cors(corsOptions), auth, async (req, res, next) => {
    // intenta crear una nueva instacia de ficha
    try{
        const ficha = new Ficha(req.body)
        await ficha.save()
        res.send({ficha})
    }catch(err){
        console.log(err)
        res.status(404).send({message: 'the request failde. try again'})
    }

})
// para probar estos metodos quitar los middlewares "auth".
router.get('/ficha',cors(corsOptions), auth, async (req, res, next) => {
    // intenta traer una ficha medica previamente instanciada
    try{
        const {rut} = req.body
        const ficha = Ficha.findFichaByRut({rut})
        if(!ficha){
            res.status(404).send({error: 'Ficha not found'})
        }
        res.status(200).send({ficha})

    }catch(err){
        console.log(err)
        res.status(404).send({message: 'not found request try again'})
    }
})