import React, {Component} from 'react'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol,MDBCard, MDBCardBody,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBFooter } from "mdbreact";

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      lastToken: ''

    }
  }
  logout = async () => {
    const token = this.state.lastToken
    console.log("realizando peticion")
    try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    const res = await axios.post('http://localhost:5000/users/me/logout')
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
    return(
      <div className="bg">
        {this.props.infouser}
        <MDBContainer >
            <MDBRow > 
              <MDBCol size="8" className="cont">
              <MDBCarousel
                activeItem={1}
                length={3}
                showControls={false}
                showIndicators={false}
                className="z-depth-1"
                slide
              >
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                        alt="First slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
                        alt="Second slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBView>
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
                        alt="Third slide"
                      />
                    </MDBView>
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
              </MDBCol>
              <MDBCol size="4" className="cont">
                  <MDBCard>
                    <MDBCardBody>ARQUETIPO !</MDBCardBody>
                  </MDBCard><br></br>
                  <MDBCard>
                    <MDBCardBody>ARQUETIPO !</MDBCardBody>
                  </MDBCard><br></br>
                  <MDBCard>
                    <MDBCardBody>ARQUETIPO !</MDBCardBody>
                  </MDBCard><br></br>
                  <MDBCard>
                    <MDBCardBody>ARQUETIPO !</MDBCardBody>
                  </MDBCard><br></br>
                  <MDBCard>
                    <MDBCardBody>ARQUETIPO !</MDBCardBody>
                  </MDBCard><br></br>
                  <MDBCard>
                    <MDBCardBody>ARQUETIPO !</MDBCardBody>
                  </MDBCard><br></br>
                  <MDBCard>
                    <MDBCardBody>ARQUETIPO !</MDBCardBody>
                  </MDBCard><br></br>
              </MDBCol>
            </MDBRow>
      </MDBContainer>
      <button onClick={this.logout}>sign out</button>
      </div>
    )
  }

}