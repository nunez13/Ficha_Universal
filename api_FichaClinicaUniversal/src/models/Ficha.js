const mongoose  = require('mongoose')
const validator = require('validator')
const Schema    = mongoose.Schema


// definir propiedades y campos del modelo Ficha Medica
const fichaSchema = Schema({
    identificationNumber: {
        type: String,
        
        unique: true
    },
    date: {
        type: Date,
        default: new Date
    },
    name: {
        type: String,
        required: true
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
      userDetails: {
          address: {
              type: String,
              required: true
          },
          birthData: {
              // cambiar a tipo Date
              type: String,

              //required: true
          },
          gender: {
              type: String,
              required: true
          },
          deathData: {
              // cambiar a tipo Date
              type: String,
              required: false
              
          },
          bloodType: {
              type: String,
              required: true
              
          },
          heigth: {
              type: Number,
              required: true 
          },
          weigth: {
              type: Number,
              required: true
          },
          legalRepresentative: {
              type: String,
              required: true
          },
          occupation: {
              type: String,
              required: true
          },
          allergies: {
              type: Array

          },
          maritalStatus: {
              type: String,
              required: true
          },
          city: {
              type: String,
              required: true 
          },
          region: {
              type: String,
              required: true
          }

      },
      // healt services 
      healtService: {
          healtInsurance: {
              type: String,
              required: true 
          },
          healthCareAgreement: {
              type: String,
              required: true
          }
      },
      // Quitar default y luego dejarlo en blanco
      visits: { type: Array }
})

fichaSchema.statics.findFichaByIdentificationNumber = async (identificationNumber) => {
    const ficha = await Ficha.findOne({identificationNumber})
    if(!ficha){
        throw new Error({error: 'error ficha is not instanciated'})
    }
    return ficha
}


fichaSchema.statics.updateFicha = async (identificationNumber, newValues) => {
    const ficha =  await Ficha.findOneAndUpdate({identificationNumber},{$set: newValues},{new: true})
    await ficha.save()
    return ficha

}


const Ficha = mongoose.model('Ficha',fichaSchema)
module.exports = Ficha