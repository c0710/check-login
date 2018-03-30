import React from 'react'
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import {connect} from 'react-redux'

function PageA () {
  return <h2>Page A</h2>
}
function PageB () {
  return <h2>Page B</h2>
}
function PageC () {
  return <h2>Page C</h2>
}
@connect(
  state => state
)
console.log(connect)
class Dashboard extends React.Component{
  constructor (props) {
    super(props)
  }
  render () {
    console.log(this.props)
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
        <Route path='/dashboard/' exact component={PageA} />
        <Route path='/dashboard/b' component={PageB} />
        <Route path='/dashboard/c' component={PageC} />
      </div>
    )
    const redirectToLogin = <Redirect to='login' />
    return (
      <h2>test</h2>
    )
  }
}

export default Dashboard