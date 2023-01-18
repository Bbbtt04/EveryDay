import React, { PureComponent } from 'react'
import Home from './pages/home'
import Profile from './pages/profile'
import About from './pages/about'
import Category from './pages/category'

import store from './store'
import './style.css'
export class App extends PureComponent {
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

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>APP Counter: {counter}</h2>
        <div className='pages'>
          <Home />
          <Profile />
          <About />
          <Category />
        </div>
      </div>
    )
  }
}

export default App
