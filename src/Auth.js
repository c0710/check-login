import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from './store/Auth.redux'

class Auth extends React.Component{
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
        <h2>Auth page</h2>
        <button onClick={this.props.login}>登陆</button>
      </div>
    )
  }
}

Auth = connect(
  state => state.auth,
  {login}
)(Auth)

export default Auth