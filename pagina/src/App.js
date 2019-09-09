import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link}  from 'react-router-dom'
import Login from './components/Login'
import Registro from './components/Registro'
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
          <Link to="/Login">Iniciar Sesion</Link>
          </li>
          <li>
          <Link to="/CrearUsuario">Crear Usuario</Link>
          </li>
        </ul> 

        <Route path="/Login" component={Login}></Route>
                <Route path="/CrearUsuario" component={Registro}></Route>
      </Router>
      
    </div>
  );
  }
}

export default App;