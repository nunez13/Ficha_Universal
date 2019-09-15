import React, {Component} from 'react'
import {  MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import axios from 'axios'
import Registro from './Registro'
import {Route, Link}  from 'react-router-dom'

export default class FormLogin extends Component {
  handleChange = ({target}) => {
  	const {name, value} = target 
  	this.setState({[name]: value})
  	console.log(this.state)  
	}

	logIn = async () => {
  		const info = {rut: '12929282-2', password: 'pass12345'}
  		try{
    		const res = await axios.post('http://localhost:5000/users/login', info)
    		console.log(res.data)      
		}catch(err){
	    	console.log('el error es:', err)
	  	}
  	}
  render(){
    return(
    <div className="bg">
      <center>
        <MDBContainer>
          <MDBRow style={{top:"50%"}}>
            <MDBCol md='12'>
              <MDBCard className='card-image' className="cont" style={{backgroundImage:'url(http://www.wallpaperk.com/wallpapers/envelope-minimal-blue-7837.jpg)', width: '28rem'}}>
                <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                  <div className='text-center'>
                    <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                      <strong>LOG</strong>
                      <strong className='green-text font-weight-bold'>IN</strong>
                    </h3>
                  </div>
                  <MDBInput
                    label='Rut'
                    group
                    type='text'
                    validate
                    labelClass='white-text'
                    name="rut"
                  />
                  <MDBInput
                    label='Contraseña'
                    group
                    type='password'
                    validate
                    labelClass='white-text'
                    name="password"
                  />
                  <MDBRow className='d-flex align-items-center mb-4'>
                    <div className='text-center mb-3 col-md-12'>
                      <MDBBtn
                        color='success'
                        rounded
                        type='button'
                        className='btn-block z-depth-1'
                      >
                        LOGIN
                      </MDBBtn>
                    </div>
                  </MDBRow>
                  <MDBCol md='12'>
                    <p className='font-small white-text d-flex justify-content-end'>
                      No tienes una cuenta?
                      <Link to="/CrearUsuario" className='green-text ml-1 font-weight-bold'>Registrate</Link>
                      <Route path="/CrearUsuario" component={Registro}></Route>

                    </p>
                  </MDBCol>
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