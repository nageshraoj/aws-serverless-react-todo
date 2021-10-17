import { combineReducers } from 'redux'

const initialState = {
  isLoading: false,
  authen: false,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST': {
      // console.log('action : LOG IN REQUEST')
      return {
        isLoading: true,
        authen: false,
      }
    }
    case 'LOG_IN_SUCCESS': {
      // console.log('action : LOG IN SUCCESS')
      // console.log(action)
      return {
        isLoading: false,
        authen: true,
        user: action.payload.user,
      }
    }
    case 'LOG_IN_FAILURE': {
      // console.log('action : LOG IN FAILURE')
      return initialState
    }
    case 'LOG_OUT': {
      // console.log('action : LOG OUT')
      return initialState
    }
    default:
      return state
  }
}

const logInType = (state = 'LogIn', action) => {
  switch (action.type) {
    case 'LOGIN':
      return 'LogIn'
    case 'REGISTER':
      return 'Register'
    default:
      return state
  }
}

const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      console.log(action.payload)
      return action.payload

    default:
      return state
  }
}

const todoChangeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SELECT':
      return action.payload
    case 'REMOVE_SELECT':
      return action.payload
    case 'UPDATE_SELECT':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  isUserLogin: loginReducer,
  loginType: logInType,
  todos: todosReducer,
  todoAction: todoChangeReducer,
})
