const mongoose  = require('mongoose')
const validator = require('validator')
const bcrypt    = require('bcryptjs')
const jwt       = require('jsonwebtoken')
const Schema    = mongoose.Schema

// define las propiedades u campos que tendra cada documento user
const userSchema = Schema({
  rut: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: value => {
      if(!validator.isEmail(value)){
        throw new Error({error: 'Email no valido'})
      }
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 7
  },
  gender: {
    type: String,
    required: true
  },
  nCollegeMedical: {
    type: String,
    required: true,
    unique: true
  },
  profession: {
    type: String,
    required: true
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]

})

userSchema.pre('save', async function (next) {

  const user = this
  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

userSchema.methods.generateAuthToken = async function() { // creacion metodo de instancia
  // genera un token de autenticacion para el usuario
  const user = this
  const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

userSchema.statics.findByCredentials = async (rut, password) => { // define un metodo de clase userSchema
  // Busca un usuario por email y password
  const user = await User.findOne({rut})
  if (!user) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  return user
}




const User = mongoose.model('User', userSchema)
module.exports = User