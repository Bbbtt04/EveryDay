import React, { PureComponent } from 'react'
import Child from './Child'

export class Father extends PureComponent {
  render() {
    return (
      <div>
        <Child fatherFun={(msg) => this.fatherFun(msg)}></Child>
      </div>
    )
  }

  fatherFun(msg) {
    console.log("子组件传过来的信息：" + msg);
  }
}

export default Father
