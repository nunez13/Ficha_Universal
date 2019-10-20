import React, { Component } from 'react'
import {MDBRow, MDBCol,MDBCard, MDBCardBody,MDBBtn,MDBCardTitle,MDBIcon,MDBInput} from "mdbreact";
import { Input } from '@material-ui/core';

export default class FichaMedica extends Component {
    state = {
      "identificationNumber": "",
        "name": "",
        "lastName": "",
        "email": ""

    }

    
    handleState(data){
      this.setState(data)
    }

     onDragOver(e) {
         e.preventDefault()
         console.log('elemento arrastrado sobre ficha ')
     }

     onDrop(e){
       let data =  JSON.parse(e.dataTransfer.getData("data"));
         console.log("esta es la info",data)
         this.handleState(data)
     }
    render(){
      const inputs = []
      if(this.state){
        for(let key in this.state){
          inputs.push(<MDBInput label={`${key}`}/>)
  
        }
      }
      if(this.state['visits']){
        for(let key in this.state['visits']){
          inputs.push(<MDBInput label={`${key}`}/>)
  
        }
       }
       if(this.state['healtService']){
        for(let key in this.state['healtService']){
          inputs.push(<MDBCol md="3"><MDBInput label={`${key}`}/></MDBCol>)
  
        }
       }
        return(
   
                <MDBCol md="5" className="droppable" onDragOver={(e)=> this.onDragOver(e)} onDrop={(e) =>this.onDrop(e)}>
                <MDBCard className="cardd" >
                  <MDBCardBody className = "scrollbar scrollbar-primary">
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
                    <MDBRow>
                    </MDBRow>

                    <MDBRow>
                      {inputs}
                    </MDBRow>

                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

        )
    }
}