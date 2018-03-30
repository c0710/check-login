import React from 'react'
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './store/Auth.redux'
import Counter from './Counter'

function PageB () {
  return <h2>Page B</h2>
}
function PageC () {
  return <h2>Page C</h2>
}
console.log(connect)
class Dashboard extends React.Component{
  constructor (props) {
    super(props)
  }
  render () {
    const app = (
      <div>
        <ul>
          <li>
            <Link to='/dashboard/'>Page A</Link>
          </li>
          <li>
            <Link to='/dashboard/b'>Page B</Link>
          </li>
          <li>
            <Link to='/dashboard/c'>Page C</Link>
          </li>
        </ul>
        <div>
          <button onClick={this.props.logout}>注销登陆</button>
        </div>
        <Route path='/dashboard/' exact component={Counter} />
        <Route path='/dashboard/b' component={PageB} />
        <Route path='/dashboard/c' component={PageC} />
      </div>
    )
    const redirectToLogin = <Redirect to='login' />
    return this.props.isAuth ? app : redirectToLogin
  }
}
Dashboard = connect(
  state => state.auth,
  {logout}
)(Dashboard)
export default Dashboard