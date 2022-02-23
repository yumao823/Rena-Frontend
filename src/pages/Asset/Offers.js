import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import List from 'react-bootstrap-icons/dist/icons/list-ul'

const OFFERS = [
  {
    price: 0.4,
    usd_price: 1750.55,
    floor_difference: 300.0,
    expiration: 3,
    from: 'BORABORA_Ape_Club'
  }
]

function Offers() {
  return (
    <div className="offers">
      <Accordion className="mt-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <List className="me-2" />
            <span>Offers</span>
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex fw-bold offers-item">
              <div className="d-flex-1">Price</div>
              <div className="d-flex-1">USD Price</div>
              <div className="d-flex-2">Floor difference</div>
              <div className="d-flex-1">Expiration</div>
              <div className="d-flex-2">From</div>
            </div>
            {OFFERS.map((item, index) => (
              <div className="d-flex offers-item" key={`li-${index}`}>
                <div className="d-flex-1">
                  <span className="fw-bold me-1">{item.price}</span>
                  <span>WETH</span>
                </div>
                <div className="d-flex-1">${item.usd_price}</div>
                <div className="d-flex-2">{item.floor_difference}% above</div>
                <div className="d-flex-1">in {item.expiration} days</div>
                <div className="d-flex-2">
                  <a href="#">{item.from}</a>
                </div>
              </div>
            ))}
            <div className="offers-item">
              <Button>Make Offer</Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Offers
