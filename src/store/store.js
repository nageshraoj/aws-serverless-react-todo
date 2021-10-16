import { createStore, applyMiddleware } from 'redux'
import createSageMiddleWare from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducer/userReducer'
import { defaultSaga } from '../sagas'

const sagaMiddleware = createSageMiddleWare()
const middlware = [sagaMiddleware]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlware))
)

const userStore = () => {
  defaultSaga(sagaMiddleware)
  return store
}

export default userStore()
