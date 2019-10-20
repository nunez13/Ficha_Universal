import React, {Component} from 'react'
import { MDBCard, MDBCardBody,MDBCardTitle,} from "mdbreact";
export default class Arqueotipo extends Component {
    state = {"1":{"visits": {
                "_idVisit": "",
                "doctorName": "",
                "date": "",
                "cause": "",
                "observations": "",
                "nameMedicine": "",
                "quantity": "",
                "dateInit": "",
                "dateExpiry": ""

                
    }},
             "2":{"healtService": {
                "healtInsurance": "",
                "healthCareAgreement": "",
                "medicalForeCast": ""
            }}
            }
    onDragStart(e, data){
        let j = JSON.stringify(data);
        e.dataTransfer.setData("data", j);

    }
    render(){
        const {name, arqueotipo} = this.props
        return(
            <div draggable className="draggable" onDragStart={(e)=>this.onDragStart(e,this.state[arqueotipo])}>
               <MDBCard className="cardd2">
                              <MDBCardBody>
                                <MDBCardTitle>{name}</MDBCardTitle>
                              </MDBCardBody>
                            </MDBCard>
            </div>
        )
    }

}
