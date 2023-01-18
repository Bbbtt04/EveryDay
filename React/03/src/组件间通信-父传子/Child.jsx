import React, { PureComponent } from 'react'

export class Child extends PureComponent {
  render() {
    const { msg } = this.props

    return (
      <div>{msg}</div>
    )
  }
}

export default Child
