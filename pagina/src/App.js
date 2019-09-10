import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link}  from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import Login from './components/Login'
import Registro from './components/Registro'



class App extends Component {

  render(){
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
          <Link to="/Login">Iniciar Sesion</Link>
          </li>
          
        </ul>

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