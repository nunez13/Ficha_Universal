import React, {Component} from 'react'
import axios from 'axios'


logout = async() => {
  
}
export default class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        {this.props.infouser}
        <br/>
        <br/>
        <br/>
        <h1>Dashboard</h1>
        <button>Logout</button>
      </div>
    )
  }
}