import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import Button from 'react-bootstrap/Button'
import Web3 from 'web3'
import Description from './Description'
import Head from './Head'
import Info from './Info'
import Sale from './Sale'
import Price from './Price'
import Listings from './Listings'
import Offers from './Offers'
import Activity from './Activity'
import More from './More'
import Attributes from './Attributes'
import { ipfsUrl } from 'utils/convert'

function Asset() {
  const param = useParams()
  const { items } = useSelector((state) => state.items.items)
  const data =
    _.find(
      items,
      (e) => e.tokenId == param.id && e.contractAddress == param.contract
    ) || {}
  const [metadata, setMetadata] = useState({})

  useEffect(() => {
    console.log(data)
    fetch(ipfsUrl(data.tokenURI))
      .then((res) => res.json())
      .then((res) => {
        setMetadata(res)
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="asset">
      <div className="d-flex">
        <div className="d-flex-2 me-2">
          <img className="asset-logo" src={ipfsUrl(data.imageURL)} />
          <Description data={data} meta={metadata} />
        </div>
        <div className="d-flex-3 ms-2">
          <Head name={data.Collection?.Name || 'Unknown'} />
          <h3>{data.name}</h3>
          <Info data={data} />
          <Sale data={data} />
          <Price />
          <Listings />
          <Offers />
          <Attributes data={metadata} />
        </div>
      </div>
      <Activity />
      <More />
      <div className="d-flex mt-3">
        <Button className="mx-auto">View Collection</Button>
      </div>
    </div>
  )
}

export default Asset
