import React, { Component } from 'react';
import { BrowserRouter as Router, Route}  from 'react-router-dom'
import Login from './components/Login'
import Registro from './components/Registro'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'

class App extends Component {

  render(){
  return (

    <div className="App">
      
      <Router>
        <Navbar/>
        <Route path="/Login" component={Login}></Route>
        <Route path="/CrearUsuario" component={Registro}></Route>
        <Route path="/Dashboard" component={Dashboard}></Route>

      </Router>
      
  </div>
  );
  }
}

///falta agregar las rutas.
//y logic

export default App;