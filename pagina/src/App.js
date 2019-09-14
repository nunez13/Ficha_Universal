import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link}  from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import './index.css';
import Login from './components/Login'
import Registro from './components/Registro'

class App extends Component {
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
    const bgPink = {backgroundColor: 'aqua-gradient', transparency: '30%'}
  return (

    <div className="App">
      
      <Router>
        <header>
          <MDBNavbar className="nav" dark expand="md" scrolling fixed="top">
            <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/Login">LOGIN</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
          </MDBNavbar>
        </header>
        <Route path="/Login" component={Login}></Route>
        <Route path="/CrearUsuario" component={Registro}></Route>
      </Router>
      
  </div>
  );
  }
}

//falta agregar las rutas.
//y logic

export default App;