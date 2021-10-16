import React from 'react'
import { useSelector } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'

const TodoPage = () => {
  const todos = useSelector((state) => state.todos)

  const rows = todos
  const columns = [
    { field: 'id', hide: true },
    { field: 'username', headerName: 'User Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'done', headerName: 'Status', width: 150 },
    { field: 'targetDate', headerName: 'Due Date', width: 150 },
  ]
  return (
    <div>
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  )
}

export default TodoPage
