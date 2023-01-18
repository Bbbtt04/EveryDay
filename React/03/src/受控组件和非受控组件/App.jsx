import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: "wbt"
    }
  }

  inputChange(e) {
    this.setState({ username: e.target.value }, () => {
      console.log(this.state.username);
    })
  }

  render() {
    const { username } = this.state

    return (
      <div>
        {/* 非受控组件 */}
        <input type="text" onChange={e => this.inputChange(e)} />
        {/* 受控组件 */}
        <input type="text" value={username} onChange={e => this.inputChange(e)} />
        <h2>username: {username}</h2>
      </div>
    )
  }
}

export default App
