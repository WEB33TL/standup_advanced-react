import { useLocalStorage } from './useLocalStorage'
import { useState } from 'react'

// export const useForm2 = () => {
//   const [value, setValue] = useLocalStorage()

//   return [value, setValue]
// }


export const useForm = () => {
  const [value, setValue] = useState()

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(value)
    setValue({ ...value, [e.target.name]: '' })
  }

  return [value, handleChange, handleSubmit]
}



