import { all, takeLatest } from 'redux-saga/effects'
import * as api from 'services/api'
import { loginRequest, logoutRequest } from './app'
import { getitemsRequest, resetitemsRequest, postitemRequest } from './items'
import { getcollectionsRequest, postcollectionRequest } from './collections'
import { pinatajsonRequest, pinatafileRequest, pinataRequest } from './pinata'

export default function* root() {
  yield all([
    takeLatest('LOGIN_REQUEST', loginRequest),
    takeLatest('LOGOUT_REQUEST', logoutRequest),
    takeLatest('GETITEMS_REQUEST', getitemsRequest, api),
    takeLatest('RESETITEMS_REQUEST', resetitemsRequest, api),
    takeLatest('GETCOLLECTIONS_REQUEST', getcollectionsRequest, api),
    takeLatest('POSTCOLLECTION_REQUEST', postcollectionRequest, api),
    takeLatest('POSTITEM_REQUEST', postitemRequest, api),
    takeLatest('PINATAJSON_REQUEST', pinatajsonRequest, api),
    takeLatest('PINATAFILE_REQUEST', pinatafileRequest, api),
    takeLatest('PINATA_REQUEST', pinataRequest, api)
  ])
}
