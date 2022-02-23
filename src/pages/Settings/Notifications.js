import ListGroup from 'react-bootstrap/ListGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import EthIcon from 'assets/images/stats/eth.svg'

const NOTIFICATIONS = [
  { title: 'Item Sold', body: 'When someone purchased one of your items' },
  { title: 'Big Activity', body: 'When someone bids on one of your items' },
  {
    title: 'Price Change',
    body: 'When an item you made offer on changes price'
  },
  {
    title: 'Auction Expiration',
    body: 'When a Dutch or English auction you create ends'
  },
  {
    title: 'Outbid',
    body: 'When an offer you placed is exceeded by another user'
  },
  {
    title: 'Referral Successful',
    body: 'When an item you referred is purchased'
  },
  {
    title: 'Owned Asset Updates',
    body: 'When a significant update occurs for one of the items you have purchased on OpenSea'
  },
  { title: 'Successful Purchase', body: 'When you successfully buy an item' },
  {
    title: 'OpenSea NewSletter',
    body: 'Occasional updates from the OpenSea team'
  }
]

function Notifications() {
  return (
    <div className="notifications">
      <h1 className="mb-4">Notification Settings</h1>
      <p>
        Select which notifications you would like to receive for 0x3857...f72c
      </p>
      <ListGroup className="mb-4">
        {NOTIFICATIONS.map((item, index) => (
          <ListGroup.Item className="d-flex align-items-center p-3" key={index}>
            <Form.Check type="checkbox" label="" />
            <div className="ms-3">
              <p className="mb-0 fw-bold">{item.title}</p>
              <p className="mb-0">{item.body}</p>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h5>Minimum Bid Threshold</h5>
      <p>
        Receive notifications only when you receive offers with a value greater
        than or equal to this amount of ETH.
      </p>
      <InputGroup className="mb-4">
        <InputGroup.Text className="px-4 py-3">
          <img src={EthIcon} />
          <div className="ms-2">
            <p className="fw-bold m-0">ETH</p>
          </div>
        </InputGroup.Text>
        <FormControl placeholder="0.005" />
      </InputGroup>
      <div className="d-flex">
        <Button className="ms-auto">Save</Button>
      </div>
    </div>
  )
}

export default Notifications
