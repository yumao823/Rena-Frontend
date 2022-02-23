const initialState = {
  status: '' // pending, done, error
}

export default function pinata(state = initialState, action) {
  switch (action.type) {
    case 'PINATAJSON_REQUEST':
      return { ...state, status: 'pending' }
    case 'PINATAJSON_SUCCESS':
      return { ...state, status: 'done' }
    case 'PINATAJSON_FAILURE':
      return { ...state, status: 'error' }
    case 'PINATA_REQUEST':
      return { ...state, status: 'pending' }
    case 'PINATA_SUCCESS':
      return { ...state, status: 'done' }
    case 'PINATA_FAILURE':
      return { ...state, status: 'error' }
    default:
      return state
  }
}
