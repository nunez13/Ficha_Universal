import React, {Component} from 'react'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol,MDBCard, MDBCardBody,MDBBtn,MDBCardTitle} from "mdbreact";
import Login from './Login'
import Arqueotipo from './Arqueotipo';
import FichaMedica from './FichaMedica'
import DetallesFicha from './DetallesFicha';

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
              <FichaMedica/>

              <DetallesFicha/>

              <MDBCol md="3">
                <MDBCard className="cardd">
                  <MDBCardBody className = "scrollbar scrollbar-primary">
                    <MDBCardTitle>Ficha Medica</MDBCardTitle>
                    <div className="active-pink-3 active-pink-4 mb-4">
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                      <div style={{textAlign:"right"}}>
                      <MDBBtn >Buscar Ficha</MDBBtn>
          </div>
        
							<br></br>
                            <Arqueotipo name={"Arqueotipo Visita"} arqueotipo={"1"}/>
                            <Arqueotipo name={"Arqueotipo Servicios Medicos"} arqueotipo={"2"}/>
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