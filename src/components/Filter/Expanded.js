import Accordion from 'react-bootstrap/Accordion'
import ArrowLeft from 'react-bootstrap-icons/dist/icons/arrow-left'
import FilterIcon from 'react-bootstrap-icons/dist/icons/filter'
import Status from './Status'
import Price from './Price'
import Collections from './Collections'
import Categories from './Categories'

export default function Filter({ onPrices, onCollections, onToggle }) {
  return (
    <>
      <div className="filter-head">
        <div className="d-flex align-items-center">
          <FilterIcon color="#ccc" size={24} />
          <span className="fw-bold ms-2">Filter</span>
        </div>
        <ArrowLeft className="cursor-pointer" color="#ccc" onClick={onToggle} />
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Status</Accordion.Header>
          <Accordion.Body>
            <Status />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <Price onChange={onPrices} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Collections</Accordion.Header>
          <Accordion.Body>
            <Collections onChange={onCollections} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Categories</Accordion.Header>
          <Accordion.Body>
            <Categories />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}
