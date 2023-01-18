import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import store from '../store'
import { subNumberAction } from '../store/actionCreators'

export class profile extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter,
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      })
    })
  }

  subNumber(num) {
    store.dispatch(subNumberAction(num))
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>Profile Counter: {counter}</h2>
        <div>
          <button onClick={() => this.subNumber(1)}> -1</button>
          <button onClick={() => this.subNumber(5)}> -5</button>
        </div>
      </div>
    )
  }
}

export default connect()(profile)
