import React from 'react'
import {connect} from 'react-redux'
import {login, logout} from './store/Auth.redux'
// @connect(
//   state => state,
//   {login, logout}
// )

class Auth extends React.Component{
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>Auth page</div>
    )
  }
}

export default Auth