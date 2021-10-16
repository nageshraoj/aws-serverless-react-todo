import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { GetAllTodos } from '../action/userAction'

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
  const options = {
    method: 'get',
    url: process.env.REACT_APP_TODO,
    headers: { Authorization: token },
  }
  const { data } = yield call(axios, options)
  yield put(GetAllTodos(data))
}
