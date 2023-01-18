import React, { PureComponent } from 'react'
import Child from './Child'

export class Father extends PureComponent {
  render() {
    return (
      <div>
        <Child msg="123"></Child>
      </div>
    )
  }
}

export default Father
