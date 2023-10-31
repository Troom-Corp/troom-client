interface AuthState {
  firstName: string
  secondName: string
  nick: string
  email: string
  password: string
}

interface AuthAction {
  type: string
  key: string
  value: string
}

export const InitialState = {
  firstName: '',
  secondName: '',
  nick: '',
  email: '',
  password: ''
}

export const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'set':
      return { ...state, [action.key]: action.value }
    default:
      return state
  }
}