import React, {Component} from 'react'

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
      </div>
    )
  }
}