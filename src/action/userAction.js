export const LoginRequested = (user) => {
  return {
    type: 'LOG_IN_REQUEST',
    data: user,
  }
}

export const LoginSuccessed = (token) => {
  return {
    type: 'LOG_IN_SUCCESS',
    payload: token,
  }
}

export const LoginFailed = () => {
  return {
    type: 'LOG_IN_FAILURE',
  }
}

export const Logout = () => {
  return {
    type: 'LOG_OUT',
  }
}


export const LoginType = () => {
  return {
    type:'LOGIN'
  }
}

export const RegisterType = () => {
  return {
    type:'REGISTER'
  }
}