import _ from 'lodash'

export function ipfsUrl(e) {
  const tokenURL = e?.match(/http/g)
    ? e
    : _.replace(e, 'ipfs://', 'https://ipfs.io/ipfs/')
  return tokenURL
}

export function payToken(e) {
  if (e.paymentToken?.length > 3) return e.lastSalePricePaymentToken
  else return e.paymentToken
}
