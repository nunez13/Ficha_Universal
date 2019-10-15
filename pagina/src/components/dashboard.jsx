import React, {Component} from 'react'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol,MDBCard, MDBCardBody,MDBBtn,MDBCardTitle,MDBIcon,} from "mdbreact";
import Login from './Login'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      lastToken: '',
      isLogged: true

    }
  }
  logout = async () => {
    const token = this.state.lastToken
    console.log("realizando peticion")
    try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    const res = await axios.post('http://localhost:5000/users/me/logout')
    this.setState({isLogged: false})
    console.log(res.data)
    }catch(err){
      console.log(err)
    }
}

componentDidUpdate(){
  const {dataUser} = this.props
  const {lastToken} = this.state
  let _lastToken = dataUser.token
  if(_lastToken !== lastToken ){
    this.setState({lastToken: _lastToken})
  }

  
}
 render(){
  if(this.state.isLogged){
    return(
      <div className="bg" style={{height:'100vh'}}>
        {this.props.infouser}
        <br/>
        <br/>
        <MDBContainer fluid >
          <div style={{textAlign:"right"}}>
            <MDBBtn onClick={this.logout}>Cerrar Sesion</MDBBtn>
          </div>
        
            <MDBRow >             
              <MDBCol md="5">
                <MDBCard className="cardd" >
                  <MDBCardBody>
                    <MDBCardTitle>Ficha Medica</MDBCardTitle>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBBtn rounded size="lg" color="success" title="Guardar"><MDBIcon icon="save" className="iconFM"></MDBIcon></MDBBtn>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBBtn rounded size="lg" color="danger" title="Eliminar"><MDBIcon icon="trash" className="iconFM"></MDBIcon></MDBBtn>
                      </MDBCol>
                      <MDBCol md="4">
                        <MDBBtn rounded size="lg" color="warning" title="Cancelar"><MDBIcon icon="times" className="iconFM"></MDBIcon></MDBBtn>
                      </MDBCol>
                    </MDBRow>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="4">
                <MDBCard className="cardd">
                  <MDBCardBody>
                    <MDBCardTitle>Detalles Ficha Usuario</MDBCardTitle>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="3">
                <MDBCard className="cardd">
                  <MDBCardBody>
                    <MDBCardTitle>Ficha Medica</MDBCardTitle>
                    <div className="active-pink-3 active-pink-4 mb-4">
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

            </MDBRow>
        </MDBContainer>      
      </div>
    )}
    else{
      return(
      <Login/>
      )
    }
  }

}