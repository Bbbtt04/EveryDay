import React, { PureComponent } from 'react'

import store from '../store'
import { addNumberAction } from '../store/actionCreators'

export class home extends PureComponent {
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

  addNumber(num) {
    store.dispatch(addNumberAction(num))
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <div>
          <button onClick={() => this.addNumber(1)}>+1</button>
          <button onClick={() => this.addNumber(5)}>+5</button>
        </div>
      </div>
    )
  }
}

export default home
