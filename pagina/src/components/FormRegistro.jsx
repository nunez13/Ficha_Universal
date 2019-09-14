import React, {Component} from 'react'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput} from 'mdbreact';
import Select from 'react-select'
export default class FormRegistro extends Component {

  handleChange = ({target}) => {
    const {name, value} = target
    this.setState({[name]: value})

  }

  createUser = async () => {
    try {
      const res = await axios.post('http://localhost:5000/users', {
        rut: "12929282-2",
        name: "Zero",
        lastName: "Uno",
        email: "exp12@gmail.com",
        password: "pass12345",
        gender: "Masculino",
        nCollegeMedical: "123456",
        profession: "Medico"
        
      })
      console.log(res.data)
    } catch(err){
      console.log("el error es:", err)
    }
  }

  render(){
    this.createUser()
    
return(
  <div className="bg">
      <center>
        <MDBContainer>
          <MDBRow style={{top:"50%"}}>
            <MDBCol md='12'>
              <MDBCard className='card-image' style={{backgroundImage:'url(http://www.wallpaperk.com/wallpapers/envelope-minimal-blue-7837.jpg)', width: '28rem'}}className="cont">
                <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                  <div className='text-center'>
                    <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                      <strong>REGISTRO</strong>
                      <strong className='green-text font-weight-bold'> MEDICO</strong>
                    </h3>
                  </div>
                  <MDBInput
                    label='Rut'
                    group
                    type='number'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="rut"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  <MDBInput
                    label='Nombre'
                    group
                    type='text'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="name"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  <MDBInput
                    label='Apellido'
                    group
                    type='text'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="lastName"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  <MDBInput
                    label='Email'
                    group
                    type='email'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="email"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  <MDBInput
                    label='Contraseña'
                    group
                    type='password'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="password"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  <MDBInput
                    label='NºColegioMedico'
                    group
                    type='number'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="nCollegeMedical"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  <select className="browser-default custom-select" id="gender">
                    <option>Selecciona tu genero</option>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                  </select>
                   <MDBInput
                    label='Profesion'
                    group
                    type='text'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="profession"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />

                  <MDBRow className='d-flex align-items-center mb-4'>
                    <div className='text-center mb-3 col-md-12'>
                      <MDBBtn
                        color='success'
                        rounded
                        type='button'
                        className='btn-block z-depth-1'
                      >
                        Registrar
                      </MDBBtn>
                    </div>
                  </MDBRow>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </center>
  </div>
    )
  }
}