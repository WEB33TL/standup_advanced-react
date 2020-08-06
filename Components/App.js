import React, { Component } from 'react'
import todo from '../Utils/todo'
import Form from './Form'

export class App extends Component {
  render() {
    console.log(todo)
    return (
      <div>
        <Form />
      </div>
    )
  }
}

export default App
