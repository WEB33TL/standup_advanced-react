// let showSearch = false
// function searching(obj, string) {
//   if (string.length > 0) {
//     const searched_array = obj.todo.filter(item => { return (item.task.toUpperCase().indexOf(string.toUppercase()) > -1) })
//     obj.searched = searched_array
//     showSearch = true
//     return obj
//   }
//   else if (string.length === 0) {
//     console.log("empty")
//     obj.searched = obj.todo
//     showSearch = false
//     return obj
//   }
// }

import React, { Component, useState } from 'react'
import Card from './Todos/Card'
import Form from './Form'
import todoItem from '../Utils/todo'
import SearchBar from './Todos/SearchBar'
import { useForm } from '../Hooks/useForm'

const App = () => {
  const [todo, value, handleChange, handleSubmit] = useForm()

  console.log('Inside app--> ', todo)
  return (
    <div>
      {/* <SearchBar handleSearchBar={handleSearchBar} /> */}
      <Form
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



