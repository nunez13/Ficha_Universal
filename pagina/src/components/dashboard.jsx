import React, {Component} from 'react'
import axios from 'axios'

export default class dashboard extends Component {
  constructor(props){
    super(props)
  }
  logout = async() => {
  const token = localStorage.getItem('token')
  const header = { header: { header } };
  const res = await axios.post('http://localhost:5000/users/me/logout',header)
}
  render(){
    return(
      <div>
        {this.props.infouser}
        <br/>
        <br/>
        <br/>
        <h1>Dashboard</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}