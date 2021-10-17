import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppBar, Toolbar, Tabs, Tab, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Logout } from '../action/userAction'
import { addTodoSelected } from '../action/todoActions'
import history from '../history'

const HeaderComponent = () => {
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()
  const logInUser = useSelector((state) => state.isUserLogin)
  const userLogOut = () => {
    localStorage.clear()
    history.push('/')
    dispatch(Logout())
  }

  const addTodo = () => {
    dispatch(addTodoSelected({ newTodo: true }))
  }

  const headerStyle = makeStyles((theme) => ({
    toolStyle: {
      ...theme.mixins.toolbar,
    },
    tabsStyle: {
      marginLeft: 'auto',
    },
    tabStyle: {
      '&:hover': {
        backgroundColor: '#316B83',
        borderRadius: '10px',
      },
    },
  }))

  const style = headerStyle()

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>Welcome {logInUser?.user}</Typography>

          <Tabs
            className={style.tabsStyle}
            value={index}
            onChange={(e, value) => setIndex(value)}
          >
            <Tab
              className={style.tabStyle}
              label='Home'
              to='/home'
              component={Link}
            />
            <Tab
              className={style.tabStyle}
              label='todos'
              to='/todo'
              component={Link}
            />

            <Tab
              className={style.tabStyle}
              label='New-Todo'
              onClick={(e) => addTodo()}
            />
            <Tab
              className={style.tabStyle}
              label='Profile'
              to='/profile'
              component={Link}
            />
            <Tab
              className={style.tabStyle}
              label='LogOut'
              onClick={(e) => userLogOut()}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={style.toolStyle} />
    </>
  )
}

export default HeaderComponent
