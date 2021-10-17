import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { addTodoSelected } from '../../action/todoActions'

const AddTodoPage = () => {
  const dispatch = useDispatch()
  const newTodo = () => {
    dispatch(addTodoSelected({ newTodo:false }))
  }

  const todoPageStyle = makeStyles((theme) => ({
    rootStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      height: '100vh',
      width: '100vw',
    },
    formStyle: {
      height: '500px',
      width: '300px',
      backgroundColor: '#ddd',
    },
  }))

  const style = todoPageStyle()
  return (
    <div className={style.rootStyle}>
      <div>
        <h1>AddTodoPage Page</h1>
        <button onClick={(e) => newTodo()}>Submit</button>
      </div>
    </div>
  )
}

export default AddTodoPage
