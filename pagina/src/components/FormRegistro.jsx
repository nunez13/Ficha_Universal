import React, {Component} from 'react'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput} from 'mdbreact';
import Select from 'react-select'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid = ({formErrors, ...rest}) =>{
  let valid = true;
  
  //Validar errores de formularios vacios
  Object.values(formErrors).forEach(val=> {
    val.length > 0 && (valid = false);
  });

  //Validar si es formulario es completado
  Object.values(rest).forEach(val => {
    val == null && (valid = false)
  });
  
  return valid;
}

export default class FormRegistro extends Component {

  constructor(props){
    super(props);
    this.state = {
      nombre:null,
      apellido:null,
      password:null,
      email:null,
      ncolegio:null,
      profesion:null,
      formErrors:{
        nombre:"",
        apellido:"",
        password:"",
        email:"",
        ncolegio:"",
        profesion:""
      }
    };
  }

  handleChange = ({target}) => {
    const {name, value} = target
    this.setState({[name]: value})
    let formErrors = this.state.formErrors;

    switch (name){
      case 'nombre':
        formErrors.nombre =
        value.length == 0 ? 'Debe ingresar su Nombre' : "";
        break;

      case 'apellido':
        formErrors.apellido =
        value.length == 0 ? 'Debe ingresar su Apellido' : "";
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

      case 'ncolegio':
        formErrors.ncolegio = 
        value.length == 0 ? 'Debe ingresar Numero de Colegio Medico' : "";
        break;

      case 'profesion':
        formErrors.profesion = 
        value.length == 0 ? 'Debe ingresar su Profesion' : "";
        break;
    }

    //this.setState({formErrors, [name]: value },() => console.log(this.state));

  };

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
      console.log(res.data);
    } catch(err){
      console.log("el error es:", err);
    }
  }

  render(){
    this.createUser()
    const { formErrors } = this.state;
    
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
                    name='nombre'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="name"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  {formErrors.nombre.length > 0 && (
                  <span className ="errorMessage">{formErrors.nombre}</span>
                  )}
                  <MDBInput
                    label='Apellido'
                    group
                    type='text'
                    name='apellido'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="lastName"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  {formErrors.apellido.length > 0 && (
                  <span className ="errorMessage">{formErrors.apellido}</span>
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
                  <span className ="errorMessage">{formErrors.email}</span>
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
                  <span className ="errorMessage">{formErrors.password}</span>
                  )}
                  <MDBInput
                    label='NºColegioMedico'
                    group
                    type='number'
                    name='ncolegio'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="nCollegeMedical"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  {formErrors.ncolegio.length > 0 && (
                  <span className ="errorMessage">{formErrors.ncolegio}</span>
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
                    name='profesion'
                    validate
                    labelClass='white-text'
                    onChange={this.handleChange}
                    id="profession"
                    className='white-text mb-5 mt-4 font-weight-bold'
                  />
                  {formErrors.profesion.length > 0 && (
                  <span className ="errorMessage">{formErrors.profesion}</span>
                  )}

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