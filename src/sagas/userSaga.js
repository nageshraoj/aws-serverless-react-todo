import { put, takeLatest } from 'redux-saga/effects'
import { LoginSuccessed } from '../action/userAction'
import jwt_decode from 'jwt-decode'

export function* loginMainSaga() {
  yield takeLatest('LOG_IN_REQUEST', authenticateUser)
}
export function* authenticateUser(user) {
  if (!user?.data) return
  //   console.log(user.data)
  const userid = `CognitoIdentityServiceProvider.${process.env.REACT_APP_CLIENTID}.LastAuthUser`
  const lastUser = localStorage.getItem(userid)
  const tokenid = `CognitoIdentityServiceProvider.${process.env.REACT_APP_CLIENTID}.${lastUser}.idToken`
  const token = localStorage.getItem(tokenid)
  const currentUser = jwt_decode(token, { headers: true })
  yield put(LoginSuccessed({ user: currentUser.name }))
}
