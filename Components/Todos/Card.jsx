import React from 'react'

const Card = (props) => {
  const { todo } = props
  console.log('inside Card --> ', props)
  return (
    <div>
      <p>Task:{todo.task}</p>
    </div>
  )
}

export default Card
