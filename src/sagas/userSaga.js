import { put, takeLatest } from 'redux-saga/effects'
import { LoginSuccessed } from '../action/userAction'

export function* loginMainSaga() {
  yield takeLatest('LOG_IN_REQUEST', authenticateUser)
}
export function* authenticateUser(user) {
  if (!user?.data) return
//   console.log(user.data)
  yield put(LoginSuccessed({ token: user.data }))
}
