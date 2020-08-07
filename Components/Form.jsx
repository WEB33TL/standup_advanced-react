import React from 'react'
import { Form as StyledForm } from '../Utils/styled-components'
import { useForm } from '../Hooks/useForm'

const Form = (props) => {
  const { handleChange, value, handleSubmit } = props

  console.log(value)
  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={value.todo}
          onChange={handleChange}
        />
        <input type="submit" value="Add Task" />
      </StyledForm>
      {/* // <button onClick={this.props.handleClear}>Clear</button> */}
    </div >
  )
}

export default Form
