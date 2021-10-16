import * as userSaga from './userSaga'

export function defaultSaga(sagaMiddleware) {
  Object.values(userSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}
