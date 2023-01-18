import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getCategoryAction } from '../store/actionCreators'

export class category extends Component {
  constructor() {
    super()
    this.state = {
      category: ["category1", "category2", "category3"]
    }
  }

  componentDidMount() {
    this.props.changeCategory(this.state.category)
  }

  render() {
    return (
      <div>category</div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeCategory: (category) => {
      dispatch(getCategoryAction(category))
    }
  }
}

export default connect(null, mapDispatchToProps)(category)
