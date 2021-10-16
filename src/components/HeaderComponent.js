import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link, useHistory } from 'react-router-dom'
import { Logout } from '../action/userAction'

const HeaderComponent = () => {
  const [index, setIndex] = useState(0)
  const history = useHistory()
  const dispatch = useDispatch()

  const userLogOut = () => {
    localStorage.clear()
    history.push('/')
    dispatch(Logout())
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
              to='/addtodo'
              component={Link}
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
