import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './styles/theme'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
import HeaderComponent from './components/HeaderComponent'
import HomePage from './components/pages/HomePage'
import ProfilePage from './components/pages/ProfilePage'
import TodoPage from './components/pages/TodoPage'
import AddTodoPage from './components/pages/AddTodoPage'
import axios from 'axios'
import { LoginSuccessed, Logout } from './action/userAction'
import { getAllTodos } from './action/todoActions'
import history from './history'
import EditTodoPage from './components/pages/EditTodoPage'
import DeleteTodoPage from './components/pages/DeleteTodoPage'

const App = () => {
  const loginType = useSelector((state) => state.loginType)
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.isUserLogin)
  const todoAction = useSelector((state) => state.todoAction)
  const currentUser = async () => {
    try {
      const userid = `CognitoIdentityServiceProvider.${process.env.REACT_APP_CLIENTID}.LastAuthUser`
      const lastUser = localStorage.getItem(userid)
      const tokenid = `CognitoIdentityServiceProvider.${process.env.REACT_APP_CLIENTID}.${lastUser}.idToken`
      const token = localStorage.getItem(tokenid)
      const currentUser = jwt_decode(token, { headers: true })
      // const { exp } = currentUser
      // if (exp < (new Date().getTime() + 1) / 1000) {
      //   localStorage.clear()
      //   history.push('/')
      //   dispatch(Logout())
      //   return false
      // }

      const options = {
        method: 'get',
        url: process.env.REACT_APP_TODO,
        headers: { Authorization: token },
        params: {
          username: currentUser.name,
        },
      }

      const { data } = await axios(options)

      if (data) {
        dispatch(LoginSuccessed({ user: currentUser.name }))
        dispatch(getAllTodos(data))
      }
    } catch (error) {
      localStorage.clear()
      history.push('/')
      dispatch(Logout())
    }
  }

  useEffect(() => {
    currentUser()
  }, [loginType])

  return (
    <>
      <ThemeProvider theme={theme}>
        {isLogin?.authen ? (
          <BrowserRouter>
            <HeaderComponent />
            <Route path='/' exact component={HomePage} />
            <Route path='/home' exact component={HomePage} />
            <Route path='/todo' exact component={TodoPage} />
            <Route path='/profile' exact component={ProfilePage} />
            {todoAction?.newTodo && <AddTodoPage />}
            {todoAction?.updateTodo && <EditTodoPage />}
            {todoAction?.removeTodo && <DeleteTodoPage />}
          </BrowserRouter>
        ) : loginType === 'LogIn' ? (
          <LoginComponent />
        ) : (
          <RegisterComponent />
        )}
      </ThemeProvider>
    </>
  )
}

export default App
