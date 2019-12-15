const express = require('express')
const Ficha = require('../models/Ficha')
const auth = require('../middleware/auth')
const cors = require('cors')

const router = express.Router()
let corsOptions = {origin: 'http://localhost:3000'}
router.options('/', cors(corsOptions))

router.post('/new_ficha', async (req, res, next) => {
    // intenta crear una nueva instacia de ficha
    try{
        const ficha = new Ficha(req.body)
        await ficha.save()
        res.send({ficha})
        console.log(ficha)
    }catch(err){
        console.log(err)
        res.status(404).send({message: 'the request failed. try again'})
    }

})
// para probar estos metodos quitar los middlewares "auth".
router.post('/ficha', async (req, res, next) => {
    // intenta traer una ficha medica previamente instanciada
    try{
        const { identificationNumber } = req.body
        console.log(identificationNumber)
        const ficha = await Ficha.findFichaByIdentificationNumber(identificationNumber)
        if(!ficha){
            res.status(404).send({error: 'Ficha not found'})
        }
        res.status(200).send({ficha})

    }catch(err){
        console.log(err)
        res.status(404).send({message: 'not found request try again'})
    }
})

router.patch('/update_ficha', async (req, res, next) =>{
    // actualiza un recurso en especifico
    // enviar todos los campos, o habra perdida de informacion respecto al schema
    try{
        const { identificationNumber, newValues } = req.body
        console.log(identificationNumber, newValues.ficha)
        const ficha = await Ficha.updateFicha(identificationNumber, newValues.ficha)
        if(!ficha){
            res.status(404).send({error: ' The record was not update. try again'})
        }
        res.status(200).send({ficha})
    }catch(err){
        console.log(err)
        res.status(404).send({error: 'Request Not Found. Try again'})
    }

})

module.exports = router