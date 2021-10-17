import React from 'react'
import { useDispatch } from 'react-redux'
import { FormControl, InputLabel, TextField } from '@material-ui/core'
import { updateTodoSelected } from '../../action/todoActions'

const EditTodoPage = () => {
  const dispatch = useDispatch()
  const updateTodo = () => {
    dispatch(updateTodoSelected({ updateTodo: false }))
  }

  return (
    <div>
      <FormControl>
        <InputLabel>Account</InputLabel>
      </FormControl>

      <TextField id='job-number' label='Job #' fullWidth />

      <TextField
        id='project-description'
        label='Project Description'
        placeholder='Provide a detailed description of the project:'
        multiline
        variant='outlined'
        fullWidth
      />
      <button onClick={(e) => updateTodo()}>Submit</button>
    </div>
  )
}

export default EditTodoPage
