export const getAllTodos = (todos) => {
  return {
    type: 'GET_TODOS',
    payload: todos,
  }
}

export const addTodoSelected = (actiontype) => {
  return {
    type: 'ADD_SELECT',
    payload: actiontype,
  }
}
export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  }
}

export const removeTodoSelected = (actiontype) => {
  return {
    type: 'REMOVE_SELECT',
    payload: actiontype,
  }
}

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: id,
  }
}

export const updateTodo = (todo) => {
  return {
    type: 'UPDATE_TODO',
    payload: todo,
  }
}

export const updateTodoSelected = (actiontype) => {
  return {
    type: 'UPDATE_SELECT',
    payload: actiontype,
  }
}
