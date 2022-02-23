const initialState = {
  account: ''
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, account: action.payload.address }
    case 'LOGOUT_SUCCESS':
      return { ...state, account: '' }
    default:
      return state
  }
}
