import React, {Component} from 'react'
import axios from 'axios'

export default class FormLogin extends Component {
  handleChange = ({target}) => {
  	const {name, value} = target 
  	this.setState({[name]: value})
  	console.log(this.state)  
	}

	logIn = async () => {
  		const info = {rut: '12929282-2', password: 'pass12345'}
  		try{
    		const res = await axios.post('http://localhost:5000/users/login', info)
    		console.log(res.data)      
		}catch(err){
	    	console.log('el error es:', err)
	  	}
  	}
  render(){
    this.logIn()
    return(
      <form>
		<label>Rut</label>
		<input type="text" name="rt" onChange={this.handleChange}/>
		<label>Password</label>
		<input type="password" name="pw" onChange={this.handleChange}/>
		<input type="submit" value="Iniciar Sesion"/>
	</form>
    )
  }
}