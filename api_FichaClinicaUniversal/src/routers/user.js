const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/users', async (req, res) => {
    // crea un nuevo usuario
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})

router.post('/users/login', async(req, res) => {
    // Inicio de sesion de un usuario ya creado
    try {
        const { rut, password } = req.body
        const user = await User.findByCredentials(rut, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
        console.log(error);
    }

})

//perfil de usuario "datos del usuario que inicia sesion"
router.get('/users/me', auth, async (req, res) => { 
    res.send(req.user)
})


//cerrar sesion 

router.post('/users/me/logout',auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) =>{
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }

})

router.post('/users/me/logoutall', auth, async(req, res) => {
    // cierra sesion de todos los dispositivos
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router