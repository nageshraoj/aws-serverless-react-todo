import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
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
import { GetAllTodos, LoginSuccessed } from './action/userAction'

const App = () => {
  const loginType = useSelector((state) => state.loginType)
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.isUserLogin)

  const currentUser = async () => {
    const userid = `CognitoIdentityServiceProvider.${process.env.REACT_APP_CLIENTID}.LastAuthUser`
    const lastUser = localStorage.getItem(userid)
    const tokenid = `CognitoIdentityServiceProvider.${process.env.REACT_APP_CLIENTID}.${lastUser}.idToken`
    const token = localStorage.getItem(tokenid)

    const options = {
      method: 'get',
      url: process.env.REACT_APP_TODO,
      headers: { Authorization: token },
    }

    const { data } = await axios(options)
    if (data) {
      dispatch(LoginSuccessed({ token: '' }))
      dispatch(GetAllTodos(data))
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
            <Route path='/addtodo' exact component={AddTodoPage} />
            <Route path='/profile' exact component={ProfilePage} />
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
