import React, {Component} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem } from 'mdbreact';
import '../index.css';
import {Link}  from 'react-router-dom'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collapse: false,
    };
    this.onClick = this.onClick.bind(this);
}

onClick() {
  this.setState({
      collapse: !this.state.collapse,
    });
}
  render(){
    return(
     
        <header>
          <MDBNavbar className="nav" dark expand="md" scrolling fixed="top">
            <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <Link to="/Login" >Login</Link>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
          </MDBNavbar>
        </header>
    )
  }
}