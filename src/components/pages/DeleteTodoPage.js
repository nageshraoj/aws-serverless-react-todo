import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { removeTodoSelected } from '../../action/todoActions'

const DeleteTodoPage = () => {
  const dispatch = useDispatch()
  const deleteTodo = () => {
    dispatch(removeTodoSelected({ removeTodo: false }))
  }
  const { todo } = useSelector((state) => state.todoAction)

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
        <InputLabel>Delete Todo</InputLabel>
      </FormControl> */}
        <br /> <br />
        <TextField
          id='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={todo.title}
        />
        <br /> <br />
        <TextField
          id='description'
          label='Description'
          value={todo.description}
          multiline
          variant='outlined'
          fullWidth
        />
        <br /> <br />
        <TextField
          id='done'
          label='Status'
          value={todo.done}
          multiline
          variant='outlined'
          fullWidth
        />
        <br /> <br />
        <TextField
          id='targetDate'
          label='Due Date'
          value={todo.targetDate}
          multiline
          variant='outlined'
          fullWidth
        />
        <button onClick={(e) => deleteTodo()}>Delete</button>
        <button onClick={(e) => deleteTodo()}>Cancle</button>
      </div>
    </div>
  )
}

export default DeleteTodoPage
