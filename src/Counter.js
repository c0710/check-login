import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement, incrementAsync} from './store/Counter'

class Counter extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    console.log(this.props)
    return (
      <div>
        <h2>counter</h2>
        <h4>now, counter is {this.props.count}</h4>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
        <button onClick={this.props.incrementAsync}>decrement</button>
      </div>

    )
  }
}

Counter = connect(
  state => ({count: state.counter}),
  {increment, decrement, incrementAsync}
)(Counter)

export default Counter