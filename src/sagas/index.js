import * as userSaga from './userSaga'
import * as todoSaga from './todoSaga'

export function defaultSaga(sagaMiddleware) {
  Object.values(userSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
  Object.values(todoSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}
