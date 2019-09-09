import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link}  from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';



class App extends Component {

  render(){
  return (
    <div className="bg">
      <center>
        <MDBContainer>
          <MDBRow style={{top:"50%"}}>
            <MDBCol md='12'>
              <MDBCard className='card-image' style={{backgroundImage:'url(http://www.wallpaperk.com/wallpapers/envelope-minimal-blue-7837.jpg)', width: '28rem'}}>
                <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                  <div className='text-center'>
                    <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                      <strong>SIGN</strong>
                      <strong className='green-text font-weight-bold'> UP</strong>
                    </h3>
                  </div>
                  <MDBInput
                    label='Rut'
                    group
                    type='text'
                    validate
                    labelClass='white-text'
                  />
                  <MDBInput
                    label='Contraseña'
                    group
                    type='password'
                    validate
                    labelClass='white-text'
                  />
                  <div className='md-form pb-3'>
                    <MDBInput
                      label={
                        <>
                          Acepta los&nbsp;
                          <a href='#!' className='green-text font-weight-bold'>
                            Terminos y condiciones 
                          </a>
                        </>
                      }
                      type='checkbox'
                      id='checkbox1'
                      labelClass='white-text'
                    />
                  </div>
                  <MDBRow className='d-flex align-items-center mb-4'>
                    <div className='text-center mb-3 col-md-12'>
                      <MDBBtn
                        color='success'
                        rounded
                        type='button'
                        className='btn-block z-depth-1'
                      >
                        Sign in
                      </MDBBtn>
                    </div>
                  </MDBRow>
                  <MDBCol md='12'>
                    <p className='font-small white-text d-flex justify-content-end'>
                      Have an account?
                      <a href='#!' className='green-text ml-1 font-weight-bold'>
                        Log in
                      </a>
                    </p>
                  </MDBCol>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </center>
    </div>
  );
  }
}

//falta agregar las rutas.
//y logic

export default App;