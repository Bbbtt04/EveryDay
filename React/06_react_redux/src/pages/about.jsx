import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import { addNumberAction } from '../store/actionCreators'

export class about extends PureComponent {

  render() {
    const { counter, addNumber, category } = this.props
    return (
      <div>
        about {counter}
        <button onClick={() => addNumber(100)}>add</button>
        <ul>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    category: state.category
  }
}

function mapDispathToProps(dispatch) {
  return {
    addNumber: (number) => dispatch(addNumberAction(number))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(about)
