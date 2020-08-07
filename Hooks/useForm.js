import { useLocalStorage } from './useLocalStorage'
import { useState } from 'react'
import todoItem from '../Utils/todo'


export const useForm = () => {
  const [todo, setTodo] = useState(todoItem)
  const [value, setValue] = useState({ todo: '' })

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    setTodo([...todo, { task: value.todo }])
    setValue({ todo: "" })
  }

  return [todo, value, handleChange, handleSubmit]
}



