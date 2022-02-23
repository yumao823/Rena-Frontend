import Button from 'react-bootstrap/Button'
import Warning from 'components/Warning'
import JazzIcon from 'components/JazzIcon'
import Select from 'react-select'
import EthIcon from 'assets/images/stats/eth.svg'

const COLLECTIONS = [
  { id: 0, counts: 3, name: 'Metatravise Travel Agency (M.T.A)', price: 0.3 }
]

const OPTIONS = [
  {
    value: 'eth',
    label: (
      <div className="d-flex align-items-center">
        <img src={EthIcon} />
        <span className="ms-2">0</span>
      </div>
    )
  }
]

function Offers() {
  return (
    <div className="offers">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mb-4">Offer Settings</h1>
        <Button>View my offers</Button>
      </div>
      <p className="mb-4">
        Set a minimum offer for collections to ignore low offers
        <Warning description="You will not be notified on offers below your minimum amounts." />
      </p>
      <div className="d-flex fw-bold py-3 offers-item">
        <div className="d-flex-4">Collection</div>
        <div className="d-flex-1">Minimum offer</div>
      </div>
      {COLLECTIONS.map((item) => (
        <div
          className="d-flex align-items-center offers-item py-3"
          key={item.id}
        >
          <div className="d-flex d-flex-4 align-items-center">
            <JazzIcon
              account="0x636a633b126D6bfF9FFD9F8210eB70bb5968a8aD"
              size={100}
            />
            <div className="ms-3">
              <p className="mb-1">{item.counts} items</p>
              <p className="fw-bold mb-1">{item.name}</p>
              <p>Floor price: {item.price} ETH</p>
            </div>
          </div>
          <div className="d-flex-1">
            <Select
              className="basic-single mb-3"
              classNamePrefix="select"
              defaultValue={OPTIONS[0]}
              options={OPTIONS}
            />
            <span>$0 USD</span>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-end py-3 offers-item">
        <Button>Save</Button>
      </div>
    </div>
  )
}

export default Offers
