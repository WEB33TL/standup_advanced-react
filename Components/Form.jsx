import React, { Component } from 'react'
import { Form as StyledForm } from '../Utils/styled-components'

export class Form extends Component {
  render() {
    return (
      <div>
        <StyledForm>
          <input
            type="text"
            name="todo"
          />
          <input type="submit" value="Add Task" />
        </StyledForm>
      </div>
    )
  }
}

export default Form
