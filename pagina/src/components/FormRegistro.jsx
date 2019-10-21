import React, {Component} from 'react'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput} from 'mdbreact';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid = ({formErrors, ...rest}) =>{
  let valid = true;
  
  //Validar errores de formularios vacios
  Object.values(formErrors).forEach(val=> {
    val.length > 0 && (valid = false);
  });

  //Validar si es formulario es completado
  Object.values(rest).forEach(val => {
    val === null && (valid = false)
  });
  
  return valid;
}

export default class FormRegistro extends Component {

  constructor(props){
    super(props);
    this.state = {
      rut: null,
      name: null,
      lastName: null,
      password: null,
      email: null,
      gender: 'Default',
      nCollegeMedical: null,
      profession: null,
      formErrors:{
        rut: '',
        name: '',
        lastName: '',
        password: '',
        email: '',
        gender: '',
        nCollegeMedical: '',
        profession: '',
      }
    };
  }
//Validaciones de campos al ingreso de datos del usuario
  handleChange = ({target}) => {
    const {name, value} = target
    this.setState({[name]: value})
    let formErrors = this.state.formErrors;
  switch (name){
      case 'rut':
        formErrors.rut = 
        value.length === 0 ? 'Debe Ingresar su Rut' : "";
        break;

      case 'name':
        formErrors.name =
        value.length === 0 ? 'Debe ingresar su Nombre' : "";
        break;

      case 'lastName':
        formErrors.lastName =
        value.length === 0 ? 'Debe ingresar su Apellido' : "";
        break;

      case 'password':
        formErrors.password = 
        value.length < 8 ? 'Debe contener mínimo 8 caracteres' : "";
        break;

      case 'email':
        formErrors.email = 
        emailRegex.test(value) && value.length > 0
        ? ''
        : "Ingrese un Email Valido";
        break;

      case 'nCollegeMedical':
        formErrors.nCollegeMedical = 
        value.length === 0 ? 'Debe ingresar Numero de Colegio Medico' : "";
        break;

      case 'profession':
        formErrors.profession = 
        value.length === 0 ? 'Debe ingresar su Profesion' : "";
        break;
    }
    //this.setState({formErrors, [name]: value },() => console.log(this.state));

  };

  handleSubmit = () => {
    const {formErrors, ...rest} = this.state
    const result = formValid({formErrors, ...rest})
    if(result === false) return alert('Complete el Formulario')
    this.createUser(rest)

  }
  createUser = async (info) => {
    try {
      const res = await axios.post('http://localhost:5000/users',info)
      localStorage.setItem('Token',res.data.token)
    } catch(err){
      console.log("el error es:", err)
    }
  }

  render(){
    const { formErrors } = this.state;
//divs que contienen los componentes y estilos de los formularios  
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
                    type='text'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="rut"
                    className='white-text mb-5 mt-4 font-weight-bold'
                    name="rut"
                  />
                  {formErrors.rut.length > 0 && (
                  <span className ="errorMessage" style={{ color:"red"}}>{formErrors.rut}</span>
                  )}
                  <MDBInput
                    label='Nombre'
                    group
                    type='text'
                    name='name'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="name"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  {formErrors.name.length > 0 && (
                  <span className ="errorMessage" style={{ color:"red"}}>{formErrors.name}</span>
                  )}
                  <MDBInput
                    label='Apellido'
                    group
                    type='text'
                    name='lastName'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="lastName"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  {formErrors.lastName.length > 0 && (
                  <span className ="errorMessage" style={{ color:"red"}}>{formErrors.lastName}</span>
                  )}
                  <MDBInput
                    label='Email'
                    group
                    type='email'
                    name='email'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="email"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  {formErrors.email.length > 0 && (
                  <span className ="errorMessage" style={{ color:"red"}}>{formErrors.email}</span>
                  )}
                  <MDBInput
                    label='Contraseña'
                    group
                    type='password'
                    name='password'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="password"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  {formErrors.password.length > 0 && (
                  <span className ="errorMessage"style={{ color:"red"}}>{formErrors.password}</span>
                  )}
                  <MDBInput
                    label='NºColegioMedico'
                    group
                    type='number'
                    name='nCollegeMedical'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="nCollegeMedical"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  {formErrors.nCollegeMedical.length > 0 && (
                  <span className ="errorMessage" style={{ color:"red"}}>{formErrors.nCollegeMedical}</span>
                  )}
                  <select className="browser-default custom-select" id="gender">
                    <option>Selecciona tu genero</option>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                  </select>
                   <MDBInput
                    label='Profesion'
                    group
                    type='text'
                    name='profession'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="profession"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  {formErrors.profession.length > 0 && (
                  <span className ="errorMessage" style={{ color:"red"}}>{formErrors.profession}</span>
                  )}

                  <MDBRow className='d-flex align-items-center mb-4'>
                    <div className='text-center mb-3 col-md-12'>
                      <MDBBtn
                        color='success'
                        rounded
                        type='button'
                        className='btn-block z-depth-1'
                        onClick={this.handleSubmit}
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