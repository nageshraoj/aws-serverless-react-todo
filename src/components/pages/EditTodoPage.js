import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { updateTodoSelected } from '../../action/todoActions'

const EditTodoPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [due, setDue] = useState('')
  const dispatch = useDispatch()
  const { todo } = useSelector((state) => state.todoAction)

  useEffect(() => {
    setTitle(todo.title)
    setDescription(todo.description)
    setStatus(todo.done)
    setDue(todo.targetDate)
  }, [todo])

  const updateTodo = () => {
    dispatch(updateTodoSelected({ updateTodo: false }))
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
        {/* <FormControl>
        <InputLabel>Update Todo</InputLabel>
      </FormControl> */}
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
        <button onClick={(e) => updateTodo()}>Update</button>
        <button onClick={(e) => updateTodo()}>Cancle</button>
      </div>
    </div>
  )
}

export default EditTodoPage
