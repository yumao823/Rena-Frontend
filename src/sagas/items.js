import { put } from 'redux-saga/effects'
import queryString from 'query-string'
import decamelizeKeys from 'decamelize-keys'

export function* getitemsRequest(api, action) {
  const { payload } = action
  const options = queryString.stringify(decamelizeKeys(payload, '_'))
  const response = yield api.fetchItems(options)
  if (response.status === 200) {
    yield put({ type: 'GETITEMS_SUCCESS', payload: { ...response.data } })
  }
}

export function* resetitemsRequest(api, action) {
  const { payload } = action
  const options = queryString.stringify(decamelizeKeys(payload, '_'))
  const response = yield api.fetchItems(options)
  if (response.status === 200) {
    yield put({ type: 'RESETITEMS_SUCCESS', payload: { ...response.data } })
  }
}

export function* postitemRequest(api, action) {
  const { payload } = action
  const response = yield api.postItem(payload)
  if (response.status === 200) {
    yield put({ type: 'POSTITEM_SUCCESS', payload: { ...response.data } })
  }
}
