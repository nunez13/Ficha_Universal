const mongoose  = require('mongoose')
const validator = require('validator')
const Schema    = mongoose.Schema


// definir propiedades y campos del modelo Ficha Medica
const fichaSchema = Schema({
    identificationNumber: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
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
              type: Date,
              required: true
          },
          gender: {
              type: String,
              required: true
          },
          deathData: {
              type: Date,
              required: true
              
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
          allergies: [{
              allergie: {
                  type: String
              }
          }],
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
          },
          medicalForeCast: {
              type: String,
              required: true
          }
      },
      visits: [{visit: {
          _idVisit: {
              type: Number
          },
          doctorName:{
              type: String
          },
          date: {
              type: Date,
              default: Date.now
          },
          cause: {
              type: String
          },
          observations: {
              type: String
          },
          treatment: {
              medicines: [
                  {medicine: {
                      nameMedicine: {
                          type: String
                      },
                      quantity: {
                          type: String
                      },
                      dateInit: {
                          type: Date,
                          default: Date.now
                      },
                      dateExpiry: {
                          type: Date
                      }
                  }}
              ]
          }

      }}
      ]
})

fichaSchema.statics.findFichaByRut = async (rut) => {
    const ficha = await Ficha.find({rut})
    if(!ficha){
        throw new Error({error: 'error ficha is not instanciated'})
    }
    return ficha
}


const Ficha = mongoose.model('Ficha',fichaSchema)
module.exports = Ficha