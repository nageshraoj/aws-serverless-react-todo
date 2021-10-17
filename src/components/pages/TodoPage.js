import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'
import { Delete, Edit } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import {
  removeTodoSelected,
  updateTodoSelected,
} from '../../action/todoActions'

const TodoPage = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const rows = todos
  const columns = [
    { field: 'id', hide: true },
    {
      field: 'rownum',
      headerName: 'Id',
      width: 150,
      renderCell: (params) => {
        return <>Number </>
      },
    },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 350 },
    { field: 'done', headerName: 'Status', width: 150 },
    { field: 'targetDate', headerName: 'Due Date', width: 150 },
    {
      field: '',
      headerName: 'Edit/Delete',
      width: 200,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const editTodo = (e) => {
          console.log('Edit below record')
          console.log(params.row.id)
          dispatch(updateTodoSelected({ todo: params, updateTodo: true }))
        }

        const deleteTodo = (e) => {
          console.log('Delete below record')
          console.log(params)
          dispatch(removeTodoSelected({ todo: params, removeTodo: true }))
        }

        return (
          <>
            <Button onClick={(e) => editTodo(e)}>
              <Edit />
            </Button>
            <Button onClick={(e) => deleteTodo(e)}>
              <Delete />
            </Button>
          </>
        )
      },
    },
  ]

  return (
    <div>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableSelectionOnClick={true}
        />
      </div>
    </div>
  )
}

export default TodoPage
