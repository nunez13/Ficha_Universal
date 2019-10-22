//fragmento de código que actúa como un puente entre la base de datos y la aplicación
// asegurarnos de que cuando se envía una solicitud al servidor, se ejecute algún código (middleware) 
// antes de que la solicitud llegue al servidor y devuelva una respuesta. 
// Queremos verificar si una persona que está intentando acceder a un recurso 
// específico está autorizada para acceder a él
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, process.env.JWT_KEY)
    try {
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth