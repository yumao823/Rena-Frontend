import { combineReducers } from 'redux'
import appReducer from './app'
import itemsReducer from './items'
import collectionsReducer from './collections'
import pinataReducer from './pinata'

const rootReducer = combineReducers({
  app: appReducer,
  items: itemsReducer,
  collections: collectionsReducer,
  pinata: pinataReducer
})

export default rootReducer
