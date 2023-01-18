import React, { PureComponent } from 'react'

export class Child extends PureComponent {
  constructor(props) {
    super()
    this.state = {
      msg: "我是子组件"
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.fatherFun(this.state.msg)}>传！</button>
      </div>
    )
  }
}

export default Child
