import React, { Component } from 'react'
import { MDBCol,MDBCard, MDBCardBody,MDBBtn,MDBCardTitle,MDBInput} from "mdbreact";

export default class DetallesFicha extends Component{
  state = {
    
      "address": "",
      "birthData": "",
      "gender": "",
      "deathData": "",
      "bloodType": "",
      "heigth": "",
      "weigth": "",
      "legalRepresentative": "",
      "occupation": "",
      "allergies": [
          "Polen",
          "Polvo"
      ],
      "maritalStatus": "",
      "city": "",
      "region": ""


  }
    render(){
      const inputs = []
      if(this.state){
        for(let key in this.state){
          inputs.push(<MDBInput label={`${key}`}/>)
  
        }
      }
        return(
            <MDBCol md="4">
                <MDBCard className="cardd">
                  <MDBCardBody className = "scrollbar scrollbar-primary">
                    <MDBCardTitle>Detalles Ficha Usuario</MDBCardTitle>
                    {inputs}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
        )
    }
}