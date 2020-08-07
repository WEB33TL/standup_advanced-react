

let showSearch = false
function searching(obj, string) {
  if (string.length > 0) {
    const searched_array = obj.todo.filter(item => { return (item.task.toUpperCase().indexOf(string.toUppercase()) > -1) })
    obj.searched = searched_array
    showSearch = true
    return obj
  }
  else if (string.length === 0) {
    console.log("empty")
    obj.searched = obj.todo
    showSearch = false
    return obj
  }
}

import React, { Component, useState } from 'react'
import Card from './Todos/Card'
import todoItem from '../Utils/todo'
import Form from './Form'
import SearchBar from './Todos/SearchBar'
import { useForm } from '../Hooks/useForm'

const App = () => {
  console.log(todoItem)
  const [todo, setTodo] = useState(todoItem)
  const [searched, setSearched] = useState()
  // const [value, setValue] = useState()
  const [value, handleChange, handleSubmit] = useForm()



  const onAdd = (item) => {
    console.log('OnAdd function', item)
    // this.setState({ todo: [...this.state.todo, { task: item }] })
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }

  const handleSearchBar = (string) => {
    // this.setState(searching(this.state, string), () => { })
    setSearched(...searched, string)
  }

  return (
    <div>
      <SearchBar handleSearchBar={handleSearchBar} />
      <Form
        onAdd={onAdd}
        value={value}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {todo.map(t => {
        return <Card todo={t} />
      })}

    </div>
  )
}

export default App



