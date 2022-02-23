import Select from 'react-select'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EthIcon from 'assets/images/stats/eth.svg'

const DATES = [
  { value: 0, label: 'Recently Listed' },
  { value: 1, label: 'Recently Created' },
  { value: 2, label: 'Recently Sold' }
]
const CATEGORIES = [
  { value: 0, label: 'All Categories' },
  { value: 1, label: 'New' },
  { value: 2, label: 'Art' }
]
const CHAINS = [
  { value: 0, label: 'All Chains' },
  { value: 1, label: 'Ethereum' },
  { value: 2, label: 'Polygon' },
  { value: 3, label: 'Klaytn' }
]

export default function Stats() {
  return (
    <div className="stats">
      <h1 className="text-center">Top NFTs</h1>
      <h5 className="text-center my-4">
        The top NFTs on OpenSea, ranked by volume, floor price and other
        statistics.
      </h5>
      <div className="d-flex justify-content-center mb-5">
        <Select
          className="basic-single me-4"
          classNamePrefix="select"
          defaultValue={DATES[0]}
          isSearchable
          name="dates"
          options={DATES}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#93c1f1'
            }
          })}
        />
        <Select
          className="basic-single me-4"
          classNamePrefix="select"
          defaultValue={CATEGORIES[0]}
          isSearchable
          name="categories"
          options={CATEGORIES}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#93c1f1'
            }
          })}
        />
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={CHAINS[0]}
          isSearchable
          name="chains"
          options={CHAINS}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: '#93c1f1'
            }
          })}
        />
      </div>
      <Row className="pb-4 fw-bold text-end stats-item">
        <Col lg={3} className="text-start">
          <span>Collection</span>
        </Col>
        <Col lg={2}>
          <span>Volume</span>
        </Col>
        <Col lg={1}>
          <span>24h %</span>
        </Col>
        <Col lg={1}>
          <span>7d %</span>
        </Col>
        <Col lg={2}>
          <span>Floor price</span>
        </Col>
        <Col lg={2}>
          <span>Owners</span>
        </Col>
        <Col lg={1}>
          <span>Assets</span>
        </Col>
      </Row>
      {[1, 2].map((item) => (
        <Row className="py-4 fw-bold align-items-center text-end stats-item">
          <Col lg={3} className="text-start">
            <span>
              {item}
              <img
                className="mx-2"
                src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s100"
                width="40"
                style={{ borderRadius: '50%' }}
              />
              CryptoPunks
            </span>
          </Col>
          <Col lg={2}>
            <span>
              <img
                className="me-2"
                src={EthIcon}
                width="18"
                style={{ color: '#ccc' }}
              />
              9700.94
            </span>
          </Col>
          <Col lg={1}>
            <span>-45.72 %</span>
          </Col>
          <Col lg={1}>
            <span>+41.36 %</span>
          </Col>
          <Col lg={2}>
            <span>
              <img
                className="me-2"
                src={EthIcon}
                width="18"
                style={{ color: '#ccc' }}
              />
              36
            </span>
          </Col>
          <Col lg={2}>
            <span>3.2K</span>
          </Col>
          <Col lg={1}>
            <span>10.0K</span>
          </Col>
        </Row>
      ))}
    </div>
  )
}
