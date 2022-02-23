import Accordion from 'react-bootstrap/Accordion'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import ArrowDownUp from 'react-bootstrap-icons/dist/icons/arrow-down-up'

const ACTIVITIES = [
  { event: 'List', price: 0.588, from: 'Kensw', to: '', date: '12 hours ago' },
  {
    event: 'Offer',
    price: 0.4,
    from: 'BORABORA_Ape_Club',
    to: '',
    date: '14 hours ago'
  },
  { event: 'List', price: 0.588, from: 'Kensw', to: '', date: '2 days ago' },
  { event: 'List', price: 0.588, from: 'Kensw', to: '', date: '4 days ago' }
]

function Activity() {
  return (
    <div className="activity">
      <Accordion className="mt-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <ArrowDownUp className="me-2" />
            Item Activity
          </Accordion.Header>
          <Accordion.Body>
            <div className="activity-item">
              <Dropdown>
                <Dropdown.Toggle className="w-100 justify-content-between">
                  Filter
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                  <Dropdown.Item className="d-flex align-items-center">
                    <Form.Check />
                    <span className="ms-2">Listings</span>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex align-items-center">
                    <Form.Check />
                    <span className="ms-2">Sales</span>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex align-items-center">
                    <Form.Check />
                    <span className="ms-2">Bids</span>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex align-items-center">
                    <Form.Check />
                    <span className="ms-2">Transfers</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-flex fw-bold activity-item">
              <div className="d-flex-1">Event</div>
              <div className="d-flex-1">Price</div>
              <div className="d-flex-1">From</div>
              <div className="d-flex-1">To</div>
              <div className="d-flex-1">Date</div>
            </div>
            {ACTIVITIES.map((item, index) => (
              <div className="d-flex activity-item" key={`at-${index}`}>
                <div className="d-flex-1">{item.event}</div>
                <div className="d-flex-1">{item.price}</div>
                <div className="d-flex-1">
                  <a href="#">{item.from}</a>
                </div>
                <div className="d-flex-1">{item.to}</div>
                <div className="d-flex-1">{item.date}</div>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Activity
