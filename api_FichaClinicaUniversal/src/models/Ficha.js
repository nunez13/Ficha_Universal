const mongoose  = require('mongoose')
const validator = require('validator')
const Schema    = mongoose.Schema


// definir propiedades y campos del modelo Ficha Medica
const fichaSchema = Schema({
    identificationNumber: {
        type: Number,
        //required: true,
        unique: true,
        default: 197955384
    },
    date: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: 'Diego'
        //required: true
    },
    lastName: {
        type: String,
        default: 'Pincheira'

        //required: true
    },
    email: {
        type: String,
        //required: true
        default: 'diego@hotmail.com',
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
              default: 'Calle Falsa 123'
              //required: true
          },
          birthData: {
              // cambiar a tipo Date
              type: String,
              default: '11/05/1998'

              //required: true
          },
          gender: {
              type: String,
              default: 'Masculino'

              //required: true
          },
          deathData: {
              // cambiar a tipo Date
              type: String,
              default: 'N/A'
              //required: true
              
          },
          bloodType: {
              type: String,
              default: 'no se xD'
              //required: true
              
          },
          heigth: {
              type: Number,
              default: 88
              //required: true 
          },
          weigth: {
              type: Number,
              default: 168
              //required: true
          },
          legalRepresentative: {
              type: String,
              default: 'mi padre'
              //required: true
          },
          occupation: {
              type: String,
              default: 'Ruby on Rails Developer'
              //required: true
          },
          allergies: {
              type: Array,
              default: ['Polen', 'Polvo']

          },
          maritalStatus: {
              type: String,
              default: 'Soltero'
              //required: true
          },
          city: {
              type: String,
              default: 'Victoria'
              //required: true 
          },
          region: {
              type: String,
              default: 'IX Region de la araucania'
              //required: true
          }

      },
      // healt services 
      healtService: {
          healtInsurance: {
              type: String,
              default: 'Sin Seguro'
              //required: true 
          },
          healthCareAgreement: {
              type: String,
              default: 'F'
              //required: true
          },
          medicalForeCast: {
              type: String,
              default: 'Fonasa'

              //required: true
          }
      },
      // Quitar default y luego dejarlo en blanco
      visits: { type: Array, default: [
          {
            _idVisit: 9999999,
            doctorName: 'Dostor x',
            date: new Date(),
            cause: 'Gripe',
            observations: 'Vino por Gripe ya esta mejor',
            treatment: {
                medicines: { type: Array, 
                    medicine: [
                        {
                        nameMedicine: 'Paracetamol',
                        quantity: '2 cada 8 horas por 7 dias',
                        dateInit: new Date(),
                        dateExpiry: '++/**/----',

                        }
                    ]
                }
            }
        }]

      }
})

fichaSchema.statics.findFichaByIdentificationNumber = async (identificationNumber) => {
    const ficha = await Ficha.findOne({identificationNumber})
    if(!ficha){
        throw new Error({error: 'error ficha is not instanciated'})
    }
    return ficha
}


fichaSchema.statics.updateFicha = async (identificationNumber, newValues) => {
    const ficha =  await Ficha.findOneAndUpdate({identificationNumber},{$set: newValues})
    await ficha.save()
    return ficha

}


const Ficha = mongoose.model('Ficha',fichaSchema)
module.exports = Ficha