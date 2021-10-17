import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { getAllTodos } from '../action/todoActions'
import jwt_decode from 'jwt-decode'

// const loginState = (state) => state.isUserLogin

export function* getTodos() {
  yield takeLatest('LOG_IN_SUCCESS', readTodos)
}

export function* readTodos(user) {
  // const { token } = isUserLogin
  //   console.log(user.type)

  if (!user?.type) return
  const userid = `CognitoIdentityServiceProvider.${process.env.REACT_APP_CLIENTID}.LastAuthUser`
  const lastUser = localStorage.getItem(userid)
  const tokenid = `CognitoIdentityServiceProvider.${process.env.REACT_APP_CLIENTID}.${lastUser}.idToken`
  const token = localStorage.getItem(tokenid)
  const currentUser = jwt_decode(token, { headers: true })
  const options = {
    method: 'get',
    url: process.env.REACT_APP_TODO,
    params: {
      username: currentUser.name,
    },
    headers: { Authorization: token },
  }
  const { data } = yield call(axios, options)
  yield put(getAllTodos(data))
}
