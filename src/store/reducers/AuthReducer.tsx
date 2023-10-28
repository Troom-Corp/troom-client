interface AuthState {
  companyName: string
  secondName: string
  name: string
  email: string
  password: string
}

interface AuthAction {
  type: string
  key: string
  value: string
}

export const InitialState = {
  companyName: '',
  secondName: '',
  name: '',
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