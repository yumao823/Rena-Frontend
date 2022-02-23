import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Offer from 'react-bootstrap-icons/dist/icons/tag-fill'

const LISTINGS = [
  {
    price: 0.588,
    usd_price: 2573.31,
    expiration: 'in a day',
    from: 'Kensw'
  },
  {
    price: 0.588,
    usd_price: 2573.31,
    expiration: 'in a day',
    from: 'Kensw'
  }
]

function Listings() {
  return (
    <div className="listings">
      <Accordion className="mt-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Offer className="me-2" />
            <span>Listings</span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex fw-bold listings-item">
              <div className="d-flex-1">Price</div>
              <div className="d-flex-1">USD Price</div>
              <div className="d-flex-1">Expiration</div>
              <div className="d-flex-1">From</div>
              <div className="d-flex-1" />
            </div>
            {LISTINGS.map((item, index) => (
              <div className="d-flex listings-item" key={`li-${index}`}>
                <div className="d-flex-1">
                  <span className="fw-bold me-1">{item.price}</span>
                  <span>ETH</span>
                </div>
                <div className="d-flex-1">${item.usd_price}</div>
                <div className="d-flex-1">{item.expiration}</div>
                <div className="d-flex-1">
                  <a href="#">{item.from}</a>
                </div>
                <div className="d-flex-1">
                  <Button className="py-1 ms-auto">Buy</Button>
                </div>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Listings
