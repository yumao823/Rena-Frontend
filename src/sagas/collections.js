import { put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import queryString from 'query-string'

export function* getcollectionsRequest(api, action) {
  const { payload } = action
  const options = queryString.stringify(payload)
  const response = yield api.fetchCollections(options)
  if (response.status === 200) {
    yield put({ type: 'COLLECTIONS_SUCCESS', payload: { ...response.data } })
  }
}

export function* postcollectionRequest(api, action) {
  const { payload } = action
  const response = yield api.postCollection(payload)
  if (response.status === 201) {
    toast.success('You created a collection successfully!')
    yield put({ type: 'POSTCOLLECTION_SUCCESS', payload })
  } else {
    toast.error('You have failed to create a collection!')
  }
}
