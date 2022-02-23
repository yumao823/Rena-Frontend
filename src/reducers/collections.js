const initialState = {
  collections: {}
}

export default function collections(state = initialState, action) {
  switch (action.type) {
    case 'COLLECTIONS_SUCCESS':
      return { ...state, collections: action.payload }
    default:
      return state
  }
}
