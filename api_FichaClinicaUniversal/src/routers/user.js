const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')
const cors = require('cors')
const QRCode = require('qrcode')
const speakeasy = require('speakeasy')

const router = express.Router()
let corsOptions = {origin: 'http://localhost:3000'}
router.options('/', cors(corsOptions))

router.post('/users', cors(corsOptions), async (req, res) => {
    // crea un nuevo usuario
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send({error: 'Problem with the instance of user try again'})
        console.log(error)
    }
})

router.post('/users/login', cors(corsOptions), async(req, res) => {
    // Inicio de sesion de un usuario ya creado
    try {
        const { rut, password } = req.body
        const user = await User.findByCredentials(rut, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (error) {
        res.status(400).send(error)
        console.log(error);
    }

})

//perfil de usuario "datos del usuario que inicia sesion"
router.get('/users/me', cors(corsOptions), auth, async (req, res) => {
    res.send(req.user)
})


//cerrar sesion

router.post('/users/me/logout', cors(corsOptions), auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) =>{
            return token.token != req.token
        })
        await req.user.save()
        res.send({message: 'Sign out session'})
    } catch(error) {
        res.status(500).send(error)
    }

})

router.post('/users/me/logoutall', cors(corsOptions),auth, async(req, res) => {
    // cierra sesion de todos los dispositivos
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/login2fa', cors(corsOptions), async(req,res) => {

    //2fa
    try{
     const { rut, password } = req.body
     const user = await User.findByCredentials(rut, password)
         if (!user) {
             return res.status(401).send({error: 'Login failed! Check authentication credentials'})
         }
     let secret = speakeasy.generateSecret({length: 20});
     user.tokens2fa = user.tokens2fa.concat(secret)
     await user.save()
     const qrcode = await  QRCode.toDataURL(secret.otpauth_url)
     res.send(qrcode)
    }catch(error){  
        console.log(error)
    }
})


router.post('/users/login2fa/verifytoken', cors(corsOptions), async (req,res) => {
    try{
        const { rut, password, secret } = req.body
        const user = await User.findByCredentials(rut, password)
        if(!user){
            return res.status(401).send({error: 'User Not Found'})
        }
        const secretKeyBase32 = user.tokens2fa[user.tokens2fa.length - 1].base32

        var verified = speakeasy.totp.verify({
            secret: secretKeyBase32,
            encoding: 'base32',
            token: secret
          });
        console.log(verified)
        if(!verified){
            res.status(200).send({error: 'Qr code is not valid try again '})
        }
        res.status(200).send({verified})


    }catch(error){
        console.log(error)
    }
})

module.exports = router
