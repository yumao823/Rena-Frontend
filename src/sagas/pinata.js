import { put } from 'redux-saga/effects'
import { ethers } from 'ethers'

export function* pinatajsonRequest(api, action) {
  const { payload } = action
  const response = yield api.postJSONtoPinata(payload)
  if (response.status === 200) {
    yield put({ type: 'PINATAJSON_SUCCESS' })
  } else {
    yield put({ type: 'PINATAJSON_FAILURE' })
  }
}

export function* pinatafileRequest(api, action) {
  const { payload } = action
  const response = yield api.postFiletoPinata(payload)

  if (response.status === 200) {
    yield put({ type: 'PINATAFILE_SUCCESS' })
  } else {
    yield put({ type: 'PINATAFILE_FAILURE' })
  }
}

export function* pinataRequest(api, action) {
  const { file, json, data } = action.payload
  const fileRes = yield api.postFiletoPinata(file)
  if (fileRes.status === 200) {
    json.pinataContent.image = 'ipfs://' + fileRes.data.IpfsHash
  } else {
    yield put({ type: 'PINATA_FAILURE' })
    return
  }
  const jsonRes = yield api.postJSONtoPinata(json)

  if (jsonRes.status === 200) {
    yield put({ type: 'PINATA_SUCCESS' })
    const payload = {
      item: {
        tokenURI: 'ipfs://' + jsonRes.data.IpfsHash,
        imageUrl: 'ipfs://' + fileRes.data.IpfsHash,
        ...data
      }
    }
    yield put({ type: 'POSTITEM_REQUEST', payload })
  } else {
    yield put({ type: 'PINATA_FAILURE' })
  }
}
