import { useState } from 'react'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Select from 'react-select'
import EthIcon from 'assets/images/price/eth.svg'

const TYPES = [
  {
    value: 'usd',
    label: (
      <div className="d-flex align-items-center">
        <div className="dollar">$</div>United State Dollar (USD)
      </div>
    )
  },
  {
    value: 'eth',
    label: (
      <div className="d-flex align-items-center">
        <img src={EthIcon} /> Ether (ETH)
      </div>
    )
  }
]

function Price({ onChange }) {
  const [payment, setPayment] = useState(TYPES[0].value)
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(0)

  return (
    <div className="price">
      <Select
        className="basic-single mb-3"
        classNamePrefix="select"
        defaultValue={TYPES[0]}
        options={TYPES}
        onChange={(e) => setPayment(e.value)}
      />
      <div className="d-flex align-items-center mb-2">
        <FormControl
          placeholder="Min"
          onChange={(e) => setPriceMin(e.target.value)}
        />
        <span className="px-2">to</span>
        <FormControl
          placeholder="Max"
          onChange={(e) => setPriceMax(e.target.value)}
        />
      </div>
      <Button
        className="px-5 m-0"
        onClick={() => onChange({ payment, priceMin, priceMax })}
      >
        Apply
      </Button>
    </div>
  )
}

export default Price
