import React, {Component} from 'react'
import FormLogin from './FormLogin'
import dashboard from './dashboard'
import { BrowserRouter as Router, Route, Redirect}  from 'react-router-dom'

export default class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			isLoggedIn: false,
			dataUser: null
		}
		this.LoggedIn = this.LoggedIn.bind(this);
	}

	LoggedIn() {
		this.setState({ isLoggedIn: true })

}

 redirectDashboard = () => {
		const {isLoggedIn} = this.state
		if(isLoggedIn){
			return <Redirect from="/Login" to="/dashboard"/>
	}else{
		return <h3>Usuario no Logeado</h3>
	}

 }
	
	render(){
		console.log(this.state.isLoggedIn)
		const {isLoggedIn} = this.state
	return(
	<div>
		<Route  render={(props) => (
         isLoggedIn
          ? <dashboard {...props} />
          : <FormLogin isLoggedIn={this.LoggedIn}/>
       )} />
			 
	</div>
	)
	}

}