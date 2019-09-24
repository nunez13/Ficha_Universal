import React, {Component} from 'react'
import FormLogin from './FormLogin'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Redirect}  from 'react-router-dom'

export default class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			isLoggedIn: false,
			dataUser: {}
		}
		this.LoggedIn = this.LoggedIn.bind(this)
		this.handleUserData = this.handleUserData.bind(this)
	}

	LoggedIn() {
		this.setState({ isLoggedIn: true })

}	
	handleUserData(data){
		this.setState({ dataUser: data })
	}
	render(){
		console.log(this.state.isLoggedIn)
		const {isLoggedIn,dataUser} = this.state
	return(
	<div>
		<Route  render={(props) => (
         isLoggedIn
          ? <Dashboard dataUser={dataUser}/>
          : <FormLogin isLoggedIn={this.LoggedIn} dataUser={this.handleUserData}/>
       )} />
			 
	</div>
	)
	}

}