import { put } from 'redux-saga/effects'
import { ethers } from 'ethers'

export function* loginRequest() {
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
  yield provider.send('eth_requestAccounts', [])
  const signer = provider.getSigner()
  const address = yield signer.getAddress()
  if (address) {
    yield put({ type: 'LOGIN_SUCCESS', payload: { address } })
  }
}

export function* logoutRequest() {
  yield put({ type: 'LOGOUT_SUCCESS' })
}
