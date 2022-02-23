const initialState = {
  items: {
    items: [],
    itemsCount: 0
  }
}

export default function items(state = initialState, action) {
  switch (action.type) {
    case 'GETITEMS_SUCCESS':
      return {
        ...state,
        items: {
          items: [...state.items.items, ...action.payload.items],
          itemsCount: action.payload.itemsCount
        }
      }
    case 'RESETITEMS_SUCCESS':
      return { ...state, items: action.payload }
    default:
      return state
  }
}
