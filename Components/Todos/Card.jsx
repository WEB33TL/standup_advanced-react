import React from 'react'

const Card = (props) => {
  const { todo } = props
  console.log(todo, 'this is todo')
  return (
    <div>
      <p>Task:{todo.task}</p>
    </div>
  )
}

export default Card
