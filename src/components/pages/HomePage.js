import React from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const todos = useSelector((state) => state.todos)
  console.log(todos)
  return <div></div>
}

export default HomePage
