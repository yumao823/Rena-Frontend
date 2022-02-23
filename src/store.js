import { persistStore, persistReducer } from 'redux-persist'
import storage from 'localforage'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'

import rootReducer from 'reducers'
import rootSaga from 'sagas'

const sagaMiddleware = createSagaMiddleware()
const history = createBrowserHistory()

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore(preloadedState) {
  const store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(persistedReducer)
    )
  }

  const persistor = persistStore(store)

  return { store, persistor, history }
}
