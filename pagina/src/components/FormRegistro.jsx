import React, {Component} from 'react'
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';

export default class FormRegistro extends Component {

  handleChange = ({target}) => {
    const {name, value} = target
    this.setState({[name]: value})

  }

  createUser = async () => {
    try {
      const res = await axios.post('http://localhost:5000/users', {
        rut: "12929282-2",
        name: "Zero",
        lastName: "Uno",
        email: "exp12@gmail.com",
        password: "pass12345",
        gender: "Masculino",
        nCollegeMedical: "123456",
        profession: "Medico"
        
      })
      console.log(res.data)
    } catch(err){
      console.log("el error es:", err)
    }
  }

  render(){
    this.createUser()
    
    return(
      <form onSubmit={this.sendData}>
        <label >Rut</label>
        <input type="text" name="rut" onChange={this.handleChange}/><br/>
        <label htmlFor="">Nombre</label>
        <input type="text" name="name" onChange={this.handleChange}/><br/>
        <label>Apellido</label>
        <input type="text" name="lastName" onChange={this.handleChange}/><br/>
        <label htmlFor="" >Email</label>
        <input type="text" name="email" onChange={this.handleChange}/><br/>
        <label htmlFor=""> Password</label>
        <input type="password" placeholder="*****" name="password" onChange={this.handleChange}/><br/>
        <label htmlFor="">NºColegioMedico</label>
        <input type="text" name="nCollegeMedical" onChange={this.handleChange}/><br/>
        <label htmlFor="">Gender</label>
        <select name="gender" id="">
          <option value="">Seleccione Una Opcion</option>
          <option value="Masculino" onChange={this.handleChange}>Masculino </option>
          <option value="Femenino"  onChange={this.handleChange}>Femenino</option>
        </select><br/>
        <label htmlFor="">Profession</label>
        <input type="text" name="profession" onChange={this.handleChange}/><br/>
        <input type="submit" value="Enviar"/>
      </form>
      
    )
  }
}