import EthIcon from 'assets/images/crypto/eth.svg'
import PolygonIcon from 'assets/images/crypto/polygon.svg'

export const BLOCKCHAINES = [
  {
    value: 'Ethereum',
    label: (
      <div className="d-flex align-items-center">
        <img className="me-2" src={EthIcon} /> Ethereum
      </div>
    )
  },
  {
    value: 'Polygon',
    label: (
      <div className="d-flex align-items-center">
        <img className="me-2" src={PolygonIcon} /> Polygon
      </div>
    )
  }
]
