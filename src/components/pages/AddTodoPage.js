import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { addTodoSelected } from '../../action/todoActions'
import history from '../../history'

const AddTodoPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [due, setDue] = useState('')

  const dispatch = useDispatch()
  const newTodo = () => {
    history.push('/todo')
    dispatch(addTodoSelected({ newTodo: false }))
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formStyle: {
      backgroundColor: '#CFB784',
      padding: '20px 50px',
    },
  }))

  const style = todoPageStyle()
  return (
    <div className={style.rootStyle}>
      <div className={style.formStyle}>
        <br /> <br />
        <TextField
          id='title'
          label='Title'
          fullWidth
          value={title}
          variant='outlined'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /> <br />
        <TextField
          id='description'
          label='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          variant='outlined'
          fullWidth
        />
        <br /> <br />
        <TextField
          id='done'
          label='Status'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          multiline
          variant='outlined'
          fullWidth
        />
        <br /> <br />
        <TextField
          id='targetDate'
          label='Due Date'
          value={due}
          onChange={(e) => setDue(e.target.value)}
          multiline
          variant='outlined'
          fullWidth
        />
        <br /> <br />
        <button onClick={(e) => newTodo()}>Save</button>
        <button onClick={(e) => newTodo()}>Cancle</button>
      </div>
    </div>
  )
}

export default AddTodoPage
