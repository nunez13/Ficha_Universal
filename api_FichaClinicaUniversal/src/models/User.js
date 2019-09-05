const mongoose  = require('mongoose');
const validator = require('validator');
const bcrypt    = require('bcryptjs');
const jwt       = require('jsonwebtoken');
const Schema    = mongoose.Schema;

// define las propiedades u campos que tendra cada documento user
const userShema = Schema({
  Rut: {
    type: String,
    required: true,
    trim: true
  },
  Name: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: valor => {
      if(!validator.isEmail(valor)){
        throw new Error({error: 'Email no valido'})
      }
    }
  },
  Password: {
    type: String,
    required: true,
    minLength: 7
  },
  Gender: {
    type: String,
    required: true
  },
  NCollegeMedical: {
    type: String,
    required: true
  },
  Profession: {
    type: String,
    required: true
  },
  Tokens: [{
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

userSchema.methods.generateAuthToken = async function() {
  // genera un token de autenticacion para el usuario
  const user = this
  const token = jwt.sign({_id: user._id}, 'Esto no se hace') // definir variable de entorno con el JWT  
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

userSchema.statics.findByCredentials = async (email, password) => {
  // Busca un usuario por email y password
  const user = await User.findOne({ email} )
  if (!user) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login credentials' })
  }
  return user
}




const User = mongoose.model('User',userShema);
module.exports = User