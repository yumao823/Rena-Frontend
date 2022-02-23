import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Wallet from 'react-bootstrap-icons/dist/icons/wallet-fill'
import Offer from 'react-bootstrap-icons/dist/icons/tag-fill'
import Clock from 'react-bootstrap-icons/dist/icons/clock'
import * as moment from 'moment'
import { payToken } from 'utils/convert'

function Sale({ data }) {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setInterval(() => {
      const dateStart = new Date()
      const dateEnd = moment(data.saleEndsAt)
      const duration = moment.duration(dateEnd.diff(dateStart))
      setHours(duration.get('hours'))
      setMinutes(duration.get('minutes'))
      setSeconds(duration.get('seconds'))
    }, 1000)
  }, [])

  return (
    <div className="sale">
      {data.saleEndsAt && (
        <div className="sale-head">
          <div className="d-flex align-items-center mb-2">
            <Clock className="me-2" />
            <span>
              Sale ends{' '}
              {moment(data.saleEndsAt).format('MMM DD, YYYY [at] hh:mm A z')}
            </span>
          </div>
          <div className="d-flex">
            <div className="me-4">
              <h5 className="mb-1">{hours}</h5>
              <span>Hours</span>
            </div>
            <div className="me-4">
              <h5 className="mb-1">{minutes}</h5>
              <span>Minutes</span>
            </div>
            <div className="me-4">
              <h5 className="mb-1">{seconds}</h5>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      )}
      <div className="mb-2 sale-body">
        <p>Current price</p>
        <div className="d-flex align-items-end">
          <img src={`/assets/coins/${payToken(data)}.svg`} />
          <h3 className="mx-2 mb-0">{data.price}</h3>
          <span>
            (${(Math.round(Number(data.priceInUSD) * 100) / 100).toFixed(2)})
          </span>
        </div>
      </div>
      <div className="d-flex">
        <Button className="btn-bundle me-2">
          <Wallet />
          <span className="ms-2">Buy Bundle</span>
        </Button>
        <Button>
          <Offer />
          <span className="ms-2">Make Offer</span>
        </Button>
      </div>
    </div>
  )
}

export default Sale
