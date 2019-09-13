import React, {Component} from 'react'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,MDBIcon } from 'mdbreact';

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
            <MDBRow>
              <MDBCol md="12">
                <MDBCard className='card-image' style={{backgroundImage:'url(http://www.wallpaperk.com/wallpapers/envelope-minimal-blue-7837.jpg)', width: '28rem'}}>
                <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                    <MDBCardBody>
                        <form onSubmit={this.sendData}>
                        <div className='text-center'>
                          <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                            <strong>SIGN</strong>
                            <strong className='green-text font-weight-bold'>UP</strong>
                          </h3>
                        </div>
                          <div className="grey-text">
                            <MDBInput label="Nombre completo" group type="text" validate error="wrong" success="right"/>
                            <MDBInput label="Rut" group type="text" validate error="wrong" success="right" lenght="9"/>
                            <MDBInput label="Email" group type="email" validate error="wrong" success="right"/>
                            <MDBInput label="Confirma tu email" group type="text" validate error="wrong" success="right"/>
                            <MDBInput label="Contraseña" group type="password" validate/>
                          </div>
                          <div className="text-center py-4 mt-3">
                            <MDBBtn color="cyan" type="submit"> Register </MDBBtn>
                          </div>
                        </form>
                    </MDBCardBody>
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