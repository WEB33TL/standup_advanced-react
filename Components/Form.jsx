import React, { Component } from 'react'
import { Form as StyledForm } from '../Utils/styled-components'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <StyledForm onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="todo"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
          <input type="submit" value="Add Task" />
        </StyledForm>
        {/* // <button onClick={this.props.handleClear}>Clear</button> */}
      </div >
    )
  }
}

export default Form
