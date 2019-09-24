import React, {Component} from 'react'
import axios from 'axios'

export default class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      lastToken: ''

    }
  }
  logout = async () => {
    const token = this.state.lastToken
    console.log("realizando peticion")
    try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    const res = await axios.post('http://localhost:5000/users/me/logout')
    console.log(res.data)
    }catch(err){
      console.log(err)
    }
}

componentDidUpdate(){
  const {dataUser} = this.props
  const {lastToken} = this.state
  let _lastToken = dataUser.token
  if(_lastToken !== lastToken ){
    this.setState({lastToken: _lastToken})
  }

  
}
  render(){
    console.log(this.props.dataUser)
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <h1>Dashboard</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}